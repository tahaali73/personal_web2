import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

function Heroabout() {
  const { theme, themes } = useContext(ThemeContext);
  const backgroundColor = themes[theme].primaryColor;
  const secondaryColor = themes[theme].secondaryColor;
  const mediumTextColor = themes[theme].mediumTextColor;
  const largeTextColor = themes[theme].largeTextColor;
  const CardColor = themes[theme].CardColor;
  return (
    <div
      className={`w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center bg-[${backgroundColor}]`}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full max-w-[500px] mx-auto rounded-[20px] overflow-hidden shadow-2xl">
            <div
              className={`bg-[${CardColor}] w-full h-full flex justify-center items-center`}
            >
              <img src="src\assets\Image.png" />
            </div>
          </div>
        </div>
        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 z-10">
          {/* Welcome Badge */}
          <div
            className={`w-full max-w-xs bg-[${CardColor}] text-[${secondaryColor}] text-base sm:text-lg md:text-xl font-manrope font-medium py-3 px-6 rounded-full text-center shadow-sm`}
          >
            Welcome to the world of captivating web design!
          </div>
          {/* Title and Description */}
          <div className="flex flex-col gap-6">
            <h1
              className={`font-manrope font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight text-[${themes[theme].largeTextcolor}]`}
            >
              I'm Jeffery Cannon
            </h1>
            <p
              className={`font-manrope text-base md:text-lg text-[${mediumTextColor}] leading-relaxed`}
            >
              A skilled web designer with a passion for creating visually
              stunning and user-friendly websites. With a keen eye for detail
              and a commitment to excellence, I specialize in crafting online
              experiences that leave a lasting impression. From concept to
              launch, I collaborate closely with clients to bring their visions
              to life and ensure their digital presence stands out from the
              crowd. With my expertise and dedication, I am here to help you
              elevate your online presence and make a powerful impact in the
              digital landscape.
            </p>
          </div>
          {/* Stats Section */}
          <div
            className={`w-full border-t-2 border-b-2 border-[${secondaryColor}] py-6`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0">
              {[
                { value: "55+", label: "Completed Projects" },
                { value: "20+", label: "Happy Customers" },
                { value: "08+", label: "Years of Experience" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-2"
                >
                  <p
                    className={`font-manrope text-3xl sm:text-4xl font-bold text-[${largeTextColor}]`}
                  >
                    {stat.value.split("+")[0]}{" "}
                    <span className={`text-[${secondaryColor}]`}>+</span>
                  </p>
                  <p
                    className={`font-manrope text-base sm:text-lg text-[${mediumTextColor}] font-medium mt-1 text-center`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroabout;
