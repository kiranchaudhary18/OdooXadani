import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Wrench,
  Hammer,
  LayoutGrid,
  Calendar,
  Users,
  Box,
  Menu,
  X,
} from 'lucide-react';
import { NAV_ITEMS } from '../../utils/constants';

const iconMap = {
  LayoutDashboard,
  Wrench,
  Hammer,
  LayoutGrid,
  Calendar,
  Users,
  Box,
};

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  /* ---------- Shared Nav Content (Mobile) ---------- */
  const navContent = (
    <div className="flex flex-col gap-2">
      {NAV_ITEMS.map((item) => {
        const Icon = iconMap[item.icon];
        const active = isActive(item.path);

        return (
          <Link
            key={item.id}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              active
                ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            {Icon && (
              <Icon
                size={20}
                className={active ? 'text-indigo-600' : 'text-slate-500'}
              />
            )}
            <span className="text-sm font-medium">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );

  return (
    <>
      {/* ================= Desktop Sidebar ================= */}
      <aside
        className={`hidden md:flex fixed left-0 top-16
        h-[calc(100vh-64px)] bg-white border-r border-slate-200
        flex-col overflow-y-auto overflow-x-visible z-40
        transition-all duration-300
        ${isOpen ? 'w-64' : 'w-20'}`}
      >
        {/* Logo / Title */}
       

        <nav className="flex-1 py-4">
          <div className="flex flex-col gap-2 px-3">
            {NAV_ITEMS.map((item) => {
              const Icon = iconMap[item.icon];
              const active = isActive(item.path);

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`relative flex items-center gap-3 px-3 py-3 rounded-xl
                  transition-all duration-200 group
                  ${
                    active
                      ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                  title={!isOpen ? item.label : ''}
                >
                  {/* Active Indicator */}
                  {active && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-indigo-600 rounded-r-md" />
                  )}

                  {/* Icon */}
                  {Icon && (
                    <Icon
                      size={20}
                      className={`flex-shrink-0 transition-colors ${
                        active
                          ? 'text-indigo-600'
                          : 'text-slate-500 group-hover:text-slate-900'
                      }`}
                    />
                  )}

                  {/* Label */}
                  {isOpen && (
                    <span className="text-sm font-medium">
                      {item.label}
                    </span>
                  )}

                  {/* Tooltip (Collapsed) */}
                  {!isOpen && (
                    <div
                      className="absolute left-full top-1/2 -translate-y-1/2 ml-4
                      bg-slate-900 text-white text-xs px-3 py-1 rounded-lg shadow-xl
                      opacity-0 group-hover:opacity-100 transition-all duration-200
                      pointer-events-none whitespace-nowrap z-50"
                    >
                      {item.label}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>

      {/* ================= Mobile Sidebar ================= */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? 'opacity-40' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute left-0 top-16 w-64 h-[calc(100vh-64px)]
          bg-white border-r border-slate-200
          transform transition-transform duration-300 overflow-y-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <nav className="py-6 px-4">{navContent}</nav>
        </div>
      </div>

      {/* ================= Mobile Toggle Button ================= */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:hidden z-40
        p-3 bg-indigo-600 text-white rounded-full shadow-lg
        hover:bg-indigo-700 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </>
  );
};

export default Sidebar;
