INSERT INTO users (id, username, password, email, img_url)
VALUES ('01',
    'testuser',
        'password',
        'fake@email.com',
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'),
       ('02',
       'testuser_2',
       'password',
        'fake@email.com',
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80');


INSERT INTO bechdel_movies (yr, id, imdb_id, title, rating)
VALUES (
    2021,
    0000,
    9999,
    'Fake Movie Title',
    3
);

INSERT INTO omdb_movies (imdb_id, title, poster, plot, director, bechdel_rating)
VALUES ('f000', 'fakeMovie', '#', 'Interesting plot', 'Mr. Director', '1'),
('f002', 'anotherMovie', '#', 'random plot', 'Ms. Director', '3');


INSERT INTO watchlist (user_id, imdb_id)
VALUES ('01', 'f000'), ('01', 'f002');


