import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext'; // Assuming correct path

const FlashMessage = ({ message, type, onClose }) => {
  const { theme, themes } = useContext(ThemeContext);
  const currentTheme = themes[theme];

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const getStyles = () => {
    let bgColor, borderColor, textColor;

    switch (type) {
      case 'success':
        // Using Tailwind's green palette, but you can map these to theme if desired
        bgColor = 'bg-green-100';
        borderColor = 'border-green-400';
        textColor = 'text-green-800';
        break;
      case 'error':
        // Using Tailwind's red palette
        bgColor = 'bg-red-100';
        borderColor = 'border-red-400';
        textColor = 'text-red-800';
        break;
      default:
        // Default to a neutral color using theme text/background
        bgColor = currentTheme.backgroundSecondary;
        borderColor = currentTheme.border;
        textColor = currentTheme.textPrimary;
        break;
    }
    return `${bgColor} ${borderColor} ${textColor}`;
  };

  return (
    <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-lg shadow-lg flex items-center ${getStyles()}`}>
      <div className="font-medium">{message}</div>
      <button onClick={onClose} className="ml-4 focus:outline-none" style={{ color: currentTheme.textSecondary, hover: { color: currentTheme.textPrimary } }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default FlashMessage;
