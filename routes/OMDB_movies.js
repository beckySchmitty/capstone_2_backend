// Routes for the OMDB movies table

"use strict";

const express = require("express");
const OMDB = require("../models/OMDB");



const router = new express.Router();

// Save OMDB data to omdb_movies table
router.post("/add", async function (req, res, next) {
  try {
      const data = await OMDB.addToDatabase(req.body);
      if (data.msg === "already saved") {
          return res.json({msg: "do not dispatch"})
      }
      return res.json({ msg: "success", data });
  }

  catch (err) {
      return next(err);
  }
});

// save data to watchlist table
router.post("/add/watchlist", async function (req, res, next) {
    try {
        const data = await OMDB.addToWatchlist(req.body);

        return res.json({data});
    }
  
    catch (err) {
        return next(err);
    }
  });

// remove data from watchlist table
router.post("/remove/watchlist", async function (req, res, next) {
    try {
        const data = await OMDB.removeFromWatchlist(req.body);

        return res.json({data});
    }
  
    catch (err) {
        return next(err);
    }
  });



module.exports = router;
