// Routes for the bechdel_movies table

"use strict";

const express = require("express");
// const { BadRequestError } = require("../expressError");
const Bechdel = require("../models/Bechdel");

// ADD SCHEMA LATER

const router = new express.Router();

router.get("/testing", async function (req, res, next) {
    // add in validator 

    return res.json("testing connection 1 2 3");

  });

router.get("/all", async function (req, res, next) {
    // add in validator 
    try {
        const data = await Bechdel.getAll2020Movies();
        return res.json({ data });
    }
  
    catch (err) {
      return next(err);
    }
  });

module.exports = router;
