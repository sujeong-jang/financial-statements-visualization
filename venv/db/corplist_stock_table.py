import pymysql
import pandas as pd
import time
from pykrx import stock
from sqlalchemy import create_engine
from datetime import datetime, timedelta

# DB 연결
db = pymysql.connect(host='localhost', port=3306,
                          user='root', passwd='admin',
                          db='finance')

cursor = db.cursor()

# MariaDB Connector using pymysql
pymysql.install_as_MySQLdb()

engine = create_engine("mysql://root:admin@localhost/finance",encoding="utf-8")


# coplist 테이블 생성
sql = """
create table if not exists corplist (
    stock_code       varchar(6),
    corp_name       varchar(100),
    primary key(stock_code)
)
"""

cursor.execute(sql)
db.commit()


# stock 테이블 생성
sql = """
create table if not exists stock (
    stock_code   varchar(6),
    stock_date   date,
    close_price  int(8),
    primary key(stock_code, stock_date)
)
"""

cursor.execute(sql)
db.commit()


# coplist 생성 및 데이터 insert
# 삼성전자, SK하이닉스, NAVER, LG화학, 삼성바이오로직스
# 현대차, 삼성SDI, 셀트리온, 카카오, 기아차
codes = ['005930','000660','035420','051910','207940',
         '005380','006400','068270','035720','000270']

names = ['삼성전자','SK하이닉스','NAVER','LG화학','삼성바이오로직스',
         '현대차','삼성SDI','셀트리온','카카오','기아차']

corp_df = pd.DataFrame({
    'stock_code':codes,
    'corp_name':names
})

try:
    corp_df.to_sql(name="corplist",con=engine,if_exists="append",index=False)
except:
    pass

# 주가 데이터를 가져와서 데이터프레임 만드는 함수
def get_stock_df(start_date, end_date, stock_code):
    stock_df = stock.get_market_ohlcv_by_date(start_date, end_date, stock_code)
    stock_df.reset_index(inplace=True)
    
    stock_df["종목코드"] = stock_code
    stock_df.drop(['시가','고가','저가','거래량'], axis=1, inplace=True)
    
    stock_df = stock_df[["종목코드","날짜","종가"]]
    stock_df.columns = ["stock_code","stock_date","close_price"]
    
    return stock_df

# 각 기업별로 주가 데이터를 구해서 데이터를 삽입하는 함수
def stock_data_insert(start_date, end_date, corplist):
    for code, name in corplist:
        try:
            stock_df = get_stock_df(start_date, end_date, code)
            stock_df.to_sql(name="stock",con=engine,if_exists="append",index=False)
            print(name, time.time()-start_time)

            time.sleep(0.1)
        except:
            pass

# corplist 가져오기 
cursor.execute("select * from corplist")
corplist = cursor.fetchall()


# 어제 날짜와 그 날짜부터 5년 전의 날짜 구하기
pre_day = datetime.now() + timedelta(days=-1)
end_date = pre_day.strftime('%Y%m%d')
start_date = str(pre_day.year - 5) +  pre_day.strftime('%m%d')

print(start_date, end_date)
start_time = time.time()


stock_data_insert(start_date, end_date, corplist)
# stock_data_insert('20210402','20210402',corplist) # 날짜별 주가 데이터 insert