const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  serialNumber: {
    type: String,
    required: true,
    unique: true
  },

  department: {
    type: String,
    required: true
  },

  assignedToEmployee: {
    type: String
  },

  purchaseDate: Date,

  warrantyExpiry: Date,

  location: {
    type: String,
    required: true
  },

  maintenanceTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true
  },

  defaultTechnician: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  isScrapped: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

module.exports = mongoose.model("Equipment", equipmentSchema);
