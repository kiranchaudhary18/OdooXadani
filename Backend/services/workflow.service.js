const validTransitions = {
  New: ["In Progress"],
  "In Progress": ["Repaired", "Scrap"],
  Repaired: [],
  Scrap: []
};

const isValidTransition = (currentStatus, nextStatus) => {
  return validTransitions[currentStatus]?.includes(nextStatus);
};

module.exports = { isValidTransition };
