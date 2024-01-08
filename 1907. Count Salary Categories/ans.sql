-- 1907. Count Salary Categories
-- Medium
-- Topics
-- SQL Schema
-- Pandas Schema
-- Table: Accounts
-- +-------------+------+
-- | Column Name | Type |
-- +-------------+------+
-- | account_id  | int  |
-- | income      | int  |
-- +-------------+------+
-- account_id is the primary key (column with unique values) for this table.
-- Each row contains information about the monthly income for one bank account.
-- Write a solution to calculate the number of bank accounts for each salary category. The salary categories are:
-- "Low Salary": All the salaries strictly less than $20000.
-- "Average Salary": All the salaries in the inclusive range [$20000, $50000].
-- "High Salary": All the salaries strictly greater than $50000.
-- The result table must contain all three categories. If there are no accounts in a category, return 0.
-- Return the result table in any order.
-- The result format is in the following example.
-- Example 1:
-- Input: 
-- Accounts table:
-- +------------+--------+
-- | account_id | income |
-- +------------+--------+
-- | 3          | 108939 |
-- | 2          | 12747  |
-- | 8          | 87709  |
-- | 6          | 91796  |
-- +------------+--------+
-- Output: 
-- +----------------+----------------+
-- | category       | accounts_count |
-- +----------------+----------------+
-- | Low Salary     | 1              |
-- | Average Salary | 0              |
-- | High Salary    | 3              |
-- +----------------+----------------+
-- Explanation: 
-- Low Salary: Account 2.
-- Average Salary: No accounts.
-- High Salary: Accounts 3, 6, and 8.
-- https://leetcode.com/problems/count-salary-categories/description/?envType=study-plan-v2&envId=top-sql-50
# Write your MySQL query statement below
SELECT Categories.category,
  COALESCE(COUNT(A.account_id), 0) AS accounts_count
FROM (
    SELECT 'Low Salary' AS category
    UNION ALL
    SELECT 'Average Salary'
    UNION ALL
    SELECT 'High Salary'
  ) AS Categories
  LEFT JOIN (
    SELECT account_id,
      CASE
        WHEN income < 20000 THEN 'Low Salary'
        WHEN income BETWEEN 20000 AND 50000 THEN 'Average Salary'
        WHEN income > 50000 THEN 'High Salary'
      END AS category
    FROM Accounts
  ) A ON Categories.category = A.category
GROUP BY Categories.category;
#
select a.category,
ifnull(b.num, 0) as accounts_count
from (
    select 'Low Salary' as category,
      1 as val
    union all
    select 'Average Salary' as category,
      2 as val
    union all
    select 'High Salary' as category,
      3 as val
  ) a
  left join (
    select if(income < 20000, 1, if(income > 50000, 3, 2)) as category,
      count(1) as num
    from Accounts
    group by 1
  ) b on a.val = b.category
group by a.category