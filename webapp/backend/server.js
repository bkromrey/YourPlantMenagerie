// This module adapted from the CS340 starter code.
// Date Accessed: 1 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8511;

// Middleware:

// If on FLIP, use cors() middleware to allow cross-origin requests from the frontend with your port number:
// EX (local): http://localhost:5173 
// EX (FLIP/classwork) http://flip3.engr.oregonstate.edu:5173
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json());

// API Routes for backend CRUD:
app.use("/api/people", require("./routes/peopleRoutes"));


// Add your Connect DB Activitiy Code Below:
// ...


// Match to your database config route
const db = require('./database/config.js');

// define a new GET request with express:
app.get('/api/diagnostic', async (req, res) => {
  try {
    // Await your database queries here
    await db.pool.query('DROP TABLE IF EXISTS diagnostic;');
    await db.pool.query('CREATE TABLE diagnostic(id INT PRIMARY KEY AUTO_INCREMENT, text VARCHAR(255) NOT NULL);');
    await db.pool.query('INSERT INTO diagnostic (text) VALUES ("MySQL is working!")');
    const results = await db.pool.query('SELECT * FROM diagnostic;');

    // res.json() automatically stringifies the JavaScript object to JSON
    res.json(results);

  } catch (error) {
    // Handle Errors
    console.error('Database operation failed:', error);
    res.status(500).send('Server error');
  }
});



// ...
// End Connect DB Activity Code.


app.listen(8511, () => {
  // Change this text to whatever FLIP server you're on
  console.log(`Server running:  http://flip3.engr.oregonstate.edu:${8511}...`);
});