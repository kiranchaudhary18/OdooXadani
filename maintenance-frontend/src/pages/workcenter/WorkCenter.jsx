import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Users } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import { useSidebar } from '../../context/SidebarContext';

const WorkCenter = () => {
  const { isSidebarOpen } = useSidebar();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock work center data
  const [workCenters, setWorkCenters] = useState([
    {
      id: 1,
      name: 'Main Workshop',
      location: 'Building A - Ground Floor',
      capacity: 12,
      assignedTechnicians: 8,
      equipmentCount: 15,
      status: 'Active',
      supervisor: 'Robert Wilson',
      operatingHours: '6:00 AM - 6:00 PM',
    },
    {
      id: 2,
      name: 'Secondary Workshop',
      location: 'Building B - Floor 2',
      capacity: 8,
      assignedTechnicians: 5,
      equipmentCount: 10,
      status: 'Active',
      supervisor: 'John Smith',
      operatingHours: '7:00 AM - 5:00 PM',
    },
    {
      id: 3,
      name: 'Hydraulic Service Center',
      location: 'Building C',
      capacity: 6,
      assignedTechnicians: 3,
      equipmentCount: 8,
      status: 'Active',
      supervisor: 'Sarah Johnson',
      operatingHours: '8:00 AM - 4:00 PM',
    },
    {
      id: 4,
      name: 'Electrical Lab',
      location: 'Building D - Floor 1',
      capacity: 4,
      assignedTechnicians: 2,
      equipmentCount: 5,
      status: 'Maintenance',
      supervisor: 'Emily Brown',
      operatingHours: 'Closed',
    },
    {
      id: 5,
      name: 'Storage & Parts Room',
      location: 'Building A - Basement',
      capacity: 20,
      assignedTechnicians: 1,
      equipmentCount: 200,
      status: 'Active',
      supervisor: 'Mike Davis',
      operatingHours: '6:00 AM - 6:00 PM',
    },
  ]);

  const filteredCenters = workCenters.filter(
    (center) =>
      center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.supervisor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCapacityColor = (assigned, capacity) => {
    const percentage = (assigned / capacity) * 100;
    if (percentage >= 80) return 'text-red-600';
    if (percentage >= 60) return 'text-amber-600';
    return 'text-green-600';
  };

  return (
    <div className={`min-h-screen bg-slate-50 pt-20 pb-8 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
      <div className="px-4 md:px-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Work Centers</h1>
            <p className="text-slate-600 mt-1">Manage maintenance work facilities and capacity</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
            <Plus size={20} />
            Add Work Center
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <p className="text-sm font-medium text-slate-600 mb-1">Total Centers</p>
            <p className="text-3xl font-bold text-primary-600">{workCenters.length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <p className="text-sm font-medium text-slate-600 mb-1">Total Capacity</p>
            <p className="text-3xl font-bold text-accent-600">{workCenters.reduce((sum, c) => sum + c.capacity, 0)}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <p className="text-sm font-medium text-slate-600 mb-1">Assigned Technicians</p>
            <p className="text-3xl font-bold text-blue-600">{workCenters.reduce((sum, c) => sum + c.assignedTechnicians, 0)}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <p className="text-sm font-medium text-slate-600 mb-1">Equipment Stored</p>
            <p className="text-3xl font-bold text-purple-600">{workCenters.reduce((sum, c) => sum + c.equipmentCount, 0)}</p>
          </div>
        </div>

        {/* Work Centers Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">
          {/* Search */}
          <div className="px-6 py-4 border-b border-slate-200">
            <input
              type="text"
              placeholder="Search by name or supervisor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Supervisor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Capacity
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Equipment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Hours
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredCenters.map((center) => (
                  <tr key={center.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                      {center.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {center.location}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 flex items-center gap-2">
                      <Users size={14} className="text-slate-400" />
                      {center.supervisor}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary-600"
                            style={{ width: `${(center.assignedTechnicians / center.capacity) * 100}%` }}
                          />
                        </div>
                        <span className={`font-semibold text-xs ${getCapacityColor(center.assignedTechnicians, center.capacity)}`}>
                          {center.assignedTechnicians}/{center.capacity}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                      {center.equipmentCount}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {center.operatingHours}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <Badge
                        variant={center.status === 'Active' ? 'success' : 'warning'}
                      >
                        {center.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors">
                          <Edit2 size={16} />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCenter;
