const express = require("express");
const app = express();

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
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

module.exports = app;
