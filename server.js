console.log("TOP OF SERVER.JS");

const express = require("express");
const mysql = require("mysql2");
const { init } = require("./index");

// Enable access to .env variables
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
console.log(`SERVER.JS - PORT NUMBER IS ${PORT}`);

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log("SERVER.JS - AFTER MIDDLEWARE CREATION");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the company_db database`)
);

// // Import and initialize index
// init();

module.exports = {
  app: app,
  db: db,
};

// STUDY NOTE: app.listen always goes at the end of server.js
app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
