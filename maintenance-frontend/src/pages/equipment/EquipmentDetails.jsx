// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft, Calendar, MapPin, Zap } from 'lucide-react';
// import Badge from '../../components/ui/Badge';
// import { useSidebar } from '../../context/SidebarContext';

// const EquipmentDetails = () => {
//   const { isSidebarOpen } = useSidebar();
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Mock equipment data
//   const equipment = {
//     id: 1,
//     name: 'Pump A-01',
//     serialNumber: 'PMP-2024-001',
//     location: 'Building A - Floor 2',
//     status: 'Active',
//     type: 'Centrifugal Pump',
//     manufacturer: 'Grundfos',
//     model: 'CR 15-10 A-F-A-EUBE',
//     yearManufactured: 2020,
//     capacity: '25 m³/h',
//     powerRating: '7.5 kW',
//     lastMaintenance: '2024-12-15',
//     nextMaintenance: '2025-01-15',
//     maintenanceInterval: 30,
//     notes:
//       'Regular maintenance performed. All bearings checked and lubricated.',
//   };

//   return (
//     <div
//       className={`min-h-screen pt-20 pb-10 transition-all duration-300
//       ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}
//       bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-100/40`}
//     >
//       <div className="px-4 md:px-8 space-y-8">

//         {/* ================= HEADER ================= */}
//         <div className="flex items-center justify-between flex-wrap gap-4">
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold"
//           >
//             <ArrowLeft size={20} />
//             Back
//           </button>

//           <button className="px-5 py-2 rounded-lg font-medium text-sm
//           bg-gradient-to-r from-indigo-600 to-blue-500
//           text-white shadow-md hover:opacity-90 transition">
//             Create Maintenance Request
//           </button>
//         </div>

//         {/* ================= MAIN GRID ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

//           {/* ================= LEFT COLUMN ================= */}
//           <div className="lg:col-span-2 space-y-6">

//             {/* ===== Equipment Header Card ===== */}
//             <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200 overflow-hidden">

//               <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-6 text-white">
//                 <h1 className="text-3xl font-bold mb-2">{equipment.name}</h1>

//                 <div className="flex items-center gap-4 flex-wrap">
//                   <Badge variant="success">{equipment.status}</Badge>
//                   <span className="text-blue-100">{equipment.type}</span>
//                   <span className="font-mono text-blue-100">
//                     {equipment.serialNumber}
//                   </span>
//                 </div>
//               </div>

//               <div className="p-6 space-y-6">

//                 {/* Info Grid */}
//                 <div className="grid grid-cols-2 gap-6">
//                   {[
//                     ['Manufacturer', equipment.manufacturer],
//                     ['Model', equipment.model],
//                     ['Year Manufactured', equipment.yearManufactured],
//                     ['Capacity', equipment.capacity],
//                   ].map(([label, value]) => (
//                     <div key={label}>
//                       <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
//                         {label}
//                       </p>
//                       <p className="text-lg font-semibold text-slate-900">
//                         {value}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 <hr className="border-slate-200" />

//                 <div className="grid grid-cols-2 gap-6">
//                   <div>
//                     <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
//                       Power Rating
//                     </p>
//                     <p className="text-lg font-semibold text-slate-900">
//                       {equipment.powerRating}
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
//                       Location
//                     </p>
//                     <div className="flex items-center gap-2 text-slate-900 font-medium">
//                       <MapPin size={18} className="text-indigo-600" />
//                       {equipment.location}
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* ===== Maintenance Info ===== */}
//             <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200 p-6">
//               <h2 className="text-lg font-semibold text-slate-900 mb-4">
//                 Maintenance Information
//               </h2>

//               <div className="grid md:grid-cols-2 gap-4">

//                 <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
//                   <Calendar className="text-indigo-600" size={22} />
//                   <div>
//                     <p className="text-xs font-semibold text-slate-500 uppercase">
//                       Last Maintenance
//                     </p>
//                     <p className="text-lg font-semibold text-slate-900">
//                       {equipment.lastMaintenance}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4 p-4 rounded-xl
//                 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200">
//                   <Calendar className="text-amber-600" size={22} />
//                   <div>
//                     <p className="text-xs font-semibold text-amber-600 uppercase">
//                       Next Maintenance
//                     </p>
//                     <p className="text-lg font-semibold text-slate-900">
//                       {equipment.nextMaintenance}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="p-4 rounded-xl bg-slate-50">
//                   <p className="text-sm font-semibold text-slate-700 mb-1">
//                     Maintenance Interval
//                   </p>
//                   <p className="text-3xl font-bold text-indigo-600">
//                     {equipment.maintenanceInterval} days
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* ===== Notes ===== */}
//             <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200 p-6">
//               <h3 className="text-lg font-semibold text-slate-900 mb-3">
//                 Notes
//               </h3>
//               <p className="text-slate-600 leading-relaxed">
//                 {equipment.notes}
//               </p>
//             </div>
//           </div>

//           {/* ================= RIGHT COLUMN ================= */}
//           <div className="space-y-6">

//             {/* Quick Actions */}
//             <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200 p-6">
//               <h3 className="text-lg font-semibold text-slate-900 mb-4">
//                 Quick Actions
//               </h3>

//               <div className="space-y-3">
//                 <button className="w-full px-4 py-3 rounded-xl font-medium
//                 bg-gradient-to-r from-indigo-600 to-blue-500
//                 text-white shadow-md hover:opacity-90 transition">
//                   Request Maintenance
//                 </button>

//                 <button className="w-full px-4 py-3 rounded-xl font-medium
//                 border-2 border-indigo-200 text-indigo-600
//                 hover:bg-indigo-50 transition">
//                   View History
//                 </button>

//                 <button className="w-full px-4 py-3 rounded-xl font-medium
//                 border-2 border-slate-200 text-slate-700
//                 hover:bg-slate-50 transition">
//                   Edit Details
//                 </button>
//               </div>
//             </div>

//             {/* Alert Card */}
//             <div className="bg-gradient-to-br from-amber-50 to-yellow-100
//             rounded-2xl p-6 border border-amber-200 shadow">
//               <div className="flex items-start gap-3">
//                 <Zap className="text-amber-600 mt-1" size={22} />
//                 <div>
//                   <p className="font-semibold text-slate-900 mb-1">
//                     Maintenance Due Soon
//                   </p>
//                   <p className="text-sm text-slate-700">
//                     Schedule maintenance for this equipment within the next 15 days.
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EquipmentDetails;



import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Zap } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import { useSidebar } from '../../context/SidebarContext';
import { useTheme } from '../../context/ThemeContext';

const EquipmentDetails = () => {
  const { isSidebarOpen } = useSidebar();
  const { theme } = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();

  const equipment = {
    id: 1,
    name: 'Pump A-01',
    serialNumber: 'PMP-2024-001',
    location: 'Building A - Floor 2',
    status: 'Active',
    type: 'Centrifugal Pump',
    manufacturer: 'Grundfos',
    model: 'CR 15-10 A-F-A-EUBE',
    yearManufactured: 2020,
    capacity: '25 m³/h',
    powerRating: '7.5 kW',
    lastMaintenance: '2024-12-15',
    nextMaintenance: '2025-01-15',
    maintenanceInterval: 30,
    notes:
      'Regular maintenance performed. All bearings checked and lubricated.',
  };

  return (
    <div
      className={`min-h-screen pt-20 pb-10 transition-all duration-300
      ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}
      bg-[#FAFAFA]`}
    >
      <div className="px-4 md:px-8 space-y-8">

        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <button
            onClick={() => navigate(-1)}
            style={{ color: theme.primary }}
            className="flex items-center gap-2 hover:opacity-70 font-semibold"
          >
            <ArrowLeft size={20} />
            Back
          </button>

          <button
            style={{ backgroundColor: theme.primary }}
            className="px-5 py-2 rounded-lg font-medium text-sm
          text-white shadow-md hover:opacity-90 transition">
            Create Maintenance Request
          </button>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-2 space-y-6">

            {/* ===== Equipment Header Card ===== */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">

              <div style={{ backgroundColor: theme.primary }} className="p-6 text-white">
                <h1 className="text-3xl font-bold mb-2">{equipment.name}</h1>

                <div className="flex items-center gap-4 flex-wrap">
                  <Badge variant="success">{equipment.status}</Badge>
                  <span className="text-white opacity-80">{equipment.type}</span>
                  <span className="font-mono text-white opacity-80">
                    {equipment.serialNumber}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-6">

                <div className="grid grid-cols-2 gap-6">
                  {[
                    ['Manufacturer', equipment.manufacturer],
                    ['Model', equipment.model],
                    ['Year Manufactured', equipment.yearManufactured],
                    ['Capacity', equipment.capacity],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                        {label}
                      </p>
                      <p className="text-lg font-semibold text-slate-900">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <hr className="border-slate-200" />

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                      Power Rating
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                      {equipment.powerRating}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase mb-1">
                      Location
                    </p>
                    <div className="flex items-center gap-2 text-slate-900 font-medium">
                      <MapPin size={18} style={{ color: theme.primary }} />
                      {equipment.location}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* ===== Maintenance Info ===== */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">
                Maintenance Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50">
                  <Calendar style={{ color: theme.primary }} size={22} />
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase">
                      Last Maintenance
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                      {equipment.lastMaintenance}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: theme.light,
                    borderColor: theme.primary,
                  }}
                  className="flex items-center gap-4 p-4 rounded-xl border"
                >
                  <Calendar style={{ color: theme.primary }} size={22} />
                  <div>
                    <p style={{ color: theme.primary }} className="text-xs font-semibold uppercase">
                      Next Maintenance
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                      {equipment.nextMaintenance}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50">
                  <p className="text-sm font-semibold text-slate-700 mb-1">
                    Maintenance Interval
                  </p>
                  <p style={{ color: theme.primary }} className="text-3xl font-bold">
                    {equipment.maintenanceInterval} days
                  </p>
                </div>
              </div>
            </div>

            {/* ===== Notes ===== */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Notes
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {equipment.notes}
              </p>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="space-y-6">

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Quick Actions
              </h3>

              <div className="space-y-3">
                <button
                  style={{ backgroundColor: theme.primary }}
                  className="w-full px-4 py-3 rounded-xl font-medium
                text-white shadow-md hover:opacity-90 transition"
                >
                  Request Maintenance
                </button>

                <button
                  style={{
                    borderColor: theme.primary,
                    color: theme.primary,
                  }}
                  className="w-full px-4 py-3 rounded-xl font-medium
                border-2 hover:opacity-70 transition"
                >
                  View History
                </button>

                <button className="w-full px-4 py-3 rounded-xl font-medium
                border-2 border-slate-200 text-slate-700
                hover:bg-slate-50 transition">
                  Edit Details
                </button>
              </div>
            </div>

            {/* Alert Card */}
            <div
              style={{
                backgroundColor: theme.light,
                borderColor: theme.primary,
              }}
              className="rounded-2xl p-6 border shadow"
            >
              <div className="flex items-start gap-3">
                <Zap style={{ color: theme.primary }} className="mt-1" size={22} />
                <div>
                  <p className="font-semibold text-slate-900 mb-1">
                    Maintenance Due Soon
                  </p>
                  <p className="text-sm text-slate-700">
                    Schedule maintenance for this equipment within the next 15 days.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetails;
