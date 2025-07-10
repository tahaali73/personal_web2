import React, { useState, useEffect, useContext } from "react";
import BookaCall_btn from "../Components/BookaCall-btn";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";

function Navbar({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme, themes } = useContext(ThemeContext);
  const backgroundPrimary = themes[theme].backgroundPrimary;
  const accentColor = themes[theme].accent;
  const textSecondary = themes[theme].textSecondary; // For nav links
  const hoverAccent = themes[theme].hoverAccent;
  const iconDefault = themes[theme].iconDefault; // For theme toggle icon
  const textPrimary = themes[theme].textPrimary; // For hamburger icon and mobile menu text
  const backgroundSecondary = themes[theme].backgroundSecondary; // For subtle hover background

  // Theme icons
  const SunIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      style={{ color: iconDefault }} // Dynamic stroke color
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  const MoonIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      style={{ color: iconDefault }} // Dynamic stroke color
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Check screen size on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the navbar and not on the mobile menu button itself
      const navElement = document.querySelector('nav'); // Assuming the nav element is the closest parent
      const menuButton = document.querySelector('[aria-expanded="false"], [aria-expanded="true"]'); // Select the menu button

      if (isOpen && isMobile && navElement && !navElement.contains(event.target) && !menuButton.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen, isMobile]);

  return (
    <nav className="w-full top-0 z-50 shadow-sm" style={{ backgroundColor: backgroundPrimary }}>
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[181px] h-auto">
              <span
                className={`font-manrope font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]`}
                style={{ color: accentColor }}
              >
                {name}
              </span>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <ul
              className={`flex items-center font-manrope font-medium text-[16px] xl:text-[18px]`}
              style={{ color: textSecondary }}
            >
              {[
                ["Home", "/"],
                ["About Me", "/about"],
                ["Portfolio", "/portfolio"],
                ["Contact Me", "/contact"],
              ].map((item) => (
                <li key={item[0]}>
                  <Link to={item[1]}>
                    <p
                      className="px-4 py-3 xl:px-6 xl:py-4 rounded-md transition-all duration-200"
                      style={{
                        color: textSecondary, // Default color
                        // Tailwind's JIT mode allows direct application of hover classes
                        // but for dynamic styles, using inline style with pseudo-classes is complex.
                        // For simplicity and direct control, we'll rely on theme context for hover.
                        // The `hover:` prefix in Tailwind is generally for utility classes.
                        // For inline styles, direct manipulation or a separate CSS block is needed.
                        // Here, we'll assume the textSecondary is the base, and hoverAccent is the hover color.
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = hoverAccent}
                      onMouseLeave={(e) => e.currentTarget.style.color = textSecondary}
                    >
                      {item[0]}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            {/* Theme Toggle Button (Desktop) */}
            <button
              onClick={handleThemeSwitch}
              className="p-2 rounded-full transition-colors"
              style={{
                backgroundColor: 'transparent', // No background by default
                color: iconDefault // Icon color
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = backgroundSecondary}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors`}
              style={{
                color: textPrimary, // Hamburger icon color
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = backgroundSecondary}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ color: textPrimary }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ color: textPrimary }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`lg:hidden shadow-xl`}
          style={{ backgroundColor: backgroundPrimary }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "About Me", "Portfolio", "Contact Me"].map((item, idx) => (
              <Link to={
                idx === 0 ? "/" :
                idx === 1 ? "/about" :
                idx === 2 ? "/portfolio" :
                "/contact"
              } key={item}>
                <button
                  className={`w-full text-left block px-4 py-3 rounded-md font-manrope font-medium text-lg transition-colors`}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: textPrimary, // Default text color for mobile menu items
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = backgroundSecondary; e.currentTarget.style.color = accentColor; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = textPrimary; }}
                >
                  {item}
                </button>
              </Link>
            ))}

            {/* Theme Toggle Button (mobile) */}
            <button
              onClick={handleThemeSwitch}
              className="p-2 rounded-full transition-colors"
              style={{
                backgroundColor: 'transparent',
                color: iconDefault,
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = backgroundSecondary}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>

            <div className="px-4 py-3">
              <BookaCall_btn btn_name="Book a Call" width="100%" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
