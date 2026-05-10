const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const Contact = require("./models/Contact");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Wszystkie pola są wymagane"
      });
    }

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      message
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Formularz wysłany poprawnie"
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Błąd serwera"
    });
  }
});

app.get("/api/messages", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({
      message: "Błąd pobierania danych"
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});