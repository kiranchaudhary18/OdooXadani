const Equipment = require("../models/equipment");
const MaintenanceRequest = require("../models/maintenanceRequests");

/**
 * CREATE EQUIPMENT
 */
exports.createEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.create(req.body);
    res.status(201).json(equipment);
  } catch (error) {
    res.status(500).json({ message: "Failed to create equipment" });
  }
};

/**
 * GET ALL EQUIPMENT
 */
exports.getAllEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.find()
      .populate("maintenanceTeam", "name")
      .populate("defaultTechnician", "name");
    res.status(200).json(equipment);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch equipment" });
  }
};

/**
 * GET SINGLE EQUIPMENT
 */
exports.getEquipmentById = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id)
      .populate("maintenanceTeam", "name")
      .populate("defaultTechnician", "name email");

    if (!equipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    res.status(200).json(equipment);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch equipment" });
  }
};

/**
 * UPDATE EQUIPMENT
 */
exports.updateEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(equipment);
  } catch (error) {
    res.status(500).json({ message: "Failed to update equipment" });
  }
};

/**
 * SMART BUTTON → GET MAINTENANCE REQUESTS
 */
exports.getEquipmentMaintenance = async (req, res) => {
  try {
    const requests = await MaintenanceRequest.find({
      equipment: req.params.id
    }).populate("assignedTechnician", "name");

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch maintenance requests" });
  }
};

/**
 * SCRAP EQUIPMENT
 */
exports.scrapEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);

    if (!equipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    equipment.isScrapped = true;
    await equipment.save();

    await MaintenanceRequest.updateMany(
      { equipment: equipment._id, status: { $ne: "Repaired" } },
      { status: "Scrap" }
    );

    res.status(200).json({ message: "Equipment scrapped successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to scrap equipment" });
  }
};
