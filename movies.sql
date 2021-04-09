-- \echo 'Delete and recreate movies db?'
-- \prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE movies;
CREATE DATABASE movies;
\connect movies

\i movies-schema.sql
\i movies-seed.sql


-- TEST DB
-- \echo 'Delete and recreate movies_test db?'
-- \prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE movies_test;
CREATE DATABASE movies_test;
\connect movies_test

\i movies-schema.sql
\i movies-seed.sql

-- 


-- TYPE "psql" in command line
-- THEN "\c movies" in command line
-- THEN you'll be connected to the movies database (ex. shown in command line "movies=# "). NEXT, execute the line below:
-- \COPY bechdel_movies FROM 'C:\Users\becky\Downloads\raw_bechdel.csv' delimiter ',' csv;
-- If you see "COPY 7972" then it was a success