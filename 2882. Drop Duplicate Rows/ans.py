# 2882. Drop Duplicate Rows
# Easy
# Hint
# DataFrame customers
# +-------------+--------+
# | Column Name | Type   |
# +-------------+--------+
# | customer_id | int    |
# | name        | object |
# | email       | object |
# +-------------+--------+
# There are some duplicate rows in the DataFrame based on the email column.

# Write a solution to remove these duplicate rows and keep only the first occurrence.

# The result format is in the following example.

 

# Example 1:
# Input:
# +-------------+---------+---------------------+
# | customer_id | name    | email               |
# +-------------+---------+---------------------+
# | 1           | Ella    | emily@example.com   |
# | 2           | David   | michael@example.com |
# | 3           | Zachary | sarah@example.com   |
# | 4           | Alice   | john@example.com    |
# | 5           | Finn    | john@example.com    |
# | 6           | Violet  | alice@example.com   |
# +-------------+---------+---------------------+
# Output:  
# +-------------+---------+---------------------+
# | customer_id | name    | email               |
# +-------------+---------+---------------------+
# | 1           | Ella    | emily@example.com   |
# | 2           | David   | michael@example.com |
# | 3           | Zachary | sarah@example.com   |
# | 4           | Alice   | john@example.com    |
# | 6           | Violet  | alice@example.com   |
# +-------------+---------+---------------------+
# Explanation:
# Alic (customer_id = 4) and Finn (customer_id = 5) both use john@example.com, so only the first occurrence of this email is retained.

# https://leetcode.com/problems/drop-duplicate-rows/description/?envType=study-plan-v2&envId=introduction-to-pandas&lang=pythondata

import pandas as pd

def dropDuplicateEmails(customers: pd.DataFrame) -> pd.DataFrame:
    customers.drop_duplicates(subset='email', keep='first', inplace=True)
    return customers

# drop_duplicates Function Argument Definition:

# subset: This is the column label or sequence of labels to consider for identifying duplicate rows. If not provided, it considers all columns in the DataFrame.

# keep: This argument determines which duplicate row to retain.

# 'first': (default) Drop duplicates except for the first occurrence.
# 'last': Drop duplicates except for the last occurrence.
# False: Drop all duplicates.
# inplace: If set to True, the changes are made directly to the object without returning a new object. If set to False (default), a new object with duplicates dropped will be returned.