import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

function HereFromYou() {
  const { theme, themes } = useContext(ThemeContext);
  const backgroundPrimary = themes[theme].backgroundPrimary;
  const accentColor = themes[theme].accent;
  const textSecondary = themes[theme].textSecondary;
  const textPrimary = themes[theme].textPrimary;
  const backgroundSecondary = themes[theme].backgroundSecondary; // Card background
  const borderColor = themes[theme].border;
  const shadowColor = themes[theme].shadow;
  const iconDefault = themes[theme].iconDefault; // For default icon color

  return (
    <div
      className="w-full py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: backgroundPrimary }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Shine Icon */}
        <div className="w-16 h-16 mb-8 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`w-full h-full`}
            fill="currentColor"
            style={{ color: accentColor }} // Icon color uses accent
          >
            <path
              d="M12,2L9.1,7H3.3L7,12L3.3,17H9.1L12,22L14.9,17H20.7L17,12L20.7,7H14.9L12,2Z"
            />
          </svg>
        </div>
        {/* Heading Section */}
        <div className="text-center max-w-4xl mb-12">
          <h2
            className={`font-manrope font-bold text-3xl sm:text-4xl md:text-[42px] mb-4`}
            style={{ color: textPrimary }}
          >
            We'd love to hear from you.
          </h2>
          <p
            className={`font-manrope text-base md:text-lg`}
            style={{ color: textSecondary }}
          >
            Here's what makes our service stand out for your needs
          </p>
        </div>
        {/* Benefits Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {/* Flexible Working Hours */}
          <div
            className={`rounded-2xl p-6 shadow-lg transition-all duration-300 transform hover:-translate-y-1 border`}
            style={{
              backgroundColor: backgroundSecondary,
              borderColor: borderColor,
              boxShadow: `0 4px 6px -1px ${shadowColor}, 0 2px 4px -1px ${shadowColor}`
            }}
          >
            <div className="flex items-start mb-4">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full mr-4`}
                style={{ backgroundColor: backgroundSecondary }} // Icon background matches card
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-8 w-8`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: accentColor }} // Icon color uses accent
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3
                className={`font-manrope font-semibold text-xl`}
                style={{ color: textPrimary }}
              >
                Flexible Working Hours
              </h3>
            </div>
            <p className={`font-manrope text-base`} style={{ color: textSecondary }}>
              We adapt to your schedule with flexible availability across time
              zones, ensuring we're available when you need us most.
            </p>
          </div>
          {/* Quick Change Resolutions */}
          <div
            className={`rounded-2xl p-6 shadow-lg transition-all duration-300 transform hover:-translate-y-1 border`}
            style={{
              backgroundColor: backgroundSecondary,
              borderColor: borderColor,
              boxShadow: `0 4px 6px -1px ${shadowColor}, 0 2px 4px -1px ${shadowColor}`
            }}
          >
            <div className="flex items-start mb-4">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full mr-4`}
                style={{ backgroundColor: backgroundSecondary }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-8 w-8`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: accentColor }}
                >
                  <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                </svg>
              </div>
              <h3
                className={`font-manrope font-semibold text-xl`}
                style={{ color: textPrimary }}
              >
                Quick Change Resolutions
              </h3>
            </div>
            <p className={`font-manrope text-base`} style={{ color: textSecondary }}>
              Rapid implementation of changes and adjustments, with most
              requests completed within 24-48 hours of approval.
            </p>
          </div>
          {/* 24/7 Assistance */}
          <div
            className={`rounded-2xl p-6 shadow-lg transition-all duration-300 transform hover:-translate-y-1 border`}
            style={{
              backgroundColor: backgroundSecondary,
              borderColor: borderColor,
              boxShadow: `0 4px 6px -1px ${shadowColor}, 0 2px 4px -1px ${shadowColor}`
            }}
          >
            <div className="flex items-start mb-4">
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full mr-4`}
                style={{ backgroundColor: backgroundSecondary }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-8 w-8`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: accentColor }}
                >
                  <path d="M12 1C7.03 1 3 5.03 3 10v7c0 1.65 1.35 3 3 3h3v-8H5v-2c0-3.86 3.14-7 7-7s7 3.14 7 7v2h-4v8h4v1h-7v2h6c1.65 0 3-1.35 3-3V10c0-4.97-4.03-9-9-9z" />
                </svg>
              </div>
              <h3
                className={`font-manrope font-semibold text-xl`}
                style={{ color: textPrimary }}
              >
                24/7 Assistance
              </h3>
            </div>
            <p className={`font-manrope text-base`} style={{ color: textSecondary }}>
              Round-the-clock support with our global team, ensuring help is
              always available whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HereFromYou;
