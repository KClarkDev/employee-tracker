console.log("TOP OF SERVER.JS");

const express = require("express");
const mysql = require("mysql2");
const { init } = require("./index");

// Enable access to .env variables
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: process.env.DB_USER,
    // TODO: Add MySQL password here
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the company_db database`)
);

// Import and initialize index
init();

module.exports = {
  app: app,
  db: db,
};
