from flask import Flask, request, render_template

app = Flask(__name__)

from flask import Flask, request, render_template
from datetime import datetime
from dateutil.relativedelta import relativedelta
from bs4 import BeautifulSoup
import pandas as pd
import pymysql
import requests


def connect_db():
    conn = pymysql.connect(host='localhost', user='root', passwd='admin', db='finance')
    return conn


db = connect_db()


def to_dict(list_data):
    list_data = [j for i in list_data for j in i]
    result = {'ki': list_data[0:5], 'sk': list_data[5:10], 'hd': list_data[10:15], 'ss': list_data[15:20],
              'na': list_data[25:30], 'ka': list_data[30:35], 'ce': list_data[40:45], 'sb': list_data[45:50]}
    return result


def get_roa_data():
    sql = """
    SELECT ROA
    FROM profitability
    ORDER BY CODE, DATE
    """
    cursor = db.cursor()
    cursor.execute(sql)
    roa_datas = cursor.fetchall()
    roa = to_dict(roa_datas)

    return roa


def get_debt_data():
    sql = """
    SELECT debt_ratio
    FROM stability
    ORDER BY CODE, DATE
    """
    cursor = db.cursor()
    cursor.execute(sql)
    debt_datas = cursor.fetchall()
    debt = to_dict(debt_datas)

    return debt


def get_ni_data():
    sql = """
    SELECT net_income
    FROM statements
    ORDER BY CODE, bsns_year
    """
    cursor = db.cursor()
    cursor.execute(sql)
    ni_datas = cursor.fetchall()
    ni = to_dict(ni_datas)

    return ni


def get_atr_data():
    sql = """
    SELECT asset_turnover_ratio
    FROM activity
    ORDER BY CODE, DATE
    """
    cursor = db.cursor()
    cursor.execute(sql)
    atr_datas = cursor.fetchall()
    atr = to_dict(atr_datas)

    return atr


def get_stock_data(code, start_date, end_date):
    sql = """
    select stock_date, close_price 
    from stock
    where stock_code = %s
    AND stock_date BETWEEN %s AND %s
    ORDER BY stock_date;
    """

    cursor = db.cursor(pymysql.cursors.DictCursor)
    cursor.execute(sql, [code, start_date, end_date])
    data = cursor.fetchall()

    stock_data = []
    date = []
    prices = []
    for d in data:
        date.append(d['stock_date'].strftime('%Y-%m-%d'))
        prices.append(d['close_price'])
    stock_data.append(date)
    stock_data.append(prices)

    return stock_data


def get_corp_name(code):
    sql = """
    select corp_name
    from corplist
    where stock_code = %s
    """

    cursor = db.cursor()
    cursor.execute(sql, code)
    corp_name = cursor.fetchone()[0]

    return corp_name


before_one_day = datetime.now() - relativedelta(days=1)
before_three_months = (before_one_day - relativedelta(months=3)).strftime('%Y%m%d')
before_six_months = (before_one_day - relativedelta(months=6)).strftime('%Y%m%d')
before_one_year = (before_one_day - relativedelta(years=1)).strftime('%Y%m%d')
before_three_years = (before_one_day - relativedelta(years=3)).strftime('%Y%m%d')
before_five_years = (before_one_day - relativedelta(years=5)).strftime('%Y%m%d')


def get_stock(code):
    pre_day = before_one_day.strftime('%Y%m%d')

    stock_3m = get_stock_data(code, before_three_months, pre_day)
    stock_6m = get_stock_data(code, before_six_months, pre_day)
    stock_1y = get_stock_data(code, before_one_year, pre_day)
    stock_3y = get_stock_data(code, before_three_years, pre_day)
    stock_5y = get_stock_data(code, before_five_years, pre_day)

    stock = {}
    stock['3m'] = stock_3m
    stock['6m'] = stock_6m
    stock['1y'] = stock_1y
    stock['3y'] = stock_3y
    stock['5y'] = stock_5y

    return stock


# 메인페이지
@app.route('/')
def index():
    # 기업 리스트
    cursor = db.cursor(pymysql.cursors.DictCursor)  # 딕셔너리 형태로 반환
    cursor.execute("select * from corplist")
    corplist = cursor.fetchall()

    # 기업별 일주일 주가데이터
    sql = """
    select close_price 
    from stock
    where stock_code = %s
    order by stock_date desc
    limit 7
    """
    cursor = db.cursor()
    codes = [corp['stock_code'] for corp in corplist]
    weekdatas = []
    for code in codes:
        cursor.execute(sql, code)
        datas = cursor.fetchall()
        datas = [j for i in datas for j in i]
        datas.reverse()
        weekdatas.append(datas)

    # 기업별 하루 전 날의 주가데이터
    sql = """
    select close_price 
    from stock
    where stock_code = %s
    order by stock_date desc
    limit 1
    """
    cursor = db.cursor()
    prices = {}
    for code in codes:
        cursor.execute(sql, code)
        datas = cursor.fetchall()
        for data in datas:
            for price in data:
                prices[code] = format(price, ',')

    pre_day = before_one_day.strftime('%Y-%m-%d')
    roa_data = get_roa_data()       # ROA
    debt_data = get_debt_data()     # 부채비율
    ni_data = get_ni_data()         # 당기순이익
    atr_data = get_atr_data()       # 총자산회전율

    return render_template("index.html", corplist=corplist, weekdatas=weekdatas, prices=prices, pre_day=pre_day,
                           roa=roa_data, debt=debt_data, ni=ni_data, atr=atr_data)


# 상세페이지
@app.route('/statements/<code>')
def statements(code):
    conn = connect_db()

    def make_data(code):
        import pymysql

        db = pymysql.connect(host="localhost", port=3306, user="admin", passwd="pass", db="finance")

        sql = """
                select *
                from statements
                where code = %s
                ORDER BY bsns_year;
                """
        cursor = db.cursor(pymysql.cursors.DictCursor)
        cursor.execute(sql, code)
        data = cursor.fetchall()

        return data

    data = make_data(code)

    take = []
    op = []
    ni = []
    ta = []
    tl = []
    te = []
    cfo = []
    cff = []
    cfi = []

    for d in data:
        take.append(d.get('take'))
        op.append(d.get('operating_profit'))
        ni.append(d.get('net_income'))
        ta.append(d.get('total_assets'))
        tl.append(d.get('total_liabilities'))
        te.append(d.get('total_equity'))
        cfo.append(d.get('cf_operating'))
        cff.append(d.get('cf_financing'))
        cfi.append(d.get('cf_investing'))

    stock = get_stock(code)

    corp_name = get_corp_name(code)

    return render_template("statements.html", TAKE=take, OP=op, NI=ni, TA=ta, TL=tl, TE=te, CFO=cfo, CFF=cff, CFI=cfi,
                           CODE=code, stock_code=code, stock=stock, corp_name=corp_name)


# 상세페이지
@app.route('/ratio/<code>')
def ratio(code):
    conn = connect_db()
    # code = request.args.get("code")

    # 수익성 지표
    sql = "select date, ROA, ROE, profit_margin_ratio, oper_margin_ratio from profitability where code=" + code
    df = pd.read_sql(sql, conn)
    profitability_list = []
    date_list = [d.strftime('%Y') for d in df["date"].tolist()]
    roa_list = df["ROA"].tolist()
    roe_list = df["ROE"].tolist()
    profit_list = df["profit_margin_ratio"].tolist()
    oper_list = df["oper_margin_ratio"].tolist()

    # 안정성 지표
    sql = "select date, current_ratio, quick_ratio, debt_ratio, finalcial_ratio from stability where code=" + code
    df = pd.read_sql(sql, conn)
    current_list = df["current_ratio"].tolist()
    quick_list = df["quick_ratio"].tolist()
    debt_list = df["debt_ratio"].tolist()
    financial_list = df["finalcial_ratio"].tolist()
    conn.close()

    # 투자의견 컨센서스
    headers = {"User-Agent": "Mozilla/5.0"}
    url = "http://comp.fnguide.com/SVO2/ASP/SVD_Main.asp?pGB=1&gicode=A" + code + "&cID=&MenuYn=Y&ReportGB=&NewMenuID=101&stkGb=701"
    html = requests.get(url, headers=headers).text
    soup = BeautifulSoup(html, 'html.parser')
    bar_data = soup.find("div", attrs={"id": "svdMainGraph8"}).text
    title = soup.select("#svdMainGrid9 > table > thead > tr > th")
    title_list = [data.text for data in title]
    opinion = soup.find("tr", attrs={"class": "rwc_g tr_h68"}).find_all("td")
    opinion_list = [data.text for data in opinion]

    stock = get_stock(code)

    corp_name = get_corp_name(code)

    return render_template("ratio.html", CODE=code, DATE_LIST=date_list, ROA_LIST=roa_list, ROE_LIST=roe_list,
                           PROFIT_LIST=profit_list, OPER_LIST=oper_list, CUR_LIST=current_list, QUICK_LIST=quick_list,
                           DEBT_LIST=debt_list, FIN_LIST=financial_list, BAR_DATA=bar_data, TITLE_LIST=title_list,
                           OPI_LIST=opinion_list,
                           stock_code=code, stock=stock, corp_name=corp_name)


# 주요주가분석 페이지
@app.route('/stock/<code>')
def stock(code):
    # 투자의견 컨센서스
    headers = {"User-Agent": "Mozilla/5.0"}
    url = "http://comp.fnguide.com/SVO2/ASP/SVD_Main.asp?pGB=1&gicode=A" + code + "&cID=&MenuYn=Y&ReportGB=&NewMenuID=101&stkGb=701"
    html = requests.get(url, headers=headers).text
    soup = BeautifulSoup(html, 'html.parser')
    bar_data = soup.find("div", attrs={"id": "svdMainGraph8"}).text
    title = soup.select("#svdMainGrid9 > table > thead > tr > th")
    title_list = [data.text for data in title]
    opinion = soup.find("tr", attrs={"class": "rwc_g tr_h68"}).find_all("td")
    opinion_list = [data.text for data in opinion]

    # 주가 데이터
    stock = get_stock(code)

    corp_name = get_corp_name(code)
    print(corp_name)

    return render_template("stock.html", CODE=code, BAR_DATA=bar_data, TITLE_LIST=title_list, OPI_LIST=opinion_list,
                           stock_code=code, stock=stock, corp_name=corp_name)


if __name__ == '__main__':
    app.run(host='localhost', port=8077, debug=True)
