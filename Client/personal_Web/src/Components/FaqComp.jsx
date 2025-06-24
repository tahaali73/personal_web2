import React, { useContext, useState } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

function FaqComp({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const {theme, themes} = useContext(ThemeContext);
  const secondaryColor = themes[theme].secondaryColor
  const mediumTextColor = themes[theme].mediumTextColor
  const CardColor = themes[theme].CardColor
  const largeTextcolor = themes[theme].largeTextcolor
  return (
    <div className={`w-full md:w-[90%] lg:w-[757px] rounded-lg overflow-hidden mb-4 transition-all duration-300 ${isOpen ? 'shadow-lg' : 'shadow'}`} style={{backgroundColor:CardColor}}>
      <div 
        className="flex justify-between items-center p-4 md:p-6 cursor-pointer transition-colors"
        onClick={toggleIsOpen}
      >
        <p className='text-base md:text-lg lg:text-xl font-medium font-manrope flex-grow pr-4' style={{color:largeTextcolor}}>
          {question}
        </p>
        <div className='w-8 h-8 flex items-center justify-center'>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color:largeTextcolor}}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color:largeTextcolor}}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          )}
        </div>
      </div>
      
      {isOpen && (
        <div className="overflow-hidden">
          <div className="animate-royalAppear p-4 md:p-6" style={{backgroundColor:CardColor}}>
            <div className="relative">
              {/* Parchment texture effect */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWRlY2Q4IiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0wIDBoNjB2NjBINHoiLz48L3N2Zz4=')] opacity-20"></div>
              {/* Answer text */}
              <p className='text-sm md:text-base font-manrope text-[#4D4D4D] relative z-10 pt-1 pr-8' style={{color:mediumTextColor}}>
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
  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">       
        <div className="flex flex-col items-center">
          {faqs.map((faq, index) => (
            <FaqComp key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
      
      {/* Royal decree animation */}
      <style jsx>{`
        @keyframes royalAppear {
          0% {
            transform: translateY(-20px);
            opacity: 0;
            box-shadow: 0 0 0 rgba(201, 166, 100, 0);
          }
          30% {
            transform: translateY(-10px);
            opacity: 0.5;
            box-shadow: 0 5px 15px rgba(201, 166, 100, 0.2);
          }
          60% {
            transform: translateY(5px);
            opacity: 0.8;
            box-shadow: 0 10px 25px rgba(201, 166, 100, 0.4);
          }
          100% {
            transform: translateY(0);
            opacity: 1;
            box-shadow: 0 15px 30px rgba(201, 166, 100, 0.6);
          }
        }
        
      `}</style>
    </div>
  );
}

export default FAQSection;