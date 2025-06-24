import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

function CreativePortfolio() {
  const { theme, themes } = useContext(ThemeContext);
  const backgroundColor = themes[theme].primaryColor;
  const secondaryColor = themes[theme].secondaryColor;
  const mediumTextColor = themes[theme].mediumTextColor;
  const largeTextcolor = themes[theme].largeTextColor;
  const CardColor = themes[theme].CardColor;

  return (
    <div
      className={`w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[${backgroundColor}]`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Shine Icon */}
        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-6 md:mb-8 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`w-full h-full text-[${secondaryColor}]`}
          >
            <path
              fill="currentColor"
              d="M12,2L9.1,7H3.3L7,12L3.3,17H9.1L12,22L14.9,17H20.7L17,12L20.7,7H14.9L12,2Z"
            />
          </svg>
        </div>

        {/* Heading Section */}
        <div className="text-center max-w-4xl mb-8 md:mb-12">
          <h2
            className={`font-manrope font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-[${largeTextcolor}] mb-3 md:mb-4`}
          >
            My Creative Portfolios
          </h2>
          <p
            className={`font-manrope text-base md:text-lg text-[${mediumTextColor}]`}
          >
            Here's what some of my satisfied clients have to say about my work
          </p>
        </div>

        {/* Stats Section */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          {/* Completed Projects */}
          <div
            className={`bg-[${CardColor}] rounded-xl p-5 shadow-md hover:shadow-lg transition-all flex flex-col items-center`}
          >
            <div
              className={`w-12 h-12 mb-3 flex items-center justify-center bg-[${CardColor}] rounded-full`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-[${secondaryColor}]`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
              </svg>
            </div>
            <p
              className={`font-manrope font-semibold text-2xl md:text-3xl text-[${largeTextcolor}]`}
            >
              55<span className={`text-[${secondaryColor}]`}>+</span>
            </p>
            <p
              className={`font-manrope text-sm md:text-base text-[${mediumTextColor}] mt-1`}
            >
              Completed Projects
            </p>
          </div>

          {/* Happy Customers */}
          <div
            className={`bg-[${CardColor}] rounded-xl p-5 shadow-md hover:shadow-lg transition-all flex flex-col items-center`}
          >
            <div
              className={`w-12 h-12 mb-3 flex items-center justify-center bg-[${CardColor}] rounded-full`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-[${secondaryColor}]`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23M15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11Z" />
              </svg>
            </div>
            <p
              className={`font-manrope font-semibold text-2xl md:text-3xl text-[${largeTextcolor}]`}
            >
              20<span className={`text-[${secondaryColor}]`}>+</span>
            </p>
            <p
              className={`font-manrope text-sm md:text-base text-[${mediumTextColor}] mt-1`}
            >
              Happy Customers
            </p>
          </div>

          {/* Years of Experience */}
          <div
            className={`bg-[${CardColor}] rounded-xl p-5 shadow-md hover:shadow-lg transition-all flex flex-col items-center`}
          >
            <div
              className={`w-12 h-12 mb-3 flex items-center justify-center bg-[${CardColor}] rounded-full`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-[${secondaryColor}]`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
              </svg>
            </div>
            <p
              className={`font-manrope font-semibold text-2xl md:text-3xl text-[${largeTextcolor}]`}
            >
              08<span className={`text-[${secondaryColor}]`}>+</span>
            </p>
            <p
              className={`font-manrope text-sm md:text-base text-[${mediumTextColor}] mt-1`}
            >
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativePortfolio;
