-- 1148. Article Views I
-- Easy
-- Topics
-- Companies
-- SQL Schema
-- Pandas Schema
-- Table: Views
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | article_id    | int     |
-- | author_id     | int     |
-- | viewer_id     | int     |
-- | view_date     | date    |
-- +---------------+---------+
-- There is no primary key (column with unique values) for this table, the table may have duplicate rows.
-- Each row of this table indicates that some viewer viewed an article (written by some author) on some date. 
-- Note that equal author_id and viewer_id indicate the same person.
-- Write a solution to find all the authors that viewed at least one of their own articles.
-- Return the result table sorted by id in ascending order.
-- The result format is in the following example.
-- Example 1:
-- Input: 
-- Views table:
-- +------------+-----------+-----------+------------+
-- | article_id | author_id | viewer_id | view_date  |
-- +------------+-----------+-----------+------------+
-- | 1          | 3         | 5         | 2019-08-01 |
-- | 1          | 3         | 6         | 2019-08-02 |
-- | 2          | 7         | 7         | 2019-08-01 |
-- | 2          | 7         | 6         | 2019-08-02 |
-- | 4          | 7         | 1         | 2019-07-22 |
-- | 3          | 4         | 4         | 2019-07-21 |
-- | 3          | 4         | 4         | 2019-07-21 |
-- +------------+-----------+-----------+------------+
-- Output: 
-- +------+
-- | id   |
-- +------+
-- | 4    |
-- | 7    |
-- +------+
-- https://leetcode.com/problems/article-views-i/?envType=study-plan-v2&envId=top-sql-50
# Write your MySQL query statement below
SELECT DISTINCT author_id AS id
FROM Views
WHERE author_id = viewer_id
ORDER BY author_id;
-- Basic Usage of DISTINCT
-- Syntax: SELECT DISTINCT column1, column2, ... FROM table_name;
-- This statement selects only unique combinations of column1, column2, etc., from table_name.
-- How DISTINCT Works
-- Combining Columns: If you select multiple columns, DISTINCT applies to the combination of these columns. It means a row is considered a duplicate only if each column in the row matches the corresponding column of another row.
-- With WHERE Clause: DISTINCT can be used along with WHERE clauses to filter rows before determining uniqueness.
-- Order of Rows: DISTINCT does not guarantee the order of rows. To ensure a specific order, you should use ORDER BY.