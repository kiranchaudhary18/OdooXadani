// Constants
export const MAINTENANCE_STATUSES = {
  NEW: 'New',
  IN_PROGRESS: 'In Progress',
  REPAIRED: 'Repaired',
  SCRAP: 'Scrap',
};

export const MAINTENANCE_TYPES = {
  CORRECTIVE: 'corrective',
  PREVENTIVE: 'preventive',
};

export const STATUS_COLORS = {
  [MAINTENANCE_STATUSES.NEW]: 'bg-blue-100 text-blue-800',
  [MAINTENANCE_STATUSES.IN_PROGRESS]: 'bg-amber-100 text-amber-800',
  [MAINTENANCE_STATUSES.REPAIRED]: 'bg-green-100 text-green-800',
  [MAINTENANCE_STATUSES.SCRAP]: 'bg-red-100 text-red-800',
};

export const STATUS_BADGE_COLORS = {
  [MAINTENANCE_STATUSES.NEW]: { bg: 'bg-primary-100', text: 'text-primary-800', border: 'border-primary-200' },
  [MAINTENANCE_STATUSES.IN_PROGRESS]: { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-200' },
  [MAINTENANCE_STATUSES.REPAIRED]: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' },
  [MAINTENANCE_STATUSES.SCRAP]: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200' },
};

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: 'LayoutDashboard' },
  { id: 'equipment', label: 'Equipment', path: '/equipment', icon: 'Wrench' },
  { id: 'maintenance', label: 'Maintenance', path: '/maintenance/requests', icon: 'Hammer' },
  { id: 'kanban', label: 'Kanban', path: '/maintenance/kanban', icon: 'LayoutGrid' },
  { id: 'calendar', label: 'Calendar', path: '/maintenance/calendar', icon: 'Calendar' },
  { id: 'teams', label: 'Teams', path: '/teams', icon: 'Users' },
  { id: 'workcenter', label: 'Work Center', path: '/workcenter', icon: 'Box' },
];
