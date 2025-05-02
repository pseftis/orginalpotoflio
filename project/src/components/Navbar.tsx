import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', to: 'hero', offset: -80 },
  { name: 'About', to: 'about', offset: -80 },
  { name: 'Skills', to: 'skills', offset: -80 },
  { name: 'Projects', to: 'projects', offset: -80 },
  { name: 'Certificates', to: 'certificates', offset: -80 },
  { name: 'Contact', to: 'contact', offset: -80 },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-xl font-bold text-indigo-600 dark:text-indigo-400 cursor-pointer"
          >
            Ch yatesh<span className="text-gray-800 dark:text-gray-200">chandra sai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                className="navbar-link cursor-pointer"
                activeClass="active"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-96 opacity-100 py-4'
            : 'max-h-0 opacity-0 overflow-hidden py-0'
        }`}
      >
        <div className="px-4 space-y-3 bg-white dark:bg-gray-900 shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={500}
              className="navbar-link block py-2 cursor-pointer"
              activeClass="active"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;