import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, X } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';
import { teamsAPI } from '../../api/teams.api';

const AddTeam = () => {
  const { isSidebarOpen } = useSidebar();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [availableUsers, setAvailableUsers] = useState([]);

  useEffect(() => {
    // Fetch all teams to get available users
    const fetchUsers = async () => {
      try {
        const response = await teamsAPI.getAll();
        const teams = response.teams || response.data || response || [];
        const allUsers = [];
        teams.forEach(team => {
          if (team.members && Array.isArray(team.members)) {
            team.members.forEach(member => {
              if (!allUsers.find(u => (u._id || u.id) === (member._id || member.id))) {
                allUsers.push(member);
              }
            });
          }
        });
        setAvailableUsers(allUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    members: [],
  });

  const [selectedUserInput, setSelectedUserInput] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUserSearch = (value) => {
    setSelectedUserInput(value);
    if (value.trim()) {
      const filtered = availableUsers.filter(
        (user) =>
          !formData.members.find((m) => (m._id || m.id) === (user._id || user.id)) &&
          ((user.name || '').toLowerCase().includes(value.toLowerCase()) ||
            (user.role || '').toLowerCase().includes(value.toLowerCase()))
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers([]);
    }
  };

  const addMember = (user) => {
    if (!formData.members.find((m) => (m._id || m.id) === (user._id || user.id))) {
      setFormData((prev) => ({
        ...prev,
        members: [...prev.members, user],
      }));
    }
    setSelectedUserInput('');
    setFilteredUsers([]);
  };

  const removeMember = (userId) => {
    setFormData((prev) => ({
      ...prev,
      members: prev.members.filter((m) => (m._id || m.id) !== userId),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      alert('Please enter team name');
      return;
    }

    try {
      const requestData = {
        name: formData.name,
        description: formData.description,
        members: formData.members.map((m) => m._id || m.id),
      };
      
      await teamsAPI.create(requestData);
      setIsSubmitted(true);
      setTimeout(() => {
        navigate('/teams');
      }, 2000);
    } catch (error) {
      console.error('Error creating team:', error);
      alert(error.response?.data?.message || 'Failed to create team');
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#FAFAFA] pt-20 pb-8 transition-all duration-300
      ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}
    >
      <div className="px-4 md:px-8 max-w-4xl space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-slate-200 rounded-lg text-slate-600"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Add Team</h1>
            <p className="text-slate-600 mt-1">Create a new maintenance team</p>
          </div>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-green-600 text-2xl">✓</div>
              <div>
                <h3 className="font-semibold text-green-900">Team created successfully!</h3>
                <p className="text-green-700 text-sm mt-1">
                  The team has been created and you'll be redirected shortly.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form Card */}
        {!isSubmitted && (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="p-8 space-y-8">
              {/* Team Information Section */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Team Information</h2>
                <div className="space-y-6">
                  {/* Team Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Team Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Maintenance Team A, Hydraulic Service Team"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg
                      focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Brief description of the team's responsibilities and specialization"
                      rows="3"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg
                      focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              <hr className="border-slate-200" />

              {/* Team Members Section */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Team Members</h2>

                {/* User Search */}
                <div className="relative mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Add Members
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={selectedUserInput}
                      onChange={(e) => handleUserSearch(e.target.value)}
                      placeholder="Search by name or role to add members..."
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg
                      focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    />

                    {/* Dropdown Results */}
                    {filteredUsers.length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-300 rounded-lg shadow-lg z-10">
                        {filteredUsers.map((user) => (
                          <button
                            key={user._id || user.id}
                            type="button"
                            onClick={() => addMember(user)}
                            className="w-full text-left px-4 py-3 hover:bg-orange-50
                            border-b border-slate-200 last:border-b-0 transition-colors"
                          >
                            <div className="font-medium text-slate-900">{user.name || 'N/A'}</div>
                            <div className="text-sm text-slate-600">{user.role || 'N/A'}</div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Selected Members */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-slate-700">
                    Selected Members ({formData.members.length})
                  </label>
                  {formData.members.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {formData.members.map((member) => (
                        <div
                          key={member._id || member.id}
                          className="flex items-center justify-between p-4 bg-orange-50 border border-orange-200 rounded-lg"
                        >
                          <div>
                            <div className="font-medium text-slate-900">{member.name || 'N/A'}</div>
                            <div className="text-sm text-slate-600">{member.role || 'N/A'}</div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeMember(member._id || member.id)}
                            className="p-1 hover:bg-orange-200 rounded-lg text-orange-600 transition-colors"
                            title="Remove member"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg text-center">
                      <p className="text-slate-600">No members added yet</p>
                      <p className="text-sm text-slate-500 mt-1">
                        Search and add team members above
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex gap-4 pt-6">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3
                  bg-orange-600 text-white rounded-lg
                  hover:bg-orange-700 transition-colors font-medium"
                >
                  <Plus size={20} />
                  Create Team
                </button>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="px-6 py-3 bg-slate-200 text-slate-900 rounded-lg
                  hover:bg-slate-300 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AddTeam;
