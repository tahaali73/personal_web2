import React, { useState, useRef, useEffect, useContext } from "react";
import BookaCall_btn from "../../Components/BookaCall-btn";
import FAQSection from "../../Components/FaqComp"; // Renamed from FaqComp to FAQSection as per your file structure
import { ThemeContext } from "../../Contexts/ThemeContext";

function Faq({ faqs }) {
  const faqContainerRef = useRef(null);
  const [showScrollArrow, setShowScrollArrow] = useState(false);
  const { theme, themes } = useContext(ThemeContext);
  const backgroundPrimary = themes[theme].backgroundPrimary;
  const accentColor = themes[theme].accent;
  const textSecondary = themes[theme].textSecondary;
  const textPrimary = themes[theme].textPrimary;
  const backgroundSecondary = themes[theme].backgroundSecondary; // Card background
  const shadowColor = themes[theme].shadow;

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
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: backgroundPrimary }}>
      <div className="max-w-7xl mx-auto">
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

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* FAQ Section - Scrollable */}
          <div className="w-full lg:w-2/3 relative">
            <div
              ref={faqContainerRef}
              className="overflow-y-auto hide-scrollbar max-h-[600px]"
            >
              <FAQSection faqs={faqs} />
            </div>
            {/* Scroll Down Arrow */}
            {showScrollArrow && (
              <div
                className={`absolute bottom-0 left-0 right-0 flex justify-center pt-4`}
                style={{
                  background: `linear-gradient(to top, ${backgroundPrimary} 50%, transparent)`,
                }}
              >
                <button
                  onClick={scrollDown}
                  className={`animate-bounce rounded-full p-2 shadow-lg`}
                  style={{ backgroundColor: accentColor }}
                  aria-label="Scroll down"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ color: themes[theme].textButton }} // Icon color
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

          {/* "Still have questions" Panel - Fixed */}
          <div className="w-full lg:w-1/3">
            <div
              className={`rounded-xl p-6 md:p-8 shadow-lg h-full`}
              style={{ backgroundColor: backgroundSecondary }}
            >
              <div className="flex flex-col justify-between h-full">
                <div className="mb-6 flex justify-center">
                  <div className={`rounded-full p-3`} style={{ backgroundColor: accentColor }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: themes[theme].textButton }} // Icon color
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mb-8">
                  <h3
                    className={`font-manrope font-semibold text-xl md:text-2xl mb-4`}
                    style={{ color: textPrimary }}
                  >
                    Still have any Questions?
                  </h3>
                  <p
                    className={`font-manrope font-normal text-base`}
                    style={{ color: textSecondary }}
                  >
                    Let's collaborate to create an exceptional website that sets
                    you apart from the competition. Contact me today to discuss
                    your web design needs and bring your digital vision to life!
                  </p>
                </div>

                <div className="flex justify-center">
                  <BookaCall_btn
                    btn_name="Contact Me"
                    width="100%" // Make button full width of its container
                    height="49px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar CSS */}
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

export default Faq;
