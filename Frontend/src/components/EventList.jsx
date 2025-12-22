import React from 'react';
import EventCard from './EventCard';
import { Calendar } from 'lucide-react';

const EventList = ({ events }) => {
    if (!events || events.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] animate-fadeIn">
                <div className="p-6 rounded-full bg-white/5 mb-4">
                    <Calendar className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Events Found</h3>
                <p className="text-gray-600">Create your first event to get started!</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
};

export default EventList;
