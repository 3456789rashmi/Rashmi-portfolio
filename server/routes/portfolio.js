const express = require("express");
const router = express.Router();

// Get all portfolio items
router.get("/", (req, res) => {
  // TODO: Fetch from database
  res.json({
    projects: [],
    skills: [],
    experience: [],
  });
});

// Get portfolio item by ID
router.get("/:id", (req, res) => {
  // TODO: Fetch from database
  res.json({ id: req.params.id });
});

module.exports = router;
