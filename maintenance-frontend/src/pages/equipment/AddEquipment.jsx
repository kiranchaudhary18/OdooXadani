import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';
import { equipmentAPI } from '../../api/equipment.api';
import { teamsAPI } from '../../api/teams.api';

const AddEquipment = () => {
  const { isSidebarOpen } = useSidebar();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [teams, setTeams] = useState([]);
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await teamsAPI.getAll();
        // Backend returns array directly
        const teamsList = Array.isArray(response) ? response : (response.teams || response.data || []);
        setTeams(teamsList);
        
        // Extract technicians from teams
        const allTechnicians = [];
        teamsList.forEach(team => {
          if (team.members && Array.isArray(team.members)) {
            team.members.forEach(member => {
              if (!allTechnicians.find(t => (t._id || t.id) === (member._id || member.id))) {
                allTechnicians.push(member);
              }
            });
          }
        });
        setTechnicians(allTechnicians);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };
    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    serialNumber: '',
    department: '',
    assignedToEmployee: '',
    purchaseDate: '',
    warrantyExpiry: '',
    location: '',
    maintenanceTeam: '',
    defaultTechnician: '',
    isScrapped: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (
      !formData.name ||
      !formData.serialNumber ||
      !formData.department ||
      !formData.location ||
      !formData.maintenanceTeam
    ) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      // Clean up form data - remove empty strings and only send valid data
      const cleanedData = {
        name: formData.name,
        serialNumber: formData.serialNumber,
        department: formData.department,
        location: formData.location,
        maintenanceTeam: formData.maintenanceTeam,
        isScrapped: formData.isScrapped || false,
      };

      // Only add optional fields if they have values
      if (formData.assignedToEmployee && formData.assignedToEmployee.trim()) {
        cleanedData.assignedToEmployee = formData.assignedToEmployee.trim();
      }

      if (formData.purchaseDate) {
        cleanedData.purchaseDate = formData.purchaseDate;
      }

      if (formData.warrantyExpiry) {
        cleanedData.warrantyExpiry = formData.warrantyExpiry;
      }

      // Only add defaultTechnician if it's a valid non-empty value
      if (formData.defaultTechnician && formData.defaultTechnician.trim() && formData.defaultTechnician !== '') {
        cleanedData.defaultTechnician = formData.defaultTechnician.trim();
      }

      await equipmentAPI.create(cleanedData);
      setIsSubmitted(true);
      setTimeout(() => {
        navigate('/equipment');
      }, 2000);
    } catch (error) {
      console.error('Error creating equipment:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Failed to create equipment';
      alert(errorMessage);
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
            <h1 className="text-3xl font-bold text-slate-900">Add Equipment</h1>
            <p className="text-slate-600 mt-1">Register a new equipment asset</p>
          </div>
        </div>

        {/* Success Message */}
        {isSubmitted && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-green-600 text-2xl">✓</div>
              <div>
                <h3 className="font-semibold text-green-900">Equipment created successfully!</h3>
                <p className="text-green-700 text-sm mt-1">
                  The equipment has been registered and you'll be redirected shortly.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form Card */}
        {!isSubmitted && (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="p-8 space-y-8">
              {/* Basic Information Section */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Equipment Name */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Equipment Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Pump A-01, Motor B-02"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg
                      focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    />
                  </div>

                  {/* Serial Number */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Serial Number *
                    </label>
                    <input
                      type="text"
                      name="serialNumber"
                      value={formData.serialNumber}
                      onChange={handleChange}
                      placeholder="e.g., PMP-2024-001"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg
                      focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    />
                  </div>

                  {/* Department */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Department *
                    </label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      placeholder="e.g., Production, Maintenance"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg
                      focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g., Building A - Floor 2"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg
                      focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              <hr className="border-slate-200" />

              {/* Assignment Information */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Assignment & Maintenance</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Assigned To Employee */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Assigned To Employee
                    </label>
                    <input
                      type="text"
                      name="assignedToEmployee"
                      value={formData.assignedToEmployee}
                      onChange={handleChange}
                      placeholder="Employee name (optional)"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg
                      focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    />
                  </div>

                  {/* Maintenance Team */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Maintenance Team *
                    </label>
                    <select
                      name="maintenanceTeam"
                      value={formData.maintenanceTeam}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg
                      focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    >
                      <option value="">Select a maintenance team</option>
                      {teams.map((team) => (
                        <option key={team._id || team.id} value={team._id || team.id}>
                          {team.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Default Technician */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Default Technician
                    </label>
                    <select
                      name="defaultTechnician"
                      value={formData.defaultTechnician}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg
                      focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    >
                      <option value="">Select a technician (optional)</option>
                      {technicians.map((tech) => (
                        <option key={tech._id || tech.id} value={tech._id || tech.id}>
                          {tech.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <hr className="border-slate-200" />

              {/* Date Information */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Date Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Purchase Date */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Purchase Date
                    </label>
                    <input
                      type="date"
                      name="purchaseDate"
                      value={formData.purchaseDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg
                      focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    />
                  </div>

                  {/* Warranty Expiry */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Warranty Expiry
                    </label>
                    <input
                      type="date"
                      name="warrantyExpiry"
                      value={formData.warrantyExpiry}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg
                      focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              <hr className="border-slate-200" />

              {/* Status */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Status</h2>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="isScrapped"
                    checked={formData.isScrapped}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-slate-300 text-orange-600
                    focus:ring-2 focus:ring-orange-500"
                  />
                  <span className="text-slate-700 font-medium">
                    Mark as Scrapped
                  </span>
                </label>
                <p className="text-sm text-slate-600 mt-2 ml-7">
                  Check this if the equipment is no longer in use
                </p>
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
                  Create Equipment
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

export default AddEquipment;
