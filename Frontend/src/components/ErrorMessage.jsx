import React from 'react';
import { AlertCircle, X } from 'lucide-react';

const ErrorMessage = ({ message, onRetry, onClose }) => {
    return (
        <div className="max-w-2xl mx-auto mt-8 animate-fadeIn">
            <div className="glass-dark rounded-xl p-6 border border-red-500/30">
                <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                        <div className="p-2 rounded-lg bg-red-500/20">
                            <AlertCircle className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-red-400">Error</h3>
                            <p className="text-white/70 mt-1">{message}</p>
                            {onRetry && (
                                <button
                                    onClick={onRetry}
                                    className="mt-4 px-4 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors duration-300"
                                >
                                    Try Again
                                </button>
                            )}
                        </div>
                    </div>
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                        >
                            <X className="w-5 h-5 text-white/50" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ErrorMessage;
