import React from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import { useContext } from 'react';

function BookaCall_btn({ btn_name, width = '160px', height = '59px' }) {
  const { theme, themes } = useContext(ThemeContext);
  const accentColor = themes[theme].accent;
  const buttonTextColor = themes[theme].textButton;

  return (
    <div>
      <button
        className='flex justify-center rounded-md items-center gap-[5px] px-4 py-3' // Simplified padding/margin classes
        style={{
          width: width,
          height: height,
          backgroundColor: accentColor,
          // Added a subtle shadow for better visual depth
          boxShadow: `0 4px 6px -1px ${themes[theme].shadow}, 0 2px 4px -1px ${themes[theme].shadow}`
        }}
      >
        {/* Using a simple SVG for the phone icon for better theme integration */}
        <div className='h-[24px] w-[24px] flex items-center justify-center'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ color: buttonTextColor }} // Icon color matches button text
          >
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
        </div>
        <div className='font-manrope font-medium text-md' style={{ color: buttonTextColor }}>
          {btn_name}
        </div>
      </button>
    </div>
  );
}

export default BookaCall_btn;
