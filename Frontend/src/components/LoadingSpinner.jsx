import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-[400px]">
            <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-white/20"></div>
                <div className="w-16 h-16 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500 animate-spin absolute top-0 left-0"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
