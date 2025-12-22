import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const EventContext = createContext();

const API_BASE_URL = 'http://localhost:8080/api';

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [pageSize, setPageSize] = useState(6);
    const [sortBy, setSortBy] = useState('name');
    const [sortDirection, setSortDirection] = useState('asc');

    // Fetch all events
    const fetchEvents = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${API_BASE_URL}/getEvents`);
            setEvents(response.data);
            return response.data;
        } catch (err) {
            setError(err.message || 'Failed to fetch events');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Fetch paginated events
    const fetchEventsPaginated = async (page = 0, size = 6) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${API_BASE_URL}/events/paginated`, {
                params: { page, size }
            });
            setEvents(response.data.content);
            setCurrentPage(response.data.number);
            setTotalPages(response.data.totalPages);
            setPageSize(size);
            return response.data;
        } catch (err) {
            setError(err.message || 'Failed to fetch paginated events');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Fetch sorted events
    const fetchEventsSorted = async (sortField = 'name', direction = 'asc') => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${API_BASE_URL}/events/sorted`, {
                params: { sortBy: sortField, direction }
            });
            setEvents(response.data);
            setSortBy(sortField);
            setSortDirection(direction);
            return response.data;
        } catch (err) {
            setError(err.message || 'Failed to fetch sorted events');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Fetch paginated and sorted events
    const fetchEventsPaginatedAndSorted = async (page = 0, size = 6, sortField = 'name', direction = 'asc') => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${API_BASE_URL}/events/paginatedAndSorted`, {
                params: { page, size, sortBy: sortField, direction }
            });
            setEvents(response.data.content);
            setCurrentPage(response.data.number);
            setTotalPages(response.data.totalPages);
            setPageSize(size);
            setSortBy(sortField);
            setSortDirection(direction);
            return response.data;
        } catch (err) {
            setError(err.message || 'Failed to fetch events');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Get event by ID
    const getEventById = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${API_BASE_URL}/getEvents`);
            const event = response.data.find(e => e.id === parseInt(id));
            if (!event) throw new Error('Event not found');
            return event;

        } catch (err) {
            setError(err.message || 'Failed to fetch event');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Create new event
    const createEvent = async (eventData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(`${API_BASE_URL}/event`, eventData);
            // Refresh the events list
            await fetchEventsPaginatedAndSorted(currentPage, pageSize, sortBy, sortDirection);
            return response.data;
        } catch (err) {
            setError(err.message || 'Failed to create event');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Update event
    const updateEvent = async (id, eventData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.put(`${API_BASE_URL}/updateEvents`, { ...eventData, id });
            // Refresh the events list
            await fetchEventsPaginatedAndSorted(currentPage, pageSize, sortBy, sortDirection);
            return response.data;
        } catch (err) {
            setError(err.message || 'Failed to update event');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Delete event
    const deleteEvent = async (id) => {
        setLoading(true);
        setError(null);
        try {
            await axios.delete(`${API_BASE_URL}/deleteEvents`, { data: { id } });
            // Refresh the events list
            await fetchEventsPaginatedAndSorted(currentPage, pageSize, sortBy, sortDirection);
        } catch (err) {
            setError(err.message || 'Failed to delete event');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const value = {
        events,
        loading,
        error,
        currentPage,
        totalPages,
        pageSize,
        sortBy,
        sortDirection,
        fetchEvents,
        fetchEventsPaginated,
        fetchEventsSorted,
        fetchEventsPaginatedAndSorted,
        getEventById,
        createEvent,
        updateEvent,
        deleteEvent,
        setCurrentPage,
        setPageSize,
        setSortBy,
        setSortDirection,
    };

    return <EventContext.Provider value={value}>{children}</EventContext.Provider>;
};

export const useEvents = () => {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error('useEvents must be used within an EventProvider');
    }
    return context;
};
