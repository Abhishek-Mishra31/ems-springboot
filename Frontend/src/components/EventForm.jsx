import React from 'react';
import { Calendar, MapPin, Save, X } from 'lucide-react';

const EventForm = ({ initialData = {}, onSubmit, onCancel, isLoading = false }) => {
    const [formData, setFormData] = React.useState({
        name: initialData.name || '',
        date: initialData.date || '',
        location: initialData.location || ''
    });

    const [errors, setErrors] = React.useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Event name is required';
        }

        if (!formData.date) {
            newErrors.date = 'Event date is required';
        }

        if (!formData.location.trim()) {
            newErrors.location = 'Event location is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Name */}
            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
                    Event Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="Enter event name"
                    className={`w-full px-4 py-3 rounded-lg glass-dark text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${errors.name ? 'ring-2 ring-red-500' : ''
                        }`}
                />
                {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
            </div>

            {/* Event Date */}
            <div className="space-y-2">
                <label htmlFor="date" className="block text-sm font-semibold text-gray-800 flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Event Date</span>
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    disabled={isLoading}
                    className={`w-full px-4 py-3 rounded-lg glass-dark text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${errors.date ? 'ring-2 ring-red-500' : ''
                        }`}
                />
                {errors.date && (
                    <p className="text-red-400 text-sm mt-1">{errors.date}</p>
                )}
            </div>

            {/* Event Location */}
            <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-semibold text-gray-800 flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Event Location</span>
                </label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="Enter event location"
                    className={`w-full px-4 py-3 rounded-lg glass-dark text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${errors.location ? 'ring-2 ring-red-500' : ''
                        }`}
                />
                {errors.location && (
                    <p className="text-red-400 text-sm mt-1">{errors.location}</p>
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4 pt-4">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    <Save className="w-5 h-5" />
                    <span>{isLoading ? 'Saving...' : 'Save Event'}</span>
                </button>
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        disabled={isLoading}
                        className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-white/60 hover:bg-white/80 text-gray-800 font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <X className="w-5 h-5" />
                        <span>Cancel</span>
                    </button>
                )}
            </div>
        </form>
    );
};

export default EventForm;
