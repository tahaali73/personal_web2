import React, { useState, useRef, useEffect, useContext } from "react";
import FAQSection from "../../Components/FaqComp"; // Corrected component name
import { ThemeContext } from "../../Contexts/ThemeContext";

function FaqContact({ faqs }) {
  const faqContainerRef = useRef(null);
  const [showScrollArrow, setShowScrollArrow] = useState(false);
  const { theme, themes } = useContext(ThemeContext);
  const backgroundPrimary = themes[theme].backgroundPrimary;
  const accentColor = themes[theme].accent;
  const textSecondary = themes[theme].textSecondary;
  const textPrimary = themes[theme].textPrimary;
  const textButton = themes[theme].textButton; // For text on accent buttons
  const hoverAccent = themes[theme].hoverAccent; // For hover effect on accent buttons
  const shadowColor = themes[theme].shadow; // For shadows

  // Check if FAQ content overflows its container
  useEffect(() => {
    const checkOverflow = () => {
      if (faqContainerRef.current) {
        const hasOverflow =
          faqContainerRef.current.scrollHeight >
          faqContainerRef.current.clientHeight;
        setShowScrollArrow(hasOverflow);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  const scrollDown = () => {
    if (faqContainerRef.current) {
      faqContainerRef.current.scrollBy({
        top: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="w-full py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: backgroundPrimary }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2
            className={`font-semibold font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-[38px] mb-3`}
            style={{ color: textPrimary }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={`font-normal font-manrope text-base md:text-lg max-w-3xl mx-auto`}
            style={{ color: textSecondary }}
          >
            Here are answers to some common questions
          </p>
        </div>
        {/* FAQ Section - Centered and optimized */}
        <div className="relative">
          <div
            ref={faqContainerRef}
            className="overflow-y-auto hide-scrollbar max-h-[600px] pr-4"
          >
            <FAQSection faqs={faqs} />
          </div>
          {/* Scroll Down Arrow */}
          {showScrollArrow && (
            <div
              className={`absolute bottom-0 left-0 right-0 flex justify-center pt-4`}
              style={{
                background: `linear-gradient(to top, ${backgroundPrimary} 50%, ${backgroundPrimary}cc)`, // Adjust gradient for theme consistency
              }}
            >
              <button
                onClick={scrollDown}
                className={`animate-bounce rounded-full p-2 shadow-lg transition-colors`}
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 4px 6px -1px ${shadowColor}, 0 2px 4px -1px ${shadowColor}`,
                  '&:hover': {
                    backgroundColor: hoverAccent,
                  }
                }}
                aria-label="Scroll down"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ color: textButton }} // Icon color uses textButton color
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default FaqContact;
