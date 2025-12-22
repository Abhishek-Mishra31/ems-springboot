import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEvents } from '../context/EventContext';
import EventForm from '../components/EventForm';
import { CheckCircle } from 'lucide-react';

const CreateEventPage = () => {
    const navigate = useNavigate();
    const { createEvent, loading } = useEvents();
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (formData) => {
        try {
            await createEvent(formData);
            setSuccess(true);
            setTimeout(() => {
                navigate('/');
            }, 1500);
        } catch (error) {
            console.error('Failed to create event:', error);
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8 animate-fadeIn">
                    <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                        Create New Event
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Fill in the details to create a new event
                    </p>
                </div>

                {/* Success Message */}
                {success && (
                    <div className="mb-6 p-4 rounded-lg glass-dark border border-green-500/30 animate-fadeIn">
                        <div className="flex items-center space-x-3">
                            <CheckCircle className="w-6 h-6 text-green-400" />
                            <div>
                                <h3 className="text-lg font-semibold text-green-400">Success!</h3>
                                <p className="text-gray-700">Event created successfully. Redirecting...</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Form */}
                <div className="glass-dark rounded-xl p-6 md:p-8 animate-fadeIn">
                    <EventForm
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                        isLoading={loading}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateEventPage;
