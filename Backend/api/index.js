require("dotenv").config();

const express = require("express");
const app = require("../app");
const connectDB = require("../config/db");

// Connect to database
connectDB();

// Export the app for Vercel
module.exports = app;
