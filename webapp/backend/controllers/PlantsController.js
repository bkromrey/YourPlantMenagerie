// This module adapted from the CS340 starter code.
// Date Accessed: 1 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app

// Load db config
const db = require("../database/config");
// Load .env variables
require("dotenv").config();
// Util to deep-compare two objects
const lodash = require("lodash");

// Returns all rows of people in Plants
const getPlants = async (req, res) => {
  try {
    // Select all rows from the "Plants" table
    const query = "SELECT * FROM Plants";
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching plants from the database:", error);
    res.status(500).json({ error: "Error fetching Plants" });
  }
};

// Returns a single plant by their unique ID from Plants
const getPlantByID = async (req, res) => {
  try {
    const plantID = req.params.id;
    const query = "SELECT * FROM Plants WHERE plantID = ?";
    const [result] = await db.query(query, [plantID]);
    // Check if plant was found
    if (result.length === 0) {
      return res.status(404).json({ error: "Plant not found" });
    }
    const plant = result[0];
    res.json(plant);
  } catch (error) {
    console.error("Error fetching plant from the database:", error);
    res.status(500).json({ error: "Error fetching plant" });
  }
};

// Returns status of creation of new plant in Plants
const createPlant = async (req, res) => {
  try {
    const { fname, lname, homeworld, age } = req.body;
    const query =
    // TODO UPDATE LINES 51-57
      "INSERT INTO Plants (fname, lname, homeworld, age) VALUES (?, ?, ?, ?)";

    const response = await db.query(query, [
      fname,
      lname,
      homeworld === "" ? null : parseInt(homeworld),
      age,
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating plant:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating plant" });
  }
};


const updatePlant = async (req, res) => {
  // Get the plant ID
  const plantID = req.params.id;
  // Get the plant object
  const newPlant = req.body;

  try {
    const [data] = await db.query("SELECT * FROM Plants WHERE PlantID = ?", [
      plantID,
    ]);

    const oldPlant = data[0];

    // If any attributes are not equal, perform update
    if (!lodash.isEqual(newPlant, oldPlant)) {
      const query =
        "UPDATE Plants SET fname=?, lname=?, homeworld=?, age=? WHERE PlantID=?";

      // Homeoworld is NULL-able FK in Plants, has to be valid INT FK ID or NULL
      const hw = newPlant.homeworld === "" ? null : newPlant.homeworld;

      const values = [
        newPlant.fname,
        newPlant.lname,
        hw,
        newPlant.age,
        plantID,
      ];

      // Perform the update
      await db.query(query, values);
      // Inform client of success and return 
      return res.json({ message: "plant updated successfully." });
    }

    res.json({ message: "plant details are the same, no update" });
  } catch (error) {
    console.log("Error updating plant", error);
    res
      .status(500)
      .json({ error: `Error updating the plant with id ${plantID}` });
  }
};

// Endpoint to delete a customer from the database
const deletePlant = async (req, res) => {
  console.log("Deleting plant with id:", req.params.id);
  const plantID = req.params.id;

  try {
    // Ensure the plant exitst
    const [isExisting] = await db.query(
      "SELECT 1 FROM Plants WHERE PlantID = ?",
      [plantID]
    );

    // If the plant doesn't exist, return an error
    if (isExisting.length === 0) {
      return res.status(404).send("Plant not found");
    }

    // Delete related records from the intersection table (see FK contraints bsg_cert_people)
    const [response] = await db.query(
      "DELETE FROM bsg_cert_people WHERE pid = ?",
      [plantID]
    );

    console.log(
      "Deleted",
      response.affectedRows,
      "rows from bsg_cert_people intersection table"
    );

    // Delete the plant from Plants
    await db.query("DELETE FROM Plants WHERE PlantID = ?", [plantID]);

    // Return the appropriate status code
    res.status(204).json({ message: "plant deleted successfully" })
  } catch (error) {
    console.error("Error deleting plant from the database:", error);
    res.status(500).json({ error: error.message });
  }
};

// Export the functions as methods of an object
module.exports = {
  getPlants,
  getPlantByID,
  createPlant,
  updatePlant,
  deletePlant,
};
