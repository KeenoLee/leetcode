# 607. Sales Person
# Easy
# Topics
# Companies
# Hint
# SQL Schema
# Pandas Schema
# Table: SalesPerson

# +-----------------+---------+
# | Column Name     | Type    |
# +-----------------+---------+
# | sales_id        | int     |
# | name            | varchar |
# | salary          | int     |
# | commission_rate | int     |
# | hire_date       | date    |
# +-----------------+---------+
# sales_id is the primary key (column with unique values) for this table.
# Each row of this table indicates the name and the ID of a salesperson alongside their salary, commission rate, and hire date.
 

# Table: Company

# +-------------+---------+
# | Column Name | Type    |
# +-------------+---------+
# | com_id      | int     |
# | name        | varchar |
# | city        | varchar |
# +-------------+---------+
# com_id is the primary key (column with unique values) for this table.
# Each row of this table indicates the name and the ID of a company and the city in which the company is located.
 

# Table: Orders

# +-------------+------+
# | Column Name | Type |
# +-------------+------+
# | order_id    | int  |
# | order_date  | date |
# | com_id      | int  |
# | sales_id    | int  |
# | amount      | int  |
# +-------------+------+
# order_id is the primary key (column with unique values) for this table.
# com_id is a foreign key (reference column) to com_id from the Company table.
# sales_id is a foreign key (reference column) to sales_id from the SalesPerson table.
# Each row of this table contains information about one order. This includes the ID of the company, the ID of the salesperson, the date of the order, and the amount paid.

# https://leetcode.com/problems/sales-person/description/?envType=study-plan-v2&envId=30-days-of-pandas&lang=pythondata

import pandas as pd

def sales_person(sales_person: pd.DataFrame, company: pd.DataFrame, orders: pd.DataFrame) -> pd.DataFrame:
    df = pd.merge(orders, company, on='com_id')

    red_orders = df[df['name'] == 'RED']

    invalid_ids = red_orders.sales_id.unique()

    valid_sales_person = sales_person[~sales_person['sales_id'].isin(invalid_ids)]    

    return valid_sales_person[['name']]