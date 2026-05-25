const express = require("express");
const app = express();
const cors = require("cors");

// CORS (apply before routes)


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("GearGuard API is running 🚀");
});

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/maintenance", require("./routes/maintenance.routes"));
app.use("/api/equipment", require("./routes/equipment.routes"));
app.use("/api/reports", require("./routes/report.routes"));
app.use("/api/teams", require("./routes/team.routes"));

app.use((err, req, res, next) => {
  console.error("Error:", {
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method
  });
  
  res.status(err.status || 500).json({ 
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack })
  });
});

module.exports = app;
