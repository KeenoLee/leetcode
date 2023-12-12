-- 1683. Invalid Tweets
-- Easy
-- Topics
-- Companies
-- SQL Schema
-- Pandas Schema
-- Table: Tweets
-- +----------------+---------+
-- | Column Name    | Type    |
-- +----------------+---------+
-- | tweet_id       | int     |
-- | content        | varchar |
-- +----------------+---------+
-- tweet_id is the primary key (column with unique values) for this table.
-- This table contains all the tweets in a social media app.
-- Write a solution to find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is strictly greater than 15.
-- Return the result table in any order.
-- The result format is in the following example.
-- Example 1:
-- Input: 
-- Tweets table:
-- +----------+----------------------------------+
-- | tweet_id | content                          |
-- +----------+----------------------------------+
-- | 1        | Vote for Biden                   |
-- | 2        | Let us make America great again! |
-- +----------+----------------------------------+
-- Output: 
-- +----------+
-- | tweet_id |
-- +----------+
-- | 2        |
-- +----------+
-- Explanation: 
-- Tweet 1 has length = 14. It is a valid tweet.
-- Tweet 2 has length = 32. It is an invalid tweet.
-- https://leetcode.com/problems/invalid-tweets/?envType=study-plan-v2&envId=top-sql-50
# Write your MySQL query statement below
SELECT tweet_id
FROM Tweets
WHERE LENGTH(content) > 15 -- OR
SELECT tweet_id
FROM Tweets
WHERE CHAR_LENGTH(content) > 15;
-- What is the different between LENGTH and CHAR_LENGTH ?
-- LENGTH and CHAR_LENGTH (or CHARACTER_LENGTH) are both functions in SQL used to get the length of a string, but they measure the length in different ways:
-- LENGTH Function:
-- LENGTH returns the length of a string in bytes.
-- This means that its output depends on the character encoding of the string. For example, in a single-byte character set like ASCII, the length in bytes is the same as the number of characters. However, in multi-byte character sets like UTF-8, some characters may use more than one byte, so the length in bytes could be greater than the number of characters.
-- Syntax: LENGTH(string)
-- CHAR_LENGTH or CHARACTER_LENGTH Function:
-- CHAR_LENGTH returns the length of a string in terms of the number of characters.
-- This function counts each character as one, regardless of the character encoding. This makes it more suitable for measuring string lengths in a character-based manner, especially for strings containing multi-byte characters (like many non-English characters).
-- Syntax: CHAR_LENGTH(string) or CHARACTER_LENGTH(string)
-- Example
-- Consider the string '日本語' (Japanese for 'Japanese') in a UTF-8 encoding:
-- Using LENGTH, the result might be 9, as each of the three characters could occupy 3 bytes in UTF-8.
-- Using CHAR_LENGTH, the result would be 3, since there are three characters, regardless of their byte size.
-- Choosing Between Them
-- Use LENGTH when you need to know the byte size of the string, which can be important for storage and data transfer considerations.
-- Use CHAR_LENGTH when you're interested in the number of characters from a linguistic or textual perspective, especially in a multi-lingual context.