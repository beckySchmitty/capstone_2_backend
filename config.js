"use strict";

// config app - can be shared
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

// const PORT = +process.env.PORT || 3001;
const PORT = 3001;


// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "movies_test"
      : process.env.DATABASE_URL || "movies";
}

// small workfactor if testing or else normal
// const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;
const BCRYPT_WORK_FACTOR = 4;

console.log("PORT:".yellow, PORT.toString());
console.log("Database:".yellow, getDatabaseUri());
console.log("---");

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};