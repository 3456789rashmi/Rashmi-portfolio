const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

// Configure email service
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Submit contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Save to database
    const contact = new Contact({
      name,
      email,
      message,
    });

    await contact.save();

    // Send email notification to admin
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      const adminMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL,
        subject: `New Contact Message from ${name}`,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <p><small>Message ID: ${contact._id}</small></p>
        `,
      };

      await transporter.sendMail(adminMailOptions);

      // Send confirmation email to user
      const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thank you for contacting me!",
        html: `
          <h2>Hi ${name},</h2>
          <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
          <p><strong>Your Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <p>Best regards,<br>Rashmi Sharma</p>
        `,
      };

      await transporter.sendMail(userMailOptions);
    }

    res.json({ success: true, message: "Message received. We'll get back to you soon!", contactId: contact._id });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({ error: "Failed to process message. Please try again." });
  }
});

// Get all contacts (for admin dashboard later)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

// Mark contact as read
router.patch("/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: "Failed to update contact" });
  }
});

module.exports = router;
