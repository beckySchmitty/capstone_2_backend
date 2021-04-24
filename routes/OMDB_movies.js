// Routes for the OMDB movies table

"use strict";

const express = require("express");
const OMDB = require("../models/OMDB");



const router = new express.Router();

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



module.exports = router;
