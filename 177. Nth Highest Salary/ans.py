# 177. Nth Highest Salary
# Medium
# Topics
# Companies
# SQL Schema
# Pandas Schema
# Table: Employee

# +-------------+------+
# | Column Name | Type |
# +-------------+------+
# | id          | int  |
# | salary      | int  |
# +-------------+------+
# id is the primary key (column with unique values) for this table.
# Each row of this table contains information about the salary of an employee.
 

# Write a solution to find the nth highest salary from the Employee table. If there is no nth highest salary, return null.

# The result format is in the following example.

 

# Example 1:

# Input: 
# Employee table:
# +----+--------+
# | id | salary |
# +----+--------+
# | 1  | 100    |
# | 2  | 200    |
# | 3  | 300    |
# +----+--------+
# n = 2
# Output: 
# +------------------------+
# | getNthHighestSalary(2) |
# +------------------------+
# | 200                    |
# +------------------------+
# Example 2:

# Input: 
# Employee table:
# +----+--------+
# | id | salary |
# +----+--------+
# | 1  | 100    |
# +----+--------+
# n = 2
# Output: 
# +------------------------+
# | getNthHighestSalary(2) |
# +------------------------+
# | null                   |
# +------------------------+

# https://leetcode.com/problems/nth-highest-salary/?envType=study-plan-v2&envId=30-days-of-pandas&lang=pythondata

import pandas as pd

def nth_highest_salary(employee: pd.DataFrame, N: int) -> pd.DataFrame:
    
    dist = employee.drop_duplicates(subset='salary')
    dist['rnk'] = dist['salary'].rank(method='dense', ascending=False)
    ans = dist[dist.rnk == N][['salary']]
    if not len(ans):
        return pd.DataFrame({f'getNthHighestSalary({N})': [None]})
    ans = ans.rename(columns={'salary':f'getNthHighestSalary({N})'})
    return ans