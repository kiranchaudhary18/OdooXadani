const MaintenanceRequest = require("../models/maintenanceRequests");
const { autoFillFromEquipment } = require("../services/autoFill.service");
const { isValidTransition } = require("../services/workflow.service");

/**
 * CREATE MAINTENANCE REQUEST (AUTO-FILL)
 */
exports.createRequest = async (req, res) => {
  try {
    const { subject, type, equipmentId, scheduledDate } = req.body;

    if (!subject || !type || !equipmentId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const { maintenanceTeam, assignedTechnician } =
      await autoFillFromEquipment(equipmentId);

    const request = await MaintenanceRequest.create({
      subject,
      type,
      equipment: equipmentId,
      maintenanceTeam,
      assignedTechnician,
      scheduledDate: type === "Preventive" ? scheduledDate : null,
      createdBy: req.user._id
    });

    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * GET REQUESTS (KANBAN / DASHBOARD)
 */
exports.getRequests = async (req, res) => {
  try {
    const filter = {};

    if (req.query.status) filter.status = req.query.status;
    if (req.query.teamId) filter.maintenanceTeam = req.query.teamId;
    if (req.query.technicianId) filter.assignedTechnician = req.query.technicianId;
    if (req.query.type) filter.type = req.query.type;

    const requests = await MaintenanceRequest.find(filter)
      .populate("equipment", "name")
      .populate("assignedTechnician", "name avatar")
      .populate("maintenanceTeam", "name")
      .sort({ createdAt: -1 });

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch requests" });
  }
};

/**
 * CALENDAR VIEW (PREVENTIVE ONLY)
 */
exports.getCalendarRequests = async (req, res) => {
  try {
    const requests = await MaintenanceRequest.find({
      type: "Preventive",
      scheduledDate: { $ne: null }
    })
      .populate("equipment", "name")
      .populate("assignedTechnician", "name");

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: "Failed to load calendar" });
  }
};

/**
 * ASSIGN TECHNICIAN (TEAM VALIDATION)
 */
exports.assignTechnician = async (req, res) => {
  try {
    const { technicianId } = req.body;

    const request = await MaintenanceRequest.findById(req.params.id)
      .populate("maintenanceTeam");

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    if (!request.maintenanceTeam.members.includes(technicianId)) {
      return res.status(403).json({ message: "Technician not in assigned team" });
    }

    request.assignedTechnician = technicianId;
    await request.save();

    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: "Failed to assign technician" });
  }
};

/**
 * KANBAN DRAG & DROP (STATUS UPDATE)
 */
exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const request = await MaintenanceRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    if (!isValidTransition(request.status, status)) {
      return res.status(400).json({
        message: `Invalid transition from ${request.status} to ${status}`
      });
    }

    request.status = status;
    await request.save();

    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: "Failed to update status" });
  }
};

/**
 * COMPLETE REQUEST (REPAIRED)
 */
exports.completeRequest = async (req, res) => {
  try {
    const { durationHours } = req.body;

    if (!durationHours) {
      return res.status(400).json({ message: "Duration is required" });
    }

    const request = await MaintenanceRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    if (!isValidTransition(request.status, "Repaired")) {
      return res.status(400).json({
        message: "Request must be In Progress before completion"
      });
    }

    request.durationHours = durationHours;
    request.status = "Repaired";

    await request.save();

    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: "Failed to complete request" });
  }
};
