"use strict";

const OMDB = require("./OMDB.js");

const dataObj = {
    imdbID: "926084",
    Title: "Harry Potter and the Deathly Hallows: Part 1",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg",
    Plot: "As Harry, Ron, and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.",
    Director: "David Yates",
    bechdel_rating: "3"
}

const invalidObj = {};

describe("OMDB.addToDatabase works", function () {

  test("works for valid movie", async function (done) {
    let resp = await OMDB.addToDatabase(dataObj);

    expect(resp.title).toBe("Harry Potter and the Deathly Hallows: Part 1");
    done();
  });

  test("doesn't work for bad imdb_id", async function (done) {
    expect(await OMDB.addToDatabase(invalidObj)).toThrow('null value in column "imdb_id" of relation "omdb_movies" violates not-null constraint')
    done();
  });

  test("doesn't work for dup", async function (done) {
    let resp = await OMDB.addToDatabase(dataObj);
    expect(resp.msg).toBe("already saved");    
    done();
  });

});


