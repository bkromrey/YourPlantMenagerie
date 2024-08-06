// This module adapted from the CS340 starter code.
// Date Accessed: 1 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8500; // will use PORT declared in .env but if nothing declared, defaults to 8500

// Middleware:

// If on FLIP, use cors() middleware to allow cross-origin requests from the frontend with your port number:
// EX (local): http://localhost:5173 
// EX (FLIP/classwork) http://flip3.engr.oregonstate.edu:5173

app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json());

// API Routes for backend CRUD:
app.use("/api/soilTypes", require("./routes/SoilTypesRoutes.js"));
app.use("/api/WateringEvents", require("./routes/WateringEventsRoutes.js"));



// Match to your database config route
const db = require('./database/config.js');



// DIAGNOSTIC CODE --- SEEMS TO HAVE A CORS ISSUE, TODO take this out?

// define a new GET request with express:
// app.get('/api/diagnostic', async (req, res) => {
//   try {
//     // Await your database queries here
//     console.log('making an attempt');
//     await db.pool.query('DROP TABLE IF EXISTS diagnostic;');
//     await db.pool.query('CREATE TABLE diagnostic(id INT PRIMARY KEY AUTO_INCREMENT, text VARCHAR(255) NOT NULL);');
//     await db.pool.query('INSERT INTO diagnostic (text) VALUES ("MySQL is working!")');
//     const results = await db.pool.query('SELECT * FROM diagnostic;');

//     // res.json() automatically stringifies the JavaScript object to JSON
//     res.json(results);

//   } catch (error) {
//     // Handle Errors
//     console.error('Database operation failed:', error);
//     res.status(500).send('Server error');
//   }
// });


// Citation for how to dynamically change the hostname in the log output
// DATE ACCESSED: 3 August 2024
// URL: https://stackoverflow.com/questions/20553554/node-js-return-hostname
const os = require("os");
const hostname = os.hostname();

// changed this back to PORT, this shouldn't be hardcoded because it'll automatically use whatever we set in the .env
app.listen(PORT, () => {
  console.log(`Server running on http://${hostname}:${PORT}...`);
});