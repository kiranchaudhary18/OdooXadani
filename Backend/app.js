const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/maintenance", require("./routes/maintenance.routes"));
app.use("/api/equipment", require("./routes/equipment.routes"));

module.exports = app;
