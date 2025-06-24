import React, { useContext, useRef } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

function MyWork() {
   const { theme, themes } = useContext(ThemeContext);
    const backgroundColor = themes[theme].primaryColor;
    const secondaryColor = themes[theme].secondaryColor;
    const mediumTextColor = themes[theme].mediumTextColor;
    const largeTextcolor = themes[theme].largeTextColor;
    const CardColor = themes[theme].CardColor;
    const borderColor = themes[theme].borderColor;
    const secondaryHoverColor = themes[theme].secondaryHoverColor;
  const projects = [
    {
      title: "Z-Aura Perfume Website",
      mainImage: "src/assets/home/z-frame_website.png",
      thumbnails: [
        "src/assets/home/z-frame_website.png",
        "src/assets/home/z-frame_website.png",
        "src/assets/home/z-frame_website.png",
        "src/assets/home/z-frame_website.png",
      ],
    },
    {
      title: "Luxe Furniture E-Commerce",
      mainImage: "src/assets/home/z-frame_website.png",
      thumbnails: [
        "src/assets/home/z-frame_website.png",
        "src/assets/home/z-frame_website.png",
        "src/assets/home/z-frame_website.png",
        "src/assets/home/z-frame_website.png",
      ],
    },
    {
      title: "Tech Solutions Dashboard",
      mainImage: "src/assets/home/z-frame_website.png",
      thumbnails: [
        "src/assets/home/z-frame_website.png",
        "src/assets/home/z-frame_website.png",
        "src/assets/home/z-frame_website.png",
        "src/assets/home/z-frame_website.png",
      ],
    },
    {
      title: "Travel Booking Platform",
      mainImage: "src/assets/home/z-frame_website.png",
      thumbnails: [
        "src/assets/home/z-frame_website.png",
        "src/assets/home/z-frame_website.png",
        "src/assets/home/z-frame_website.png",
        "src/assets/home/z-frame_website.png",
      ],
    },
    {
      title: "Fitness App Dashboard",
      mainImage: "src/assets/home/z-frame_website.png",
      thumbnails: [
        "src/assets/home/z-frame_website.png",
        "src/assets/home/z-frame_website.png",
        "src/assets/home/z-frame_website.png",
        "src/assets/home/z-frame_website.png",
      ],
    },
  ];

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`w-full py-16 px-4 sm:px-6 lg:px-8 bg-[${backgroundColor}]`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`font-manrope font-semibold text-3xl md:text-4xl lg:text-[38px] text-[${largeTextcolor}] mb-4`}
          >
            My Works
          </h2>
          <p
            className={`font-manrope font-normal text-base md:text-lg text-[${mediumTextColor}] max-w-3xl mx-auto`}
          >
            Here's what some of my satisfied clients have to say about my work
          </p>
        </div>

        {/* Projects Container with Arrow Navigation */}
        <div className="relative mb-16">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
            <button
              onClick={scrollLeft}
              className={`bg-[${backgroundColor}] rounded-full p-3 shadow-lg hover:bg-[${secondaryColor}] hover:text-[${backgroundColor}] transition-all duration-300 transform -translate-x-1/2`}
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
            <button
              onClick={scrollRight}
              className={`bg-[${backgroundColor}] rounded-full p-3 shadow-lg hover:bg-[${secondaryColor}] hover:text-[${backgroundColor}] transition-all duration-300 transform translate-x-1/2`}
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Scrollable Projects Grid (hidden scrollbar) */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-4 scrollbar-hide"
          >
            <div className="flex space-x-6 min-w-max px-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group bg-[${backgroundColor}] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[${borderColor}] w-[300px] sm:w-[350px] flex-shrink-0`}
                >
                  <div className="p-6">
                    <h3
                      className={`font-manrope font-medium text-lg md:text-xl text-[${largeTextcolor}] mb-4 group-hover:text-[${secondaryColor}] transition-colors`}
                    >
                      {project.title}
                    </h3>
                    {/* Main Image */}
                    <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                      <img
                        src={project.mainImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <button
                          className={`w-full py-2 bg-[${backgroundColor}] text-[${secondaryColor}] font-manrope font-medium rounded-md hover:bg-[${secondaryColor}] hover:text-[${backgroundColor}] transition-colors`}
                        >
                          View Project
                        </button>
                      </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="grid grid-cols-4 gap-2">
                      {project.thumbnails.map((thumbnail, thumbIndex) => (
                        <div
                          key={thumbIndex}
                          className={`bg-[${CardColor}] rounded-md aspect-square overflow-hidden`}
                        >
                          <img
                            src={thumbnail}
                            alt={`Thumbnail ${thumbIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button
            className={`font-manrope font-medium text-sm sm:text-base text-white bg-[${secondaryColor}] hover:bg-[${secondaryHoverColor}] transition-colors flex items-center justify-center py-3 px-8 rounded-lg shadow-md hover:shadow-lg`}
          >
            View all Projects <span className="ml-2">→</span>
          </button>
        </div>
      </div>

      {/* Custom CSS for hidden scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default MyWork;
