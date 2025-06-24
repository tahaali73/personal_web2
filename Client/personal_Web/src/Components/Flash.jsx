import React, { useEffect } from 'react';

const FlashMessage = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const getStyles = () => {
    switch (type) {
      case 'success':
        return "bg-green-50 border border-green-200 text-green-800";
      case 'error':
        return "bg-red-50 border border-red-200 text-red-800";
      default:
        return "bg-gray-50 border border-gray-200 text-gray-800";
    }
  };

  return (
    <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-lg shadow-lg flex items-center ${getStyles()}`}>
      <div className="font-medium">{message}</div>
      <button onClick={onClose} className="ml-4 text-gray-500 hover:text-gray-700 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default FlashMessage;