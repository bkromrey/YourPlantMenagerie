// This module adapted from the CS340 starter code.
// Date Accessed: 1 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app

const express = require("express");
const router = express.Router();
const {
  getPeople,
  getPersonByID,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/peopleController");

router.get("/", getPeople);
router.get("/:id", getPersonByID);
router.post("/", createPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

module.exports = router;
