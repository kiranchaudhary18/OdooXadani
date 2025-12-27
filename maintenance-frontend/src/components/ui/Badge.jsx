import React from 'react';
import { STATUS_BADGE_COLORS } from '../../utils/constants';
import { getStatusLabel } from '../../utils/helpers';

const Badge = ({ status, variant = 'default', children, className = '' }) => {
  if (variant === 'status') {
    const colors = STATUS_BADGE_COLORS[status];
    if (!colors) return null;
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colors.bg} ${colors.text} ${colors.border}`}>
        {getStatusLabel(status)}
      </span>
    );
  }

  const variantClasses = {
    default: 'bg-slate-100 text-slate-800',
    primary: 'bg-primary-100 text-primary-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-amber-100 text-amber-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-accent-100 text-accent-800',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
