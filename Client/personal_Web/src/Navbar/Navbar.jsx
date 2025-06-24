import React, { useState, useEffect, useContext } from 'react';
import BookaCall_btn from '../Components/BookaCall-btn';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Contexts/ThemeContext';

function Navbar({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, themes, setTheme} = useContext(ThemeContext);
  const primaryColor = themes[theme].primaryColor;
  const secondaryColor = themes[theme].secondaryColor;
  const mediumTextColor = themes[theme].mediumTextColor;

    // Theme icons
  const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );

    const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Check screen size on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen && isMobile) setIsOpen(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, isMobile]);

  return (
    <nav className={`w-full top-0 z-50 bg-[${primaryColor}] shadow-sm`}>
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[181px] h-auto">
              <span className={`font-manrope font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[${secondaryColor}]`}>
                {name}
              </span>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <ul className={`flex items-center font-manrope font-medium text-[16px] xl:text-[18px] text-[${mediumTextColor}]`}>
              {[['Home', '/'], ['About Me', '/about'], ['Portfolio', '/portfolio'], ['Contact Me', '/contact']].map((item) => (
                <li key={item[0]}>
                  <Link to={item[1]}>
                    <button className={`hover:text-[${secondaryColor}] px-4 py-3 xl:px-6 xl:py-4 rounded-md transition-all duration-200`}>
                      {item[0]}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
           {/* Theme Toggle Button (Desktop) */}
    <button 
      onClick={handleThemeSwitch} 
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" 
      aria-label={theme === 'light' ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>

            <div className="ml-4">
              <BookaCall_btn btn_name="Book a Call" />
            </div>
          </div>

         

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }} className={`inline-flex items-center justify-center p-2 rounded-md hover:bg-[${secondaryColor}]`} aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className={`lg:hidden bg-[${primaryColor}] shadow-xl`} onClick={(e) => e.stopPropagation()}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About Me', 'Portfolio', 'Contact Me'].map((item) => (
              <button key={item} className={`w-full text-left hover:text-[${secondaryColor}] block px-4 py-3 rounded-md font-manrope font-medium text-lg`} onClick={() => setIsOpen(false)}>
                {item}
              </button>
            ))}

            {/* Theme Toggle Button (mobile) */}
    <button 
      onClick={handleThemeSwitch} 
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" 
      aria-label={theme === 'light' ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>

            <div className="px-4 py-3">
              <BookaCall_btn btn_name="Book a Call" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
