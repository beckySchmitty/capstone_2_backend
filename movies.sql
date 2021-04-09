\echo 'Delete and recreate movies db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE movies;
CREATE DATABASE movies;
\connect movies

\i movies-schema.sql
\i movies-seed.sql


-- TEST DB
\echo 'Delete and recreate movies_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE movies_test;
CREATE DATABASE movies_test;
\connect movies_test

\i movies-schema.sql
\i movies-seed.sql
