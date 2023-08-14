console.log("AT THE TOP ON SERVER.JS");
const express = require("express");
const mysql = require("mysql2");

// Enable access to .env variables
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("finished setting up middleware"); // good
console.log(PORT); // 3001

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the ${process.env.DB_NAME} database`)
);

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});

console.log("before module exports"); // good
module.exports = {
  app: app,
  db: db,
};
console.log("after module exports"); // good

// Import and initialize index
const index = require("./index.js");
index.init(); // good
