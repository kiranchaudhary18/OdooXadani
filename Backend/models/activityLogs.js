const activityLogSchema = new mongoose.Schema({
  entityType: {
    type: String,
    enum: ["Equipment", "MaintenanceRequest"]
  },

  entityId: {
    type: mongoose.Schema.Types.ObjectId
  },

  action: {
    type: String
  },

  performedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  note: String

}, { timestamps: true });

module.exports = mongoose.model("ActivityLog", activityLogSchema);
