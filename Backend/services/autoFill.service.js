const Equipment = require("../models/Equipment");

/**
 * Auto-fill maintenance data based on equipment
 */
const autoFillFromEquipment = async (equipmentId) => {
  const equipment = await Equipment.findById(equipmentId);

  if (!equipment) {
    throw new Error("Equipment not found");
  }

  return {
    maintenanceTeam: equipment.maintenanceTeam,
    assignedTechnician: equipment.defaultTechnician
  };
};

module.exports = { autoFillFromEquipment };
