import React, { useEffect } from 'react';
import { useEvents } from '../context/EventContext';
import EventList from '../components/EventList';
import Pagination from '../components/Pagination';
import SortControls from '../components/SortControls';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { Plus, Calendar, Users, MapPin, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const {
        events,
        loading,
        error,
        currentPage,
        totalPages,
        pageSize,
        sortBy,
        sortDirection,
        fetchEventsPaginatedAndSorted,
        fetchEvents,
    } = useEvents();

    useEffect(() => {
        fetchEventsPaginatedAndSorted(0, pageSize, sortBy, sortDirection);
    }, []);

    const handlePageChange = (newPage) => {
        fetchEventsPaginatedAndSorted(newPage, pageSize, sortBy, sortDirection);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSortChange = (newSortBy, newDirection) => {
        fetchEventsPaginatedAndSorted(0, pageSize, newSortBy, newDirection);
    };

    const handleRetry = () => {
        fetchEventsPaginatedAndSorted(currentPage, pageSize, sortBy, sortDirection);
    };

    return (
        <div className="min-h-screen">
            {/* Hero/Introduction Section */}
            <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center animate-fadeIn">
                        {/* Main Heading */}
                        <div className="flex items-center justify-center mb-6">
                            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-purple-400 mr-3 animate-pulse" />
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
                                <span className="gradient-text">Event Management</span>
                            </h1>
                            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-pink-400 ml-3 animate-pulse" />
                        </div>

                        {/* Subtitle */}
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                            Organize, manage, and track all your events in one beautiful place.
                            Create memorable experiences with ease.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                            <div className="flex items-center space-x-2 px-4 py-2 rounded-full glass-dark">
                                <Calendar className="w-5 h-5 text-purple-400" />
                                <span className="text-gray-800 text-sm md:text-base font-medium">Easy Scheduling</span>
                            </div>
                            <div className="flex items-center space-x-2 px-4 py-2 rounded-full glass-dark">
                                <MapPin className="w-5 h-5 text-pink-400" />
                                <span className="text-gray-800 text-sm md:text-base font-medium">Location Tracking</span>
                            </div>
                            <div className="flex items-center space-x-2 px-4 py-2 rounded-full glass-dark">
                                <Users className="w-5 h-5 text-blue-400" />
                                <span className="text-gray-800 text-sm md:text-base font-medium">Team Collaboration</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={() => navigate('/create')}
                            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto"
                        >
                            <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                            <span>Create Your First Event</span>
                        </button>
                    </div>
                </div>

                {/* Decorative wave separator */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="rgba(0,0,0,0.1)" />
                    </svg>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="mb-8 md:mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center md:text-left">
                            {events.length > 0 ? 'Upcoming Events' : 'Your Events'}
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg text-center md:text-left">
                            {events.length > 0
                                ? 'Browse and manage your scheduled events'
                                : 'Start by creating your first event'}
                        </p>
                    </div>

                    {/* Sort Controls */}
                    {!loading && !error && events.length > 0 && (
                        <div className="animate-fadeIn mb-8">
                            <SortControls
                                sortBy={sortBy}
                                sortDirection={sortDirection}
                                onSortChange={handleSortChange}
                            />
                        </div>
                    )}

                    {/* Content */}
                    {loading ? (
                        <LoadingSpinner />
                    ) : error ? (
                        <ErrorMessage message={error} onRetry={handleRetry} />
                    ) : (
                        <>
                            <EventList events={events} />
                            {events.length > 0 && (
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
