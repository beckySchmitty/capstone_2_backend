CREATE TABLE bechdel_movies (
  yr TEXT NOT NULL,
  id TEXT NOT NULL,
  imdb_id TEXT NOT NULL,
  title TEXT NOT NULL,
  rating TEXT NOT NULL
);

CREATE TABLE users (
  id TEXT PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
  img_url TEXT
);

CREATE TABLE omdb_movies (
  imdb_id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  poster TEXT NOT NULL,
  plot TEXT NOT NULL,
  director TEXT NOT NULL,
  bechdel_rating TEXT NOT NULL
);

CREATE TABLE watchlist (
    id SERIAL PRIMARY KEY,
    user_id TEXT REFERENCES users (id) ON DELETE CASCADE,
    imdb_id TEXT REFERENCES omdb_movies ON DELETE CASCADE
)

