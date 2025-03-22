import React, { useState } from 'react';
import { Box } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-blue-600 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Box className="h-8 w-8" />
            <span className="text-xl font-bold">Ex-Tario</span>
          </Link>
          
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <Link 
              to="/" 
              className={`hover:text-blue-200 transition-colors ${location.pathname === '/' ? 'text-blue-200' : ''}`}
            >
              Calculator
            </Link>
            <Link 
              to="/services" 
              className={`hover:text-blue-200 transition-colors ${location.pathname === '/services' ? 'text-blue-200' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-blue-200 transition-colors ${location.pathname === '/about' ? 'text-blue-200' : ''}`}
            >
              About Us
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculator
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 rounded-md hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;