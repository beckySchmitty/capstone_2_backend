"use strict";

// Express app for capstone_2 backend

const express = require("express");
const cors = require('cors')

const { NotFoundError } = require("./expressError");

const bechdelRoutes = require("./routes/bechdel_movies");
const userRoutes = require("./routes/user")
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/bechdel", bechdelRoutes)
app.use("/user", userRoutes)




// require jwt

// REQUIRE routes
// app.use("/thing", thingRoute)


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