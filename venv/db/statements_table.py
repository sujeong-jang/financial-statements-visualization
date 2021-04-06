#!/usr/bin/env python
# coding: utf-8

# In[3]:


import pandas as pd


def make_df(code):

    from selenium import webdriver
    from bs4 import BeautifulSoup
    import numpy as np
    import pandas as pd
    import time
    
    try:
        options = webdriver.ChromeOptions()
        options.add_argument('headless')

        driver = webdriver.Chrome(chrome_options = options)

        base_url = "https://navercomp.wisereport.co.kr/v2/company/c1010001.aspx?cmp_cd="
        url = base_url + code
        
        driver.get(url)
        time.sleep(0.5)

        #연간 데이터 탭 선택
        year = driver.find_element_by_css_selector("a#cns_Tab21")
        click = year.click()

        html = driver.page_source
        soup = BeautifulSoup(html, "html.parser")
        data = soup.select("table.gHead01")

        #데이터 값
        num_data = data[3].select("td.num")

        issue = []

        for i in range(0,len(num_data)):
            val = num_data[i].text.strip()
            issue.append(val)

        np_issue = np.array(issue)
        row_data = np_issue.reshape(33,8)

        #데이터 내용
        txt_data = data[3].select("th.title")

        title = []

        for i in range(0,len(txt_data)):
            val = txt_data[i].text.strip()
            title.append(val)

        df=pd.DataFrame(row_data, index=title)
        df.columns=[2016,2017,2018,2019,2020,0,0,0]
        df = df.loc[["매출액","영업이익","당기순이익","자산총계","부채총계","자본총계","영업활동현금흐름","투자활동현금흐름","재무활동현금흐름"]]  
        df=df.transpose()
        df=df.iloc[0:5]
        
        #데이터 프레임
        df = df.rename_axis('연도').reset_index()
        df["code"] = code
        df.columns=["bsns_year","take","operating_profit","net_income","total_assets","total_liabilities","total_equity","cf_operating","cf_investing","cf_financing","code"]
        df = df[["code","bsns_year","take","operating_profit","net_income","total_assets","total_liabilities","total_equity","cf_operating","cf_investing","cf_financing"]]
    
    except:
        print("Error")
    
    return df

code = ["005930", "000660","035420","000270","051910","207940","005380","006400","068270","035720"]

fin_df = []

for i in range(0,len(code)):
    fin_info = make_df(code[i])
    fin_df.append(fin_info)
    
df = pd.concat(fin_df[:])

for col in df.columns[2:]:
    df[col] = df[col].apply(lambda x: x.replace(',',''))
    df[col] = pd.to_numeric(df[col])

#DB 연결    
import pymysql
from sqlalchemy import create_engine
pymysql.install_as_MySQLdb()
import MySQLdb
    
db=pymysql.connect(host="localhost", port=3306, user="root", passwd="admin")

cursor = db.cursor()
cursor.execute("create database if not exists finance")
db.commit()

db=pymysql.connect(host="localhost", port=3306, user="root", passwd="admin", db="finance")

sql = """
        create table if not exists statements(
                code varchar(6),
                bsns_year year,
                take int(20),
                operating_profit int(20),
                net_income int(20),
                total_assets int(20),
                total_liabilities int(20),
                total_equity int(20),
                cf_operating int(20),
                cf_investing int(20),
                cf_financing int(20))
            """

cursor = db.cursor()
cursor.execute(sql)
db.commit()

engine = create_engine("mysql://root:admin@127.0.0.1/finance",encoding="utf-8")
df.to_sql(name="statements",con=engine,if_exists="append",index=False)


# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:




