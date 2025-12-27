import React from 'react';

const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendLabel,
  variant = 'default',
}) => {
  const variantClasses = {
    default: 'border-l-4 border-l-primary-500',
    success: 'border-l-4 border-l-green-500',
    warning: 'border-l-4 border-l-amber-500',
    danger: 'border-l-4 border-l-red-500',
    info: 'border-l-4 border-l-accent-500',
  };

  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${variantClasses[variant]}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-600 mb-2">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-slate-900">{value}</h3>
            {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
          </div>
          {trendLabel && (
            <p className={`text-xs mt-3 ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {trend > 0 ? '↑' : '↓'} {trendLabel}
            </p>
          )}
        </div>
        {Icon && (
          <div className={`p-3 rounded-lg ${
            variant === 'default' ? 'bg-primary-100' :
            variant === 'success' ? 'bg-green-100' :
            variant === 'warning' ? 'bg-amber-100' :
            variant === 'danger' ? 'bg-red-100' :
            'bg-accent-100'
          }`}>
            <Icon size={24} className={
              variant === 'default' ? 'text-primary-600' :
              variant === 'success' ? 'text-green-600' :
              variant === 'warning' ? 'text-amber-600' :
              variant === 'danger' ? 'text-red-600' :
              'text-accent-600'
            } />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
