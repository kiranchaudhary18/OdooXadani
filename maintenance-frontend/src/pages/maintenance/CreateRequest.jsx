import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, AlertCircle } from 'lucide-react';
import { useSidebar } from '../../context/SidebarContext';
import { MAINTENANCE_TYPES, MAINTENANCE_STATUSES } from '../../utils/constants';
import Modal from '../../components/ui/Modal';

const CreateRequest = () => {
  const { isSidebarOpen } = useSidebar();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    equipment: '',
    type: MAINTENANCE_TYPES.CORRECTIVE,
    title: '',
    description: '',
    priority: 'Medium',
    assignedTo: '',
    estimatedHours: '',
    notes: '',
    instructions: '',
    requiredParts: '',
    scheduledDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => {
      navigate('/maintenance/requests');
    }, 2000);
  };

  return (
    <div className={`min-h-screen bg-slate-50 pt-20 pb-8 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
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
            <h1 className="text-3xl font-bold text-slate-900">Create Maintenance Request</h1>
            <p className="text-slate-600 mt-1">Start a new maintenance task or repair</p>
          </div>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="p-8 space-y-8">
            {/* Type Selection */}
            <div>
              <label className="block text-lg font-semibold text-slate-900 mb-4">Request Type</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[MAINTENANCE_TYPES.CORRECTIVE, MAINTENANCE_TYPES.PREVENTIVE].map((type) => (
                  <label
                    key={type}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.type === type
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="type"
                      value={type}
                      checked={formData.type === type}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <span className="font-semibold text-slate-900 capitalize">{type}</span>
                    <p className="text-sm text-slate-600 mt-1">
                      {type === MAINTENANCE_TYPES.CORRECTIVE
                        ? 'Fix existing equipment problems'
                        : 'Scheduled routine maintenance'}
                    </p>
                  </label>
                ))}
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Equipment Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Equipment *</label>
                <select
                  name="equipment"
                  value={formData.equipment}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="">Select equipment...</option>
                  <option value="Pump A-01">Pump A-01</option>
                  <option value="Motor B-02">Motor B-02</option>
                  <option value="Compressor C-03">Compressor C-03</option>
                  <option value="Valve V-04">Valve V-04</option>
                </select>
              </div>

              {/* Priority Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Priority *</label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>

              {/* Assigned To */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Assign To *</label>
                <select
                  name="assignedTo"
                  value={formData.assignedTo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                >
                  <option value="">Select technician...</option>
                  <option value="John Smith">John Smith</option>
                  <option value="Sarah Johnson">Sarah Johnson</option>
                  <option value="Mike Davis">Mike Davis</option>
                </select>
              </div>

              {/* Scheduled Date */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Scheduled Date</label>
                <input
                  type="date"
                  name="scheduledDate"
                  value={formData.scheduledDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Estimated Hours */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Estimated Hours</label>
                <input
                  type="number"
                  name="estimatedHours"
                  value={formData.estimatedHours}
                  onChange={handleChange}
                  placeholder="0"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Brief description of the task"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Detailed description of the issue or maintenance task"
                rows="4"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Instructions */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Instructions</label>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                placeholder="Special instructions for the technician"
                rows="3"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Required Parts */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Required Parts</label>
              <textarea
                name="requiredParts"
                value={formData.requiredParts}
                onChange={handleChange}
                placeholder="List of required spare parts"
                rows="2"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Additional Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any additional notes or observations"
                rows="2"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="px-8 py-6 border-t border-slate-200 flex gap-3 justify-end">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 border-2 border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center gap-2"
            >
              <Check size={18} />
              Create Request
            </button>
          </div>
        </form>

        {/* Confirmation Modal */}
        <Modal
          isOpen={isSubmitted}
          onClose={() => setIsSubmitted(false)}
          title="Request Created"
          size="sm"
        >
          <div className="text-center py-4">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-green-100 rounded-full">
                <Check className="text-green-600" size={32} />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Maintenance request created successfully!</h3>
            <p className="text-slate-600">Redirecting you back...</p>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CreateRequest;
