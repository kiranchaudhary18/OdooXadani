// import React, { useState } from 'react';
// import {
//   AlertTriangle,
//   Users,
//   Zap,
//   TrendingUp,
//   Search,
// } from 'lucide-react';
// import StatCard from '../../components/ui/StatCard';
// import Badge from '../../components/ui/Badge';
// import { useSidebar } from '../../context/SidebarContext';
// import { MAINTENANCE_STATUSES } from '../../utils/constants';
// import { formatDate } from '../../utils/helpers';

// const Dashboard = () => {
//   const { isSidebarOpen } = useSidebar();
//   const [searchTerm, setSearchTerm] = useState('');

//   const stats = {
//     criticalEquipment: 12,
//     technicianLoad: 8,
//     openRequests: 24,
//     completionRate: 94,
//   };

//   const requests = [
//     {
//       id: 1,
//       equipment: 'Pump A-01',
//       type: 'Corrective',
//       status: MAINTENANCE_STATUSES.NEW,
//       priority: 'High',
//       assignedTo: 'John Smith',
//       dueDate: '2024-12-28',
//     },
//     {
//       id: 2,
//       equipment: 'Motor B-02',
//       type: 'Preventive',
//       status: MAINTENANCE_STATUSES.IN_PROGRESS,
//       priority: 'Medium',
//       assignedTo: 'Sarah Johnson',
//       dueDate: '2024-12-29',
//     },
//     {
//       id: 3,
//       equipment: 'Compressor C-03',
//       type: 'Corrective',
//       status: MAINTENANCE_STATUSES.REPAIRED,
//       priority: 'Low',
//       assignedTo: 'Mike Davis',
//       dueDate: '2024-12-27',
//     },
//   ];

//   const filteredRequests = requests.filter(
//     (req) =>
//       req.equipment.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       req.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const priorityColor = {
//     High: 'text-red-600',
//     Medium: 'text-amber-600',
//     Low: 'text-emerald-600',
//   };

//   return (
//     <div
//       className={`min-h-screen pt-20 pb-10 transition-all duration-300
//       ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}
//       bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-100/40`}
//     >
//       <div className="px-4 md:px-8 space-y-10">

//         {/* ================= HEADER ================= */}
//         <div className="flex items-center justify-between flex-wrap gap-4">
//           <div>
//             <h1 className="text-3xl font-extrabold text-slate-900">
//               Maintenance Dashboard
//             </h1>
//             <p className="text-slate-600 mt-1">
//               Real-time overview of system health & operations
//             </p>
//           </div>

//           <div className="px-5 py-2 rounded-full text-sm font-semibold
//           bg-gradient-to-r from-indigo-600 to-blue-500
//           text-white shadow-lg shadow-blue-500/30">
//             Today: {new Date().toLocaleDateString()}
//           </div>
//         </div>

//         {/* ================= STATS ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
//           <StatCard
//             title="Critical Equipment"
//             value={stats.criticalEquipment}
//             subtitle="Requires attention"
//             icon={AlertTriangle}
//             variant="danger"
//             trend={5}
//             trendLabel="vs last week"
//           />
//           <StatCard
//             title="Technician Load"
//             value={stats.technicianLoad}
//             subtitle="Active technicians"
//             icon={Users}
//             variant="info"
//             trend={2}
//             trendLabel="Available today"
//           />
//           <StatCard
//             title="Open Requests"
//             value={stats.openRequests}
//             subtitle="Pending jobs"
//             icon={Zap}
//             variant="warning"
//             trend={-3}
//             trendLabel="vs last week"
//           />
//           <StatCard
//             title="Completion Rate"
//             value={`${stats.completionRate}%`}
//             subtitle="This month"
//             icon={TrendingUp}
//             variant="success"
//             trend={2}
//             trendLabel="vs previous month"
//           />
//         </div>

//         {/* ================= TABLE ================= */}
//         <div className="bg-white/80 backdrop-blur-xl rounded-2xl
//         border border-slate-200/70 shadow-lg shadow-slate-200/40">

//           {/* Table Header */}
//           <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
//             <div>
//               <h2 className="text-lg font-semibold text-slate-900">
//                 Recent Maintenance Requests
//               </h2>
//               <p className="text-sm text-slate-600">
//                 Active & pending work orders
//               </p>
//             </div>
//             <button className="px-5 py-2 rounded-lg font-medium text-sm
//             bg-gradient-to-r from-indigo-600 to-blue-500
//             text-white shadow-md hover:opacity-90 transition">
//               View All
//             </button>
//           </div>

//           {/* Search */}
//           <div className="px-6 py-4 border-b border-slate-200">
//             <div className="relative max-w-md">
//               <Search className="absolute left-4 top-3 text-slate-400" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search equipment or technician..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-4 py-2 rounded-xl
//                 border border-slate-300 outline-none
//                 focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-slate-50 border-b border-slate-200">
//                   {['Equipment', 'Type', 'Status', 'Priority', 'Assigned To', 'Due Date'].map((h) => (
//                     <th
//                       key={h}
//                       className="px-6 py-3 text-left text-xs font-semibold
//                       text-slate-700 uppercase tracking-wider"
//                     >
//                       {h}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-slate-200">
//                 {filteredRequests.length ? (
//                   filteredRequests.map((req) => (
//                     <tr
//                       key={req.id}
//                       className="hover:bg-gradient-to-r
//                       hover:from-blue-50 hover:to-transparent
//                       transition-colors cursor-pointer"
//                     >
//                       <td className="px-6 py-4 font-medium text-slate-900">
//                         {req.equipment}
//                       </td>
//                       <td className="px-6 py-4 text-slate-600">
//                         {req.type}
//                       </td>
//                       <td className="px-6 py-4">
//                         <Badge status={req.status} variant="status" />
//                       </td>
//                       <td className={`px-6 py-4 font-semibold ${priorityColor[req.priority]}`}>
//                         {req.priority}
//                       </td>
//                       <td className="px-6 py-4 text-slate-600">
//                         {req.assignedTo}
//                       </td>
//                       <td className="px-6 py-4 text-slate-600">
//                         {formatDate(req.dueDate)}
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="6" className="px-6 py-10 text-center text-slate-500">
//                       No maintenance requests found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState } from 'react';
import {
  AlertTriangle,
  Users,
  Zap,
  TrendingUp,
  Search,
} from 'lucide-react';
import StatCard from '../../components/ui/StatCard';
import Badge from '../../components/ui/Badge';
import { useSidebar } from '../../context/SidebarContext';
import { MAINTENANCE_STATUSES } from '../../utils/constants';
import { formatDate } from '../../utils/helpers';

const Dashboard = () => {
  const { isSidebarOpen } = useSidebar();
  const [searchTerm, setSearchTerm] = useState('');

  const stats = {
    criticalEquipment: 12,
    technicianLoad: 8,
    openRequests: 24,
    completionRate: 94,
  };

  const requests = [
    {
      id: 1,
      equipment: 'Pump A-01',
      type: 'Corrective',
      status: MAINTENANCE_STATUSES.NEW,
      priority: 'High',
      assignedTo: 'John Smith',
      dueDate: '2024-12-28',
    },
    {
      id: 2,
      equipment: 'Motor B-02',
      type: 'Preventive',
      status: MAINTENANCE_STATUSES.IN_PROGRESS,
      priority: 'Medium',
      assignedTo: 'Sarah Johnson',
      dueDate: '2024-12-29',
    },
    {
      id: 3,
      equipment: 'Compressor C-03',
      type: 'Corrective',
      status: MAINTENANCE_STATUSES.REPAIRED,
      priority: 'Low',
      assignedTo: 'Mike Davis',
      dueDate: '2024-12-27',
    },
  ];

  const filteredRequests = requests.filter(
    (req) =>
      req.equipment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const priorityColor = {
    High: 'text-red-600',
    Medium: 'text-amber-600',
    Low: 'text-emerald-600',
  };

  return (
    <div
      className={`min-h-screen pt-20 pb-10 transition-all duration-300
      ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}
      bg-[#FAFAFA]`}
    >
      <div className="px-4 md:px-8 space-y-10">

        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">
              Maintenance Dashboard
            </h1>
            <p className="text-slate-600 mt-1">
              Real-time overview of system health & operations
            </p>
          </div>

          <div
            className="px-5 py-2 rounded-full text-sm font-semibold
            bg-orange-600 text-white shadow-lg shadow-orange-600/30"
          >
            Today: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard
            title="Critical Equipment"
            value={stats.criticalEquipment}
            subtitle="Requires attention"
            icon={AlertTriangle}
            variant="danger"
            trend={5}
            trendLabel="vs last week"
          />
          <StatCard
            title="Technician Load"
            value={stats.technicianLoad}
            subtitle="Active technicians"
            icon={Users}
            variant="info"
            trend={2}
            trendLabel="Available today"
          />
          <StatCard
            title="Open Requests"
            value={stats.openRequests}
            subtitle="Pending jobs"
            icon={Zap}
            variant="warning"
            trend={-3}
            trendLabel="vs last week"
          />
          <StatCard
            title="Completion Rate"
            value={`${stats.completionRate}%`}
            subtitle="This month"
            icon={TrendingUp}
            variant="success"
            trend={2}
            trendLabel="vs previous month"
          />
        </div>

        {/* ================= TABLE ================= */}
        <div
          className="bg-white rounded-2xl
          border border-slate-200 shadow-lg shadow-slate-200/40"
        >
          {/* Table Header */}
          <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Recent Maintenance Requests
              </h2>
              <p className="text-sm text-slate-600">
                Active & pending work orders
              </p>
            </div>
            <button
              className="px-5 py-2 rounded-lg font-medium text-sm
              bg-orange-600 text-white shadow-md hover:bg-orange-700 transition"
            >
              View All
            </button>
          </div>

          {/* Search */}
          <div className="px-6 py-4 border-b border-slate-200">
            <div className="relative max-w-md">
              <Search
                className="absolute left-4 top-3 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search equipment or technician..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-2 rounded-xl
                border border-slate-300 outline-none
                focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  {['Equipment', 'Type', 'Status', 'Priority', 'Assigned To', 'Due Date'].map((h) => (
                    <th
                      key={h}
                      className="px-6 py-3 text-left text-xs font-semibold
                      text-slate-700 uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {filteredRequests.length ? (
                  filteredRequests.map((req) => (
                    <tr
                      key={req.id}
                      className="hover:bg-orange-50 transition-colors cursor-pointer"
                    >
                      <td className="px-6 py-4 font-medium text-slate-900">
                        {req.equipment}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {req.type}
                      </td>
                      <td className="px-6 py-4">
                        <Badge status={req.status} variant="status" />
                      </td>
                      <td
                        className={`px-6 py-4 font-semibold ${priorityColor[req.priority]}`}
                      >
                        {req.priority}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {req.assignedTo}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {formatDate(req.dueDate)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-10 text-center text-slate-500"
                    >
                      No maintenance requests found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
