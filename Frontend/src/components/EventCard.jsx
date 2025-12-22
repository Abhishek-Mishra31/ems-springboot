import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Edit2, Trash2 } from 'lucide-react';
import { useEvents } from '../context/EventContext';

const EventCard = ({ event }) => {
    const navigate = useNavigate();
    const { deleteEvent } = useEvents();
    const [isDeleting, setIsDeleting] = React.useState(false);

    const handleEdit = () => {
        navigate(`/edit/${event.id}`);
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            setIsDeleting(true);
            try {
                await deleteEvent(event.id);
            } catch (error) {
                console.error('Failed to delete event:', error);
                setIsDeleting(false);
            }
        }
    };

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch {
            return dateString;
        }
    };

    return (
        <div className="gradient-border hover-lift animate-fadeIn">
            <div className="p-6 h-full flex flex-col">
                {/* Event Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
                    {event.name}
                </h3>

                {/* Event Details */}
                <div className="space-y-3 flex-grow">
                    <div className="flex items-center space-x-3 text-gray-700">
                        <Calendar className="w-5 h-5 text-purple-400" />
                        <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-white/80">
                        <MapPin className="w-5 h-5 text-pink-400" />
                        <span className="line-clamp-2 text-black">{event.location}</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3 mt-6 pt-4 border-t border-gray-200">
                    <button
                        onClick={handleEdit}
                        disabled={isDeleting}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 text-gray-800 font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Edit2 className="w-4 h-4" />
                        <span>Edit</span>
                    </button>
                    <button
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Trash2 className="w-4 h-4" />
                        <span>{isDeleting ? 'Deleting...' : 'Delete'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
