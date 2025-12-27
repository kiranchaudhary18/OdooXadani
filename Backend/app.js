const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/maintenance", require("./routes/maintenance.routes"));
app.use("/api/equipment", require("./routes/equipment.routes"));
app.use("/api/reports", require("./routes/report.routes"));
app.use("/api/teams", require("./routes/team.routes"));


module.exports = app;
