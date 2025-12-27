require("dotenv").config();
require("./config/env");   // ✅ ADD THIS

const express = require("express");
const app = require("./app");
const connectDB = require("./config/db");
const cors = require("cors");

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  process.env.CLIENT_ORIGIN, // optional: production frontend
].filter(Boolean);

const corsOptions = {
  origin: function (origin, callback) {
    // allow non-browser requests (no origin) and allowed origins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204,
};

// Middleware
app.use(cors(corsOptions));
// Handle preflight requests for all routes
app.options("*", cors(corsOptions));
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
