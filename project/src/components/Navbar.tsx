import React from 'react';
import { Menu, X, Users, Briefcase, BookOpen, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-purple-600">WomenConnect</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600">Features</a>
            <a href="#mentorship" className="text-gray-600 hover:text-purple-600">Mentorship</a>
            <a href="#jobs" className="text-gray-600 hover:text-purple-600">Jobs</a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              Join Now
            </button>
            <button className="text-purple-600 border border-purple-600 px-4 py-2 rounded-md hover:bg-purple-50">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-purple-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Features</a>
            <a href="#mentorship" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Mentorship</a>
            <a href="#jobs" className="block px-3 py-2 text-gray-600 hover:text-purple-600">Jobs</a>
            <button className="w-full mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              Join Now
            </button>
            <button className="w-full mt-2 text-purple-600 border border-purple-600 px-4 py-2 rounded-md hover:bg-purple-50">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}