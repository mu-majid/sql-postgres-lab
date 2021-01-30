SELECT name, population FROM cities WHERE area > 4000;
SELECT name, population FROM cities WHERE area BETWEEN 3000 AND 4000;
SELECT name, population FROM cities WHERE area BETWEEN 3000 AND 4000 AND name in ('Tokyo');
