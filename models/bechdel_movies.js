// Draft SQL searches

// Filter movies by search word from form input (ex below with star)
// SELECT * FROM bechdel_movies WHERE title LIKE '%Star%' or title LIKE '%star%';

// Sort movies by year
// SELECT * FROM bechdel_movies WHERE yr = '1980';


"use strict";

const db = require("../db");

class bechdel {}