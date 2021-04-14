// Draft SQL searches

// Filter movies by search word from form input (ex below with star)
// SELECT * FROM bechdel_movies WHERE title LIKE '%Star%' or title LIKE '%star%';

// Sort movies by year
// SELECT * FROM bechdel_movies WHERE yr = '1980';


"use strict";

const db = require("../db");

class Bechdel {
    // insert class overview

        // testing get method
    static async getMovieByTitle(term) {
        const resp = await db.query(`SELECT * FROM bechdel_movies WHERE title = $1`, [term])
        return resp.rows;
    }

    // testing get method
    static async getAll2020Movies() {
        const resp = await db.query(`SELECT * FROM bechdel_movies WHERE yr = $1`, ['2020'])
        return resp.rows;
    }
}

module.exports = Bechdel;