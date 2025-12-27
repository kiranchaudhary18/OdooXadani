// import React, { useState } from 'react';
// import { Plus, Edit2, Trash2, Mail, Phone } from 'lucide-react';
// import Badge from '../../components/ui/Badge';
// import { useSidebar } from '../../context/SidebarContext';

// const TeamPage = () => {
//   const { isSidebarOpen } = useSidebar();
//   const [searchTerm, setSearchTerm] = useState('');

//   // Mock team data
//   const [team, setTeam] = useState([
//     {
//       id: 1,
//       name: 'John Smith',
//       email: 'john.smith@company.com',
//       phone: '+1 (555) 123-4567',
//       role: 'Senior Technician',
//       specialization: 'Pumps & Motors',
//       status: 'Active',
//       assignedTasks: 5,
//     },
//     {
//       id: 2,
//       name: 'Sarah Johnson',
//       email: 'sarah.johnson@company.com',
//       phone: '+1 (555) 234-5678',
//       role: 'Technician',
//       specialization: 'Hydraulic Systems',
//       status: 'Active',
//       assignedTasks: 3,
//     },
//     {
//       id: 3,
//       name: 'Mike Davis',
//       email: 'mike.davis@company.com',
//       phone: '+1 (555) 345-6789',
//       role: 'Maintenance Engineer',
//       specialization: 'Mechanical Systems',
//       status: 'Active',
//       assignedTasks: 7,
//     },
//     {
//       id: 4,
//       name: 'Emily Brown',
//       email: 'emily.brown@company.com',
//       phone: '+1 (555) 456-7890',
//       role: 'Technician',
//       specialization: 'Electrical Systems',
//       status: 'On Leave',
//       assignedTasks: 0,
//     },
//     {
//       id: 5,
//       name: 'Robert Wilson',
//       email: 'robert.wilson@company.com',
//       phone: '+1 (555) 567-8901',
//       role: 'Team Lead',
//       specialization: 'All Systems',
//       status: 'Active',
//       assignedTasks: 8,
//     },
//   ]);

//   const filteredTeam = team.filter(
//     (member) =>
//       member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       member.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className={`min-h-screen bg-slate-50 pt-20 pb-8 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
//       <div className="px-4 md:px-8 space-y-8">
//         {/* Header */}
//         <div className="flex items-center justify-between flex-wrap gap-4">
//           <div>
//             <h1 className="text-3xl font-bold text-slate-900">Teams</h1>
//             <p className="text-slate-600 mt-1">Manage maintenance team members</p>
//           </div>
//           <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
//             <Plus size={20} />
//             Add Member
//           </button>
//         </div>

//         {/* Statistics */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
//             <p className="text-sm font-medium text-slate-600 mb-1">Total Members</p>
//             <p className="text-3xl font-bold text-primary-600">{team.length}</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
//             <p className="text-sm font-medium text-slate-600 mb-1">Available Now</p>
//             <p className="text-3xl font-bold text-green-600">{team.filter(m => m.status === 'Active').length}</p>
//           </div>
//           <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
//             <p className="text-sm font-medium text-slate-600 mb-1">Total Load</p>
//             <p className="text-3xl font-bold text-accent-600">{team.reduce((sum, m) => sum + m.assignedTasks, 0)}</p>
//           </div>
//         </div>

//         {/* Team Table */}
//         <div className="bg-white rounded-xl shadow-sm border border-slate-200">
//           {/* Search */}
//           <div className="px-6 py-4 border-b border-slate-200">
//             <input
//               type="text"
//               placeholder="Search by name or email..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
//             />
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
//                     Role
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
//                     Specialization
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
//                     Tasks
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
//                     Status
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
//                     Contact
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-200">
//                 {filteredTeam.map((member) => (
//                   <tr key={member.id} className="hover:bg-slate-50 transition-colors">
//                     <td className="px-6 py-4 text-sm font-medium text-slate-900">
//                       {member.name}
//                     </td>
//                     <td className="px-6 py-4 text-sm text-slate-600">
//                       {member.role}
//                     </td>
//                     <td className="px-6 py-4 text-sm text-slate-600">
//                       {member.specialization}
//                     </td>
//                     <td className="px-6 py-4 text-sm font-semibold text-slate-900">
//                       {member.assignedTasks}
//                     </td>
//                     <td className="px-6 py-4 text-sm">
//                       <Badge
//                         variant={member.status === 'Active' ? 'success' : 'default'}
//                       >
//                         {member.status}
//                       </Badge>
//                     </td>
//                     <td className="px-6 py-4 text-sm">
//                       <div className="flex flex-col gap-1">
//                         <a href={`mailto:${member.email}`} className="text-primary-600 hover:underline flex items-center gap-1">
//                           <Mail size={14} />
//                           {member.email}
//                         </a>
//                         <a href={`tel:${member.phone}`} className="text-primary-600 hover:underline flex items-center gap-1">
//                           <Phone size={14} />
//                           {member.phone}
//                         </a>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="flex items-center gap-2">
//                         <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors">
//                           <Edit2 size={16} />
//                         </button>
//                         <button className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition-colors">
//                           <Trash2 size={16} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamPage;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit2, Trash2, Mail, Phone } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import { useSidebar } from '../../context/SidebarContext';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { teamsAPI } from '../../api/teams.api';

const TeamPage = () => {
  const { isSidebarOpen } = useSidebar();
  const { user } = useAuth();
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Check if user is admin or manager
  const isAdmin = user?.role === 'admin' || user?.role?.toLowerCase() === 'admin';
  const isManager = user?.role === 'manager' || user?.role?.toLowerCase() === 'manager';
  const canEdit = isAdmin || isManager;

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setIsLoading(true);
        const response = await teamsAPI.getAll();
        // Backend returns array directly
        const teamsList = Array.isArray(response) ? response : (response.teams || response.data || []);
        setTeams(teamsList);
      } catch (error) {
        console.error('Error fetching teams:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeams();
  }, []);

  // Flatten team members for display
  const allMembers = teams.flatMap(team => 
    (team.members || []).map(member => ({
      ...member,
      teamName: team.name,
      teamId: team._id || team.id,
    }))
  );

  const filteredTeam = allMembers.filter(
    (member) =>
      (member.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (member.email || '').toLowerCase().includes(searchTerm.toLowerCase())
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
            <h1 className="text-3xl font-bold text-slate-900">Teams</h1>
            <p className="text-slate-600 mt-1">
              Manage maintenance team members
            </p>
          </div>

          {canEdit && (
            <Link
              to="/teams/create"
              style={{ backgroundColor: theme.primary }}
              className="flex items-center gap-2 px-4 py-2
              text-white rounded-lg
              hover:opacity-90 transition font-medium"
            >
              <Plus size={20} />
              Add Team
            </Link>
          )}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <p className="text-sm font-medium text-slate-600 mb-1">
              Total Members
            </p>
            <p style={{ color: theme.primary }} className="text-3xl font-bold">
              {teams.length}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <p className="text-sm font-medium text-slate-600 mb-1">
              Total Members
            </p>
            <p className="text-3xl font-bold text-green-600">
              {allMembers.length}
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <p className="text-sm font-medium text-slate-600 mb-1">
              Active Teams
            </p>
            <p style={{ color: theme.primary }} className="text-3xl font-bold">
              {teams.filter(t => t.status !== 'inactive').length}
            </p>
          </div>
        </div>

        {/* Team Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200">

          {/* Search */}
          <div className="px-6 py-4 border-b border-slate-200">
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg
              outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  {[
                    'Name',
                    'Role',
                    'Specialization',
                    'Tasks',
                    'Status',
                    'Contact',
                    'Actions',
                  ].map((h) => (
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
                {isLoading ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-8 text-center">
                      <p className="text-slate-500">Loading teams...</p>
                    </td>
                  </tr>
                ) : filteredTeam.length ? (
                  filteredTeam.map((member) => (
                  <tr
                    key={member._id || member.id || `member-${Math.random()}`}
                    className="hover:bg-orange-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                      {member.name || 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {member.role || 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {member.teamName || 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                      {member.assignedTasks || 0}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <Badge
                        variant={member.status === 'Active' || member.status === 'active' ? 'success' : 'default'}
                      >
                        {member.status || 'N/A'}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex flex-col gap-1">
                        <a
                          href={`mailto:${member.email}`}
                          style={{ color: theme.primary }}
                          className="hover:underline flex items-center gap-1"
                        >
                          <Mail size={14} />
                          {member.email}
                        </a>
                        <a
                          href={`tel:${member.phone}`}
                          style={{ color: theme.primary }}
                          className="hover:underline flex items-center gap-1"
                        >
                          <Phone size={14} />
                          {member.phone}
                        </a>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {canEdit && (
                          <>
                            <button
                              style={{
                                color: theme.primary,
                                backgroundColor: theme.light,
                              }}
                              className="p-2 rounded-lg transition"
                            >
                              <Edit2 size={16} />
                            </button>
                            <button
                              onClick={async () => {
                                if (window.confirm('Remove this member from the team?')) {
                                  try {
                                    await teamsAPI.removeMember(member.teamId, member._id || member.id);
                                    const response = await teamsAPI.getAll();
                                    const teamsList = response.teams || response.data || response || [];
                                    setTeams(teamsList);
                                  } catch (error) {
                                    console.error('Error removing member:', error);
                                    alert('Failed to remove member');
                                  }
                                }
                              }}
                              className="p-2 rounded-lg
                              text-red-600 bg-red-50 transition"
                              title="Remove from team"
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
                    <td colSpan="7" className="px-6 py-8 text-center">
                      <p className="text-slate-500">No team members found</p>
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

export default TeamPage;
