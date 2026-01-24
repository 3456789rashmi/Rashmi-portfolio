const express = require("express");
const router = express.Router();

// Submit contact form
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  // TODO: Validate and save to database
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // TODO: Send email notification
  res.json({ success: true, message: "Message received" });
});

module.exports = router;
