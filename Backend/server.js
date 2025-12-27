require("dotenv").config();
require("./config/env");   // ✅ ADD THIS

const express = require("express");
const app = require("./app");
const connectDB = require("./config/db");
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
