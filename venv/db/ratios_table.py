#!/usr/bin/env python
# coding: utf-8

# In[2]:


# DB 연동
import pymysql

conn = pymysql.connect(host='localhost', user='admin', passwd='admin')
cursor = conn.cursor()


# In[7]:


# DB 생성
sql = "CREATE DATABASE IF NOT EXISTS finance"

cursor.execute(sql)

conn.commit()

# Table 생성

# 안정성비율 DB
conn = pymysql.connect(host='localhost', user='root', passwd='admin', db='finance')
cursor = conn.cursor()

sql = """
CREATE TABLE IF NOT EXISTS stability(
                                code VARCHAR(10),
                                date Date,
                                current_ratio DOUBLE,
                                quick_ratio DOUBLE,
                                debt_ratio DOUBLE,
                                finalcial_ratio DOUBLE,
                                PRIMARY KEY (code, date)
                                )
"""

# 성장성비율 DB
cursor.execute(sql)

sql = """
CREATE TABLE IF NOT EXISTS growth(
                                code VARCHAR(10),
                                date Date,
                                sales_increase_rate  DOUBLE,
                                PRIMARY KEY (code, date)
                                )
"""
cursor.execute(sql)

# 활동성비율 DB

sql = """
CREATE TABLE IF NOT EXISTS activity(
                                code VARCHAR(10),
                                date Date,
                                asset_turnover_ratio DOUBLE,
                                PRIMARY KEY (code, date)
                                )
"""
cursor.execute(sql)

# 수익성비율 DB

sql = """
CREATE TABLE IF NOT EXISTS profitability (
                                code VARCHAR(10),
                                date Date,
                                ROA DOUBLE,
                                ROE DOUBLE,
                                profit_margin_ratio DOUBLE,
                                oper_margin_ratio DOUBLE,
                                PRIMARY KEY (code, date)
                                )
"""
cursor.execute(sql)

conn.commit()


# In[8]:


date_list = []

# 성장성비율
sales_increase_rate_list = [] # 매출액증가율

# 안정성비율
current_ratio_list = []   # 유동비율
quick_ratio_list = []     # 당좌비율
debt_ratio_list = []      # 부채비율
reserve_ratio_list = []   # 유보율
finalcial_ratio_list = [] # 자기자본비율

# 활동성비율
asset_turnover_ratio_list = []            # 총자산회전율

# 수익성비율
ROA_list = []                 # 총자산순이익률(ROA)
ROE_list = []                 # 자기자본순이익률(ROE)
profit_margin_ratio_list = [] # 매출액총이익률
oper_margin_ratio_list = []   # 영업이익률


# In[9]:


import pandas as pd
import requests
from bs4 import BeautifulSoup
from datetime import datetime

def financial_latio(stock_code):
    url_tmpl = 'http://comp.fnguide.com/SVO2/ASP/SVD_FinanceRatio.asp?pGB=1&gicode=A%s&cID=&MenuYn=Y&ReportGB=&NewMenuID=104&stkGb=701'
    url = url_tmpl % (code)

    html = requests.get(url)
    soup = BeautifulSoup(html.content, 'html.parser')
    
    # 날짜 리스트에 저장
    thead = soup.find("thead").find_all("th")[1:]
    date_list = [date.text.replace("/", "-") for date in thead]
    date_list
    
    ## 안정성비율

    # 유동비율
    td = soup.find("tr", attrs={"id":"p_grid1_1"}).find_all("td")
    current_ratio_list = [rate.text for rate in td]

    # 당좌비율
    td = soup.find("tr", attrs={"id":"p_grid1_2"}).find_all("td")
    quick_ratio_list = [rate.text for rate in td]

    # 부채비율
    td = soup.find("tr", attrs={"id":"p_grid1_3"}).find_all("td")
    debt_ratio_list = [rate.text for rate in td]

    # 자기자본비율
    td = soup.find("tr", attrs={"id":"p_grid1_7"}).find_all("td")
    finalcial_ratio_list = [rate.text for rate in td]

    
    ## 성장성비율

    # 매출액증가율
    td = soup.find("tr", attrs={"id":"p_grid1_8"}).find_all("td")
    sales_increase_rate_list = [rate.text for rate in td]
    
    ## 수익성비율

    # 매출액총이익률
    td = soup.find("tr", attrs={"id":"p_grid1_13"}).find_all("td")
    profit_margin_ratio_list = [rate.text for rate in td]

    # 영업이익률
    td = soup.find("tr", attrs={"id":"p_grid1_15"}).find_all("td")
    oper_margin_ratio_list = [rate.text for rate in td]
    
    # 총자산순이익률(ROA)
    td = soup.find("tr", attrs={"id":"p_grid1_17"}).find_all("td")
    ROA_list = [rate.text for rate in td]

    # 자기자본순이익률(ROE)
    td = soup.find("tr", attrs={"id":"p_grid1_18"}).find_all("td")
    ROE_list = [rate.text for rate in td]
    
    ## 회전성비율
    
    # 총자산회전율
    td = soup.find("tr", attrs={"id":"p_grid1_20"}).find_all("td")
    asset_turnover_ratio_list = [rate.text for rate in td]
    
    # DB insert
    for i in range(0, len(date_list)): # 16개 컬럼
        date = datetime.strptime(date_list[i], "%Y-%m") # str -> date
        current_ratio = current_ratio_list[i]
        quick_ratio = quick_ratio_list[i]
        debt_ratio = debt_ratio_list[i]
        finalcial_ratio = finalcial_ratio_list[i]

        sql = "INSERT INTO stability VALUES (%s, %s, %s, %s, %s, %s)"
        cursor.execute(sql, (code, date, current_ratio,
                             quick_ratio, debt_ratio,
                             finalcial_ratio))

        sales_increase_rate = sales_increase_rate_list[i]
        
        sql = "INSERT INTO growth VALUES (%s, %s, %s)"
        cursor.execute(sql, (code, date, sales_increase_rate))

        asset_turnover_ratio = asset_turnover_ratio_list[i]

        sql = "INSERT INTO activity VALUES (%s, %s, %s)"
        cursor.execute(sql, (code, date, asset_turnover_ratio))

        ROA = ROA_list[i]
        ROE = ROE_list[i]
        profit_margin_ratio = profit_margin_ratio_list[i]
        oper_margin_ratio = oper_margin_ratio_list[i]

        sql = "INSERT INTO profitability VALUES (%s, %s, %s, %s, %s, %s)"
        cursor.execute(sql, (stock_code, date, ROA,ROE,
                             profit_margin_ratio, oper_margin_ratio))
        conn.commit()


# In[10]:


code_list = ["005930", "000660", "035420", "051910", "207940",
             "005380", "006400", "068270", "035720", "000270"]

for code in code_list:
    financial_latio(code)

