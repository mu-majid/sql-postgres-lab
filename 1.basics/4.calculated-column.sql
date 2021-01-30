-- Math Operations: +, /, *, -, %, and more are supported
-- String Operations: || to join strings, CONCAT, LOWER, LENGTH, UPPER
SELECT name, population / area AS population_density FROM cities;
SELECT name || ', ' || country as location from cities;