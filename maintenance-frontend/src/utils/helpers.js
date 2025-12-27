import { MAINTENANCE_STATUSES } from './constants';

export const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatDateTime = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getStatusLabel = (status) => {
  const labels = {
    [MAINTENANCE_STATUSES.NEW]: 'New',
    [MAINTENANCE_STATUSES.IN_PROGRESS]: 'In Progress',
    [MAINTENANCE_STATUSES.REPAIRED]: 'Repaired',
    [MAINTENANCE_STATUSES.SCRAP]: 'Scrap',
  };
  return labels[status] || status;
};

export const formatNumber = (number) => {
  return new Intl.NumberFormat('en-US').format(number);
};

export const truncateText = (text, length = 50) => {
  if (!text) return '';
  return text.length > length ? text.substring(0, length) + '...' : text;
};
