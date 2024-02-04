# 2886. Change Data Type
# Easy
# Hint
# DataFrame students
# +-------------+--------+
# | Column Name | Type   |
# +-------------+--------+
# | student_id  | int    |
# | name        | object |
# | age         | int    |
# | grade       | float  |
# +-------------+--------+
# Write a solution to correct the errors:

# The grade column is stored as floats, convert it to integers.

# The result format is in the following example.

 

# Example 1:
# Input:
# DataFrame students:
# +------------+------+-----+-------+
# | student_id | name | age | grade |
# +------------+------+-----+-------+
# | 1          | Ava  | 6   | 73.0  |
# | 2          | Kate | 15  | 87.0  |
# +------------+------+-----+-------+
# Output:
# +------------+------+-----+-------+
# | student_id | name | age | grade |
# +------------+------+-----+-------+
# | 1          | Ava  | 6   | 73    |
# | 2          | Kate | 15  | 87    |
# +------------+------+-----+-------+
# Explanation: 
# The data types of the column grade is converted to int.

# https://leetcode.com/problems/change-data-type/description/?envType=study-plan-v2&envId=introduction-to-pandas&lang=pythondata

import pandas as pd

def changeDatatype(students: pd.DataFrame) -> pd.DataFrame:
    students = students.astype({'grade': int})
    return students