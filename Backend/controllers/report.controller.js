const MaintenanceRequest = require("../models/MaintenanceRequest");

/**
 * DASHBOARD STATS
 */
exports.getDashboardStats = async (req, res) => {
  try {
    const totalRequests = await MaintenanceRequest.countDocuments();
    const openRequests = await MaintenanceRequest.countDocuments({
      status: { $in: ["New", "In Progress"] }
    });
    const repairedRequests = await MaintenanceRequest.countDocuments({
      status: "Repaired"
    });

    const overdueRequests = await MaintenanceRequest.countDocuments({
      scheduledDate: { $lt: new Date() },
      status: { $ne: "Repaired" }
    });

    res.status(200).json({
      totalRequests,
      openRequests,
      repairedRequests,
      overdueRequests
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to load dashboard stats" });
  }
};

/**
 * REPORT: REQUESTS PER TEAM
 */
exports.requestsByTeam = async (req, res) => {
  try {
    const data = await MaintenanceRequest.aggregate([
      {
        $group: {
          _id: "$maintenanceTeam",
          count: { $sum: 1 }
        }
      }
    ]);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to generate report" });
  }
};

/**
 * REPORT: REQUESTS PER EQUIPMENT
 */
exports.requestsByEquipment = async (req, res) => {
  try {
    const data = await MaintenanceRequest.aggregate([
      {
        $group: {
          _id: "$equipment",
          count: { $sum: 1 }
        }
      }
    ]);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to generate report" });
  }
};
