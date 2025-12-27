// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Plus, Search, Edit2, Trash2, Eye } from 'lucide-react';
// import Badge from '../../components/ui/Badge';
// import { useSidebar } from '../../context/SidebarContext';

// const EquipmentList = () => {
//   const { isSidebarOpen } = useSidebar();
//   const [searchTerm, setSearchTerm] = useState('');

//   // Mock equipment data
//   const [equipment, setEquipment] = useState([
//     {
//       id: 1,
//       name: 'Pump A-01',
//       serialNumber: 'PMP-2024-001',
//       location: 'Building A - Floor 2',
//       status: 'Active',
//       lastMaintenance: '2024-12-15',
//       nextMaintenance: '2025-01-15',
//       type: 'Centrifugal Pump',
//     },
//     {
//       id: 2,
//       name: 'Motor B-02',
//       serialNumber: 'MOT-2024-002',
//       location: 'Building B - Floor 1',
//       status: 'Active',
//       lastMaintenance: '2024-12-10',
//       nextMaintenance: '2025-01-10',
//       type: 'Electric Motor',
//     },
//     {
//       id: 3,
//       name: 'Compressor C-03',
//       serialNumber: 'CMP-2024-003',
//       location: 'Building C - Basement',
//       status: 'Inactive',
//       lastMaintenance: '2024-11-20',
//       nextMaintenance: '2025-02-20',
//       type: 'Rotary Compressor',
//     },
//     {
//       id: 4,
//       name: 'Valve V-04',
//       serialNumber: 'VLV-2024-004',
//       location: 'Building A - Floor 3',
//       status: 'Active',
//       lastMaintenance: '2024-12-18',
//       nextMaintenance: '2025-01-18',
//       type: 'Control Valve',
//     },
//     {
//       id: 5,
//       name: 'Bearing B-05',
//       serialNumber: 'BRG-2024-005',
//       location: 'Building D - Floor 1',
//       status: 'Active',
//       lastMaintenance: '2024-12-05',
//       nextMaintenance: '2025-01-05',
//       type: 'Rolling Bearing',
//     },
//   ]);

//   const filteredEquipment = equipment.filter(
//     (eq) =>
//       eq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       eq.serialNumber.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className={`min-h-screen bg-slate-50 pt-20 pb-8 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
//       <div className="px-4 md:px-8 space-y-8">
//         {/* Header */}
//         <div className="flex items-center justify-between flex-wrap gap-4">
//           <div>
//             <h1 className="text-3xl font-bold text-slate-900">Equipment</h1>
//             <p className="text-slate-600 mt-1">Manage all equipment and assets</p>
//           </div>
//           <Link
//             to="/equipment/create"
//             className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
//           >
//             <Plus size={20} />
//             Add Equipment
//           </Link>
//         </div>

//         {/* Equipment Table */}
//         <div className="bg-white rounded-xl shadow-sm border border-slate-200">
//           {/* Search */}
//           <div className="px-6 py-4 border-b border-slate-200">
//             <div className="relative">
//               <Search className="absolute left-4 top-3 text-slate-400" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search by name or serial number..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-12 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
//               />
//             </div>
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-slate-50 border-b border-slate-200">
//                   <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
//                     Name
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
//                     Serial Number
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
//                     Type
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
//                     Location
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-200">
//                 {filteredEquipment.length > 0 ? (
//                   filteredEquipment.map((eq) => (
//                     <tr key={eq.id} className="hover:bg-slate-50 transition-colors">
//                       <td className="px-6 py-4 text-sm font-medium text-slate-900">
//                         {eq.name}
//                       </td>
//                       <td className="px-6 py-4 text-sm text-slate-600 font-mono">
//                         {eq.serialNumber}
//                       </td>
//                       <td className="px-6 py-4 text-sm text-slate-600">
//                         {eq.type}
//                       </td>
//                       <td className="px-6 py-4 text-sm text-slate-600">
//                         {eq.location}
//                       </td>
//                       <td className="px-6 py-4 text-sm">
//                         <Badge
//                           variant={eq.status === 'Active' ? 'success' : 'default'}
//                         >
//                           {eq.status}
//                         </Badge>
//                       </td>
//                       <td className="px-6 py-4">
//                         <div className="flex items-center gap-2">
//                           <Link
//                             to={`/equipment/${eq.id}`}
//                             className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors"
//                             title="View Details"
//                           >
//                             <Eye size={16} />
//                           </Link>
//                           <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors">
//                             <Edit2 size={16} />
//                           </button>
//                           <button className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition-colors">
//                             <Trash2 size={16} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="6" className="px-6 py-8 text-center">
//                       <p className="text-slate-500">No equipment found</p>
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

// export default EquipmentList;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Edit2, Trash2, Eye } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import { useSidebar } from '../../context/SidebarContext';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { equipmentAPI } from '../../api/equipment.api';


const EquipmentList = () => {
  const { isSidebarOpen } = useSidebar();
  const { user } = useAuth();
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [equipment, setEquipment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Check if user is admin or manager
  const isAdmin = user?.role === 'admin' || user?.role?.toLowerCase() === 'admin';
  const isManager = user?.role === 'manager' || user?.role?.toLowerCase() === 'manager';
  const canEdit = isAdmin || isManager;

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        setIsLoading(true);
        const response = await equipmentAPI.getAll();
        // Backend returns array directly
        const equipmentList = Array.isArray(response) ? response : (response.equipment || response.data || []);
        setEquipment(equipmentList);
      } catch (error) {
        console.error('Error fetching equipment:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEquipment();
  }, []);

  const filteredEquipment = equipment.filter(
    (eq) =>
      (eq.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (eq.serialNumber || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen bg-[#FAFAFA] pt-20 pb-8 transition-all duration-300
      ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}
    >
      <div className="px-4 md:px-8 space-y-8">

        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Equipment</h1>
            <p className="text-slate-600 mt-1">
              Manage all equipment and assets
            </p>
          </div>

          {canEdit && (
            <Link
              to="/equipment/create"
              style={{ backgroundColor: theme.primary }}
              className="flex items-center gap-2 px-4 py-2
              text-white rounded-lg
              hover:opacity-90 transition-colors font-medium"
            >
              <Plus size={20} />
              Add Equipment
            </Link>
          )}
        </div>

        {/* Equipment Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">

          {/* Search */}
          <div className="px-6 py-4 border-b border-slate-200">
            <div className="relative">
              <Search className="absolute left-4 top-3 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search by name or serial number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-2
                border border-slate-300 rounded-lg outline-none
                focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  {['Name', 'Serial Number', 'Type', 'Location', 'Status', 'Actions'].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-6 py-3 text-left text-xs font-semibold
                        text-slate-700 uppercase tracking-wider"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {isLoading ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center">
                      <p className="text-slate-500">Loading equipment...</p>
                    </td>
                  </tr>
                ) : filteredEquipment.length ? (
                  filteredEquipment.map((eq) => (
                    <tr
                      key={eq._id || eq.id || `eq-${Math.random()}`}
                      className="hover:bg-orange-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">
                        {eq.name || 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 font-mono">
                        {eq.serialNumber || 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {eq.type || 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {eq.location || 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <Badge
                          variant={eq.status === 'Active' || eq.status === 'active' ? 'success' : 'default'}
                        >
                          {eq.status || 'N/A'}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {/* View */}
                          <Link
                            to={`/equipment/${eq._id || eq.id}`}
                            className="p-2 rounded-lg
                            text-slate-600 hover:bg-slate-100
                            transition-colors"
                            title="View Details"
                          >
                            <Eye size={16} />
                          </Link>

    {isAdmin && (
      <>
        {/* Edit */}
        <button
          style={{ color: theme.primary }}
          className="p-2 rounded-lg
          hover:opacity-70
          transition-colors"
          title="Edit"
        >
          <Edit2 size={16} />
        </button>

        {/* Scrap */}
        <button
          onClick={async () => {
            if (window.confirm('Are you sure you want to scrap this equipment?')) {
              try {
                await equipmentAPI.scrap(eq._id || eq.id);
                setEquipment(equipment.filter(e => (e._id || e.id) !== (eq._id || eq.id)));
              } catch (error) {
                console.error('Error scrapping equipment:', error);
                alert('Failed to scrap equipment');
              }
            }
          }}
                                className="p-2 rounded-lg
                                text-red-600 hover:bg-red-50
                                transition-colors"
                                title="Scrap"
                              >
                                <Trash2 size={16} />
                              </button>
                            </>
                          )}
                        </div>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center">
                      <p className="text-slate-500">No equipment found</p>
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

export default EquipmentList;
