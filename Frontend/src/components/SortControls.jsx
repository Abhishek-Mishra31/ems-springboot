import React from 'react';
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';

const SortControls = ({ sortBy, sortDirection, onSortChange }) => {
    const sortOptions = [
        { value: 'name', label: 'Name' },
        { value: 'date', label: 'Date' },
        { value: 'location', label: 'Location' }
    ];

    const handleSortFieldChange = (e) => {
        onSortChange(e.target.value, sortDirection);
    };

    const toggleDirection = () => {
        const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        onSortChange(sortBy, newDirection);
    };

    return (
        <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
                <ArrowUpDown className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-semibold">Sort by:</span>
            </div>

            <select
                value={sortBy}
                onChange={handleSortFieldChange}
                className="px-4 py-2 rounded-lg glass-dark text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 cursor-pointer"
            >
                {sortOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                        {option.label}
                    </option>
                ))}
            </select>

            <button
                onClick={toggleDirection}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg glass-dark hover:bg-white/70 text-gray-800 font-medium transition-all duration-300"
                title={`Sort ${sortDirection === 'asc' ? 'Ascending' : 'Descending'}`}
            >
                {sortDirection === 'asc' ? (
                    <>
                        <ArrowUp className="w-5 h-5" />
                        <span>Ascending</span>
                    </>
                ) : (
                    <>
                        <ArrowDown className="w-5 h-5" />
                        <span>Descending</span>
                    </>
                )}
            </button>
        </div>
    );
};

export default SortControls;
