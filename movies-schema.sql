CREATE TABLE bechdel_movies (
    year INTEGER NOT NULL,
  id INTEGER NOT NULL,
  imdb_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  rating INTEGER NOT NULL
);

CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
  img_url TEXT
);