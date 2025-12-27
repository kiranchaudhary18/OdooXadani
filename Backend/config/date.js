/**
 * Check if a task is overdue
 */
const isOverdue = (scheduledDate, status) => {
  if (!scheduledDate) return false;
  if (status === "Repaired") return false;

  return new Date(scheduledDate) < new Date();
};

module.exports = { isOverdue };
