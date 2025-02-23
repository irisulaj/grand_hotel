import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Hotel, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitch from './LanguageSwitch';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-elegant py-2' : 'bg-white/80 backdrop-blur-sm py-4'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-500"
          >
            <Hotel className="h-8 w-8 text-gold transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-gold leading-none tracking-wide animate-shimmer">
                GRAND WHITE
              </span>
              <span className="text-sm tracking-[0.2em] text-gray-600 group-hover:text-[#B8860B] transition-colors duration-500">
                CITY HOTEL
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-gold after:w-full before:w-full' : ''}`}>
              {t('nav.home')}
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'text-gold after:w-full before:w-full' : ''}`}>
              {t('nav.about')}
            </Link>
            <Link to="/rooms" className={`nav-link ${location.pathname === '/rooms' ? 'text-gold after:w-full before:w-full' : ''}`}>
              {t('nav.rooms')}
            </Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'text-gold after:w-full before:w-full' : ''}`}>
              {t('nav.contact')}
            </Link>
            <LanguageSwitch />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gold transition-all duration-500 hover:rotate-180"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        <div 
          className={`lg:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-md shadow-elegant transition-all duration-500 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="container-custom py-6 space-y-4">
            <Link 
              to="/" 
              className="block py-2 text-gray-800 hover:text-gold transition-all duration-500 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-800 hover:text-gold transition-all duration-500 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/rooms" 
              className="block py-2 text-gray-800 hover:text-gold transition-all duration-500 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.rooms')}
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-gray-800 hover:text-gold transition-all duration-500 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <div className="pt-4 border-t border-gray-100">
              <LanguageSwitch />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;