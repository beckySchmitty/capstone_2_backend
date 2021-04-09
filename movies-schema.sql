CREATE TABLE bechdel_movies (
  yr TEXT NOT NULL,
  id TEXT NOT NULL,
  imdb_id TEXT NOT NULL,
  title TEXT NOT NULL,
  rating TEXT NOT NULL
);

CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
  img_url TEXT
);