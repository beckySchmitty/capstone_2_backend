CREATE TABLE bechdel_movies (
  yr TEXT NOT NULL,
  id TEXT NOT NULL,
  imdb_id TEXT NOT NULL,
  title TEXT NOT NULL,
  rating TEXT NOT NULL
);

CREATE TABLE users (
  id TEXT NOT NULL,
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
  img_url TEXT
);

CREATE TABLE watchlist (
    id SERIAL PRIMARY KEY,
    userid INTEGER REFERENCES users (id),
    movie_id TEXT REFERENCES bechdel_movies (id),
    imdb_id TEXT REFERENCES bechdel_movies (imdb_id)
)

CREATE TABLE omdb_movies (
  imdb_id TEXT NOT NULL,
  poster TEXT NOT NULL,
  plot TEXT NOT NULL,
  director TEXT NOT NULL,
  awards TEXT NOT NULL
)