import React, { useContext, useState } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

function FaqComp({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const { theme, themes } = useContext(ThemeContext);
  const textSecondary = themes[theme].textSecondary;
  const backgroundSecondary = themes[theme].backgroundSecondary;
  const textPrimary = themes[theme].textPrimary;
  const accentColor = themes[theme].accent; // For the plus/minus icon color
  const shadowColor = themes[theme].shadow; // For the shadow

  // Adjust the base64 SVG for the parchment effect to be more neutral
  // This SVG is a subtle pattern, so it should work across themes.
  const parchmentSvg = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWRlY2Q4IiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0wIDBoNjB2NjBINHoiLz48L3N2Zz4=`;


  return (
    <div
      className={`w-full md:w-[90%] lg:w-[757px] rounded-lg overflow-hidden mb-4 transition-all duration-300 ${isOpen ? 'shadow-lg' : 'shadow'}`}
      style={{
        backgroundColor: backgroundSecondary,
        boxShadow: isOpen ? `0 10px 15px -3px ${shadowColor}, 0 4px 6px -2px ${shadowColor}` : `0 1px 3px 0 ${shadowColor}, 0 1px 2px 0 ${shadowColor}`
      }}
    >
      <div
        className="flex justify-between items-center p-4 md:p-6 cursor-pointer transition-colors"
        onClick={toggleIsOpen}
      >
        <p className='text-base md:text-lg lg:text-xl font-medium font-manrope flex-grow pr-4' style={{ color: textPrimary }}>
          {question}
        </p>
        <div className='w-8 h-8 flex items-center justify-center'>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: accentColor }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: accentColor }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="overflow-hidden">
          <div className="animate-royalAppear p-4 md:p-6" style={{ backgroundColor: backgroundSecondary }}>
            <div className="relative">
              {/* Parchment texture effect - using dynamic background image */}
              <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundImage: `url('${parchmentSvg}')` }}
              ></div>
              {/* Answer text */}
              <p className='text-sm md:text-base font-manrope relative z-10 pt-1 pr-8' style={{ color: textSecondary }}>
                {answer}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FAQSection({ faqs }) {
  const { theme, themes } = useContext(ThemeContext);
  const accentColor = themes[theme].accent;
  const shadowColor = themes[theme].shadow;

  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          {faqs.map((faq, index) => (
            <FaqComp key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

      {/* Royal decree animation - updated box-shadow colors */}
      <style jsx>{`
        @keyframes royalAppear {
          0% {
            transform: translateY(-20px);
            opacity: 0;
            box-shadow: 0 0 0 ${shadowColor};
          }
          30% {
            transform: translateY(-10px);
            opacity: 0.5;
            box-shadow: 0 5px 15px ${shadowColor};
          }
          60% {
            transform: translateY(5px);
            opacity: 0.8;
            box-shadow: 0 10px 25px ${shadowColor};
          }
          100% {
            transform: translateY(0);
            opacity: 1;
            box-shadow: 0 15px 30px ${shadowColor};
          }
        }
      `}</style>
    </div>
  );
}

export default FAQSection;
