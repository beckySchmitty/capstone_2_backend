// Routes for the bechdel_movies table

"use strict";

const express = require("express");
// const { BadRequestError } = require("../expressError");
const Bechdel = require("../models/Bechdel");

// ADD SCHEMA LATER

const router = new express.Router();

router.get("/title/:term", async function (req, res, next) {
  try {
      const data = await Bechdel.getMoviesByTitle(req.params.term);
      return res.json({ data });
  }

  catch (err) {
    return next(err);
  }
});

router.get("/year/:year", async function (req, res, next) {
  try {
      const data = await Bechdel.getMoviesByYear(req.params.year);
      return res.json({ data });
  }

  catch (err) {
    return next(err);
  }
});


router.get("/testing", async function (req, res, next) {
    // add in validator 

    return res.json("testing connection 1 2 3");

  });


module.exports = router;
