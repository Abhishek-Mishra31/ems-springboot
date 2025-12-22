import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEvents } from '../context/EventContext';
import EventForm from '../components/EventForm';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { CheckCircle } from 'lucide-react';

const EditEventPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getEventById, updateEvent, loading } = useEvents();
    const [eventData, setEventData] = useState(null);
    const [loadingEvent, setLoadingEvent] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                setLoadingEvent(true);
                const data = await getEventById(id);
                setEventData(data);
                setError(null);
            } catch (err) {
                setError(err.message || 'Failed to load event');
            } finally {
                setLoadingEvent(false);
            }
        };

        fetchEvent();
    }, [id]);

    const handleSubmit = async (formData) => {
        try {
            await updateEvent(id, formData);
            setSuccess(true);
            setTimeout(() => {
                navigate('/');
            }, 1500);
        } catch (error) {
            console.error('Failed to update event:', error);
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    const handleRetry = () => {
        window.location.reload();
    };

    if (loadingEvent) {
        return (
            <div className="min-h-screen py-8">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <LoadingSpinner />
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen py-8">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ErrorMessage message={error} onRetry={handleRetry} />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8 animate-fadeIn">
                    <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                        Edit Event
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Update the event details
                    </p>
                </div>

                {/* Success Message */}
                {success && (
                    <div className="mb-6 p-4 rounded-lg glass-dark border border-green-500/30 animate-fadeIn">
                        <div className="flex items-center space-x-3">
                            <CheckCircle className="w-6 h-6 text-green-400" />
                            <div>
                                <h3 className="text-lg font-semibold text-green-400">Success!</h3>
                                <p className="text-gray-700">Event updated successfully. Redirecting...</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Form */}
                <div className="glass-dark rounded-xl p-6 md:p-8 animate-fadeIn">
                    <EventForm
                        initialData={eventData}
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                        isLoading={loading}
                    />
                </div>
            </div>
        </div>
    );
};

export default EditEventPage;
