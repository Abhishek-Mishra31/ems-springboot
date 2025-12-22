import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav className="glass-dark sticky top-0 z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-300">
                            <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold gradient-text">Event Manager</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/"
                            className="px-4 py-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-white/50 transition-all duration-300 font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/create"
                            className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
                        >
                            Create Event
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-white" />
                        ) : (
                            <Menu className="w-6 h-6 text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden animate-slideIn border-t border-white/10">
                    <div className="px-4 py-4 space-y-2">
                        <Link
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-white/50 transition-all duration-300 font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/create"
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                        >
                            Create Event
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
