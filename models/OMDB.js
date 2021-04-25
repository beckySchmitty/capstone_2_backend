"use strict";

const db = require("../db");

class OMDB {
    // insert class overview

    static async addToDatabase({imdbID, Title, Poster, Plot, Director, bechdel_rating}) {
        const checkIfAlreadySaved = await db.query(`SELECT * FROM omdb_movies 
        WHERE imdb_id = $1`, [imdbID])

        if (checkIfAlreadySaved.rowCount == 1) {
            return {msg: "already saved"}
        } 

        const resp = await db.query(`INSERT INTO omdb_movies 
        (imdb_id, title, poster, plot, director, bechdel_rating)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING imdb_id, title, poster, plot, director, bechdel_rating`,
        [imdbID, Title, Poster, Plot, Director, bechdel_rating]);

        return resp.rows;
    }

    static async addToWatchlist({imdb_id, user_id}) {
        let formattedImdb_id = "tt0" + imdb_id
        const checkIfAlreadySaved = await db.query(`SELECT * FROM watchlist 
        WHERE imdb_id = $1`, [formattedImdb_id])

        if (checkIfAlreadySaved.rowCount == 1) {
            return {ERROR: "already saved"}
        } 

        const resp = await db.query(`INSERT INTO watchlist 
        (user_id, imdb_id)
        VALUES ($1, $2)
        RETURNING user_id, imdb_id`,
        [user_id, formattedImdb_id]);

        return resp.rows;
    }

}

module.exports = OMDB;
