// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { useSidebar } from '../../context/SidebarContext';
// import Badge from '../../components/ui/Badge';

// const MaintenanceCalendar = () => {
//   const { isSidebarOpen } = useSidebar();
//   const [currentDate, setCurrentDate] = useState(new Date());

//   const getDaysInMonth = (date) => {
//     return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
//   };

//   const getFirstDayOfMonth = (date) => {
//     return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
//   };

//   const prevMonth = () => {
//     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
//   };

//   const nextMonth = () => {
//     setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
//   };

//   const monthEvents = {
//     27: [{ id: 1, title: 'Pump A-01 Maintenance', type: 'preventive' }],
//     28: [{ id: 2, title: 'Motor B-02 Check', type: 'preventive' }],
//     30: [{ id: 3, title: 'Valve Inspection', type: 'corrective' }],
//   };

//   const days = [];
//   const daysInMonth = getDaysInMonth(currentDate);
//   const firstDay = getFirstDayOfMonth(currentDate);

//   // Empty cells before first day
//   for (let i = 0; i < firstDay; i++) {
//     days.push(null);
//   }

//   // Days of the month
//   for (let i = 1; i <= daysInMonth; i++) {
//     days.push(i);
//   }

//   const monthYear = currentDate.toLocaleDateString('en-US', {
//     month: 'long',
//     year: 'numeric',
//   });

//   return (
//     <div className={`min-h-screen bg-slate-50 pt-20 pb-8 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
//       <div className="px-4 md:px-8 space-y-6">
//         {/* Header */}
//         <div>
//           <h1 className="text-3xl font-bold text-slate-900">Maintenance Calendar</h1>
//           <p className="text-slate-600 mt-1">View scheduled maintenance tasks</p>
//         </div>

//         {/* Calendar */}
//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
//           {/* Calendar Header */}
//           <div className="p-6 border-b border-slate-200">
//             <div className="flex items-center justify-between mb-6">
//               <h2 className="text-2xl font-bold text-slate-900">{monthYear}</h2>
//               <div className="flex gap-2">
//                 <button
//                   onClick={prevMonth}
//                   className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600"
//                 >
//                   <ChevronLeft size={20} />
//                 </button>
//                 <button
//                   onClick={nextMonth}
//                   className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//               </div>
//             </div>

//             {/* Day Labels */}
//             <div className="grid grid-cols-7 gap-2">
//               {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
//                 <div key={day} className="text-center py-2">
//                   <p className="text-sm font-semibold text-slate-600">{day}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Calendar Grid */}
//           <div className="p-6">
//             <div className="grid grid-cols-7 gap-2">
//               {days.map((day, index) => (
//                 <div
//                   key={index}
//                   className={`min-h-32 rounded-lg border-2 p-3 transition-colors ${
//                     day === null
//                       ? 'border-slate-100 bg-slate-50'
//                       : 'border-slate-200 hover:border-slate-300 bg-white'
//                   }`}
//                 >
//                   {day !== null && (
//                     <>
//                       <div className="text-sm font-semibold text-slate-900 mb-2">{day}</div>
//                       <div className="space-y-1">
//                         {monthEvents[day] &&
//                           monthEvents[day].map((event) => (
//                             <div
//                               key={event.id}
//                               className={`text-xs p-2 rounded cursor-pointer transition-all hover:shadow-md ${
//                                 event.type === 'preventive'
//                                   ? 'bg-accent-100 text-accent-800 border border-accent-200'
//                                   : 'bg-amber-100 text-amber-800 border border-amber-200'
//                               }`}
//                             >
//                               {event.title}
//                             </div>
//                           ))}
//                       </div>
//                     </>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Legend */}
//         <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
//           <h3 className="text-lg font-semibold text-slate-900 mb-4">Legend</h3>
//           <div className="flex flex-wrap gap-6">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 bg-accent-100 border border-accent-200 rounded" />
//               <span className="text-sm text-slate-600">Preventive Maintenance</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 bg-amber-100 border border-amber-200 rounded" />
//               <span className="text-sm text-slate-600">Corrective Maintenance</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MaintenanceCalendar;



import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';
import Badge from '../../components/ui/Badge';

const MaintenanceCalendar = () => {
  const { isSidebarOpen } = useSidebar();
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const getFirstDayOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const prevMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));

  const nextMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));

  const monthEvents = {
    27: [{ id: 1, title: 'Pump A-01 Maintenance', type: 'preventive' }],
    28: [{ id: 2, title: 'Motor B-02 Check', type: 'preventive' }],
    30: [{ id: 3, title: 'Valve Inspection', type: 'corrective' }],
  };

  const days = [];
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);

  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const monthYear = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div
      className={`min-h-screen bg-[#FAFAFA] pt-20 pb-8 transition-all duration-300
      ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}
    >
      <div className="px-4 md:px-8 space-y-6">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Maintenance Calendar
          </h1>
          <p className="text-slate-600 mt-1">
            View scheduled maintenance tasks
          </p>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">

          {/* Calendar Header */}
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                {monthYear}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={prevMonth}
                  className="p-2 rounded-lg text-slate-600
                  hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextMonth}
                  className="p-2 rounded-lg text-slate-600
                  hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Day Labels */}
            <div className="grid grid-cols-7 gap-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center py-2">
                  <p className="text-sm font-semibold text-slate-600">
                    {day}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-6">
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => (
                <div
                  key={index}
                  className={`min-h-32 rounded-lg border-2 p-3 transition-colors ${
                    day === null
                      ? 'border-slate-100 bg-slate-50'
                      : 'border-slate-200 bg-white hover:border-orange-400'
                  }`}
                >
                  {day !== null && (
                    <>
                      <div className="text-sm font-semibold text-slate-900 mb-2">
                        {day}
                      </div>
                      <div className="space-y-1">
                        {monthEvents[day] &&
                          monthEvents[day].map((event) => (
                            <div
                              key={event.id}
                              className={`text-xs p-2 rounded cursor-pointer transition-all hover:shadow-md ${
                                event.type === 'preventive'
                                  ? 'bg-orange-100 text-orange-800 border border-orange-200'
                                  : 'bg-amber-100 text-amber-800 border border-amber-200'
                              }`}
                            >
                              {event.title}
                            </div>
                          ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Legend
          </h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-100 border border-orange-200 rounded" />
              <span className="text-sm text-slate-600">
                Preventive Maintenance
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber-100 border border-amber-200 rounded" />
              <span className="text-sm text-slate-600">
                Corrective Maintenance
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MaintenanceCalendar;
