const bodyParser = require("body-parser");
const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password
    password: "password",
    database: "movie_db",
  },
  console.log(`Connected to the movie_db database.`)
);

db.connect((err) => {
  if (err) throw Error;
  console.log("Connected to the database!");
});

app.get("/api/movies", (req, res) => {
  const query = "SELECT * FROM movies";
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
