const db = require("./db/index.js");
const express = require("express");
const app = express();
const port = 3000;
const contactUs = require("./model/contact.js");
const faq = require("./model/faq.js");
const cors = require("cors");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Middleware for contact form input validation
function validateFeedback(req, res, next) {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ error: "Semua kolom harus diisi." });
  }
  next();
}

// Endpoint to store feedback (POST request)
app.post("/proses_feedback", validateFeedback, async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    // Save feedback to database using Sequelize model
    await contactUs.create({ firstName, lastName, email, phone, message });
    res.status(201).json({ message: "Feedback berhasil disimpan." });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan pada server.",
      error: error.message,
    });
  }
});

// Get Faq

app.get("/return_faq", async (req, res) => {
  try {
    const data = await faq.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan pada server.",
      error: error.message,
    });
  }
});

// Middleware for faq form input validation
function validateFeedback(req, res, next) {
  const { ticketId, name, message } = req.body;
  if (!ticketId || !name || !message) {
    return res.status(400).json({ error: "Semua kolom harus diisi." });
  }
  next();
}

// Endpoint to store feedback (POST request)
app.post("/proses_faq", validateFeedback, async (req, res) => {
  try {
    const { ticketId, name, message } = req.body;
    // Save feedback to database using Sequelize model
    await faq.create({ ticketId, name, message });
    res.status(201).json({ message: "Feedback berhasil disimpan." });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan pada server.",
      error: error.message,
    });
  }
});

// Database Synchronization
async function startdb() {
  try {
    await db.sequelize.sync({ alter: true });
    console.log("database connected");
  } catch (error) {
    console.log("database not connected");
  }
}

startdb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
