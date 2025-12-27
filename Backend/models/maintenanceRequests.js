const mongoose = require("mongoose");

const maintenanceRequestSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },

  type: {
    type: String,
    enum: ["Corrective", "Preventive"],
    required: true
  },

  equipment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Equipment",
    required: true
  },

  maintenanceTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true
  },

  assignedTechnician: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  status: {
    type: String,
    enum: ["New", "In Progress", "Repaired", "Scrap"],
    default: "New"
  },

  scheduledDate: {
    type: Date
  },

  durationHours: {
    type: Number
  },

  priority: {
    type: String,
    enum: ["Low", "Medium", "High", "Critical"],
    default: "Medium"
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true });

module.exports = mongoose.model("MaintenanceRequest", maintenanceRequestSchema);
