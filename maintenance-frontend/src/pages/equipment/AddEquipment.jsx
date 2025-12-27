import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';
import { useTheme } from '../../context/ThemeContext';

const AddEquipment = () => {
  const { isSidebarOpen } = useSidebar();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [teams, setTeams] = useState([
    { id: 1, name: 'Maintenance Team A' },
    { id: 2, name: 'Maintenance Team B' },
    { id: 3, name: 'Maintenance Team C' },
  ]);
  const [technicians, setTechnicians] = useState([
    { id: 1, name: 'John Smith' },
    { id: 2, name: 'Sarah Johnson' },
    { id: 3, name: 'Mike Davis' },
    { id: 4, name: 'Emily Brown' },
  ]);

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
      // Mock API call - Replace with actual API endpoint
      console.log('Submitting equipment:', formData);
      setIsSubmitted(true);
      setTimeout(() => {
        navigate('/equipment');
      }, 2000);
    } catch (error) {
      console.error('Error creating equipment:', error);
      alert('Failed to create equipment');
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
                        <option key={team.id} value={team.id}>
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
                        <option key={tech.id} value={tech.id}>
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
                    style={{ accentColor: theme.primary }}
                    className="w-4 h-4 rounded border-slate-300
                    focus:ring-2 focus:ring-offset-0 outline-none"
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
                  style={{ backgroundColor: theme.primary }}
                  className="flex items-center gap-2 px-6 py-3
                  text-white rounded-lg
                  hover:opacity-90 transition-colors font-medium"
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
