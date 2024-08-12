// This module adapted from the CS340 starter code.
// Date Accessed: 1 August 2024
// URL: https://github.com/osu-cs340-ecampus/react-starter-app

const express = require("express");
const router = express.Router();
const {
  getFertilizingEvents,
  getFertilizingEventByID,
  createFertilizingEvent,
  updateFertilizingEvent,
  deleteFertilizingEvent,
} = require("../controllers/FertilizingEventsController");

router.get("/", getFertilizingEvents);
router.get("/:id", getFertilizingEventByID);
router.post("/", createFertilizingEvent);
router.put("/:id", updateFertilizingEvent);
router.delete("/:id", deleteFertilizingEvent);

module.exports = router;
