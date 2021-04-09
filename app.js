"use strict";

// Express app for capstone_2 backend

const express = require("express");

const app = express();

// require jwt

// REQUIRE routes
// app.use("/thing", thingRoute)

// create NotFoundError


// Handle 404 errors
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

// Generic error handling
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;