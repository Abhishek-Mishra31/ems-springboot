import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const canGoPrevious = currentPage > 0;
    const canGoNext = currentPage < totalPages - 1;

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="flex items-center justify-center space-x-4 mt-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={!canGoPrevious}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg glass-dark hover:bg-white/20 text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
            </button>

            <div className="flex items-center space-x-2">
                <span className="text-gray-700 font-medium">Page</span>
                <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold">
                    {currentPage + 1}
                </span>
                <span className="text-gray-700 font-medium">of {totalPages}</span>
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={!canGoNext}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg glass-dark hover:bg-white/70 text-gray-800 font-medium transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            >
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Pagination;
