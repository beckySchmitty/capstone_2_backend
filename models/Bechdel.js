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
    static async getMoviesByTitle(term) {
        // update to protect against SQL injection
        const resp = await db.query(`SELECT * FROM bechdel_movies WHERE title ILIKE '%${term}%' `)
        if (resp.rows.length === 0) {
            return [{ERROR: `Movie "${term}" not found`}]
        }
        return resp.rows;
    }

    // testing get method
    static async getMoviesByYear(year) {
        const resp = await db.query(`SELECT * FROM bechdel_movies WHERE yr = $1`, [year])
        return resp.rows;
    }
}

module.exports = Bechdel;
