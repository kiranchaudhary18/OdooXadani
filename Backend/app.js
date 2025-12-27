const express = require("express");
const app = express();
const cors = require("cors");

// CORS (apply before routes)
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  process.env.CLIENT_ORIGIN,
].filter(Boolean);

const corsOptions = {
  origin: function (origin, callback) {
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

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

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
