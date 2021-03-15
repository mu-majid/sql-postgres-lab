-- listing the most recent 3 users in our DB
SELECT *
FROM users
ORDER BY id DESC
LIMIT 3;

----------

-- Posts created by a particular user
SELECT p.caption, u.username
FROM users AS u
JOIN posts as p
  ON p.user_id = u.id
WHERE u.id = 200;

----------
-- show usernames and number of likes each user created
SELECT username, COUNT(*)
FROM users
JOIN likes ON likes.user_id = users.id
GROUP BY username;