import React, { useContext, useRef } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

function MyWork() {
  const { theme, themes } = useContext(ThemeContext);
  const backgroundPrimary = themes[theme].backgroundPrimary;
  const accentColor = themes[theme].accent;
  const textSecondary = themes[theme].textSecondary;
  const textPrimary = themes[theme].textPrimary;
  const backgroundSecondary = themes[theme].backgroundSecondary; // Card background
  const borderColor = themes[theme].border;
  const hoverAccent = themes[theme].hoverAccent;
  const shadowColor = themes[theme].shadow;

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
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: backgroundPrimary }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`font-manrope font-semibold text-3xl md:text-4xl lg:text-[38px] mb-4`}
            style={{ color: textPrimary }}
          >
            My Works
          </h2>
          <p
            className={`font-manrope font-normal text-base md:text-lg max-w-3xl mx-auto`}
            style={{ color: textSecondary }}
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
              className={`rounded-full p-3 shadow-lg transition-all duration-300 transform -translate-x-1/2`}
              style={{
                backgroundColor: backgroundPrimary,
                color: textPrimary, // Arrow color
                boxShadow: `0 4px 6px -1px ${shadowColor}, 0 2px 4px -1px ${shadowColor}`,
                '&:hover': {
                  backgroundColor: accentColor,
                  color: themes[theme].textButton, // Text color on accent background
                }
              }}
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
              className={`rounded-full p-3 shadow-lg transition-all duration-300 transform translate-x-1/2`}
              style={{
                backgroundColor: backgroundPrimary,
                color: textPrimary, // Arrow color
                boxShadow: `0 4px 6px -1px ${shadowColor}, 0 2px 4px -1px ${shadowColor}`,
                '&:hover': {
                  backgroundColor: accentColor,
                  color: themes[theme].textButton, // Text color on accent background
                }
              }}
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
                  className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border`}
                  style={{
                    backgroundColor: backgroundSecondary,
                    borderColor: borderColor,
                    width: '300px', // Fixed width for scrollable items
                    flexShrink: 0,
                  }}
                >
                  <div className="p-6">
                    <h3
                      className={`font-manrope font-medium text-lg md:text-xl mb-4 transition-colors`}
                      style={{
                        color: textPrimary,
                        '&:hover': {
                          color: accentColor,
                        }
                      }}
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
                          className={`w-full py-2 font-manrope font-medium rounded-md transition-colors`}
                          style={{
                            backgroundColor: backgroundPrimary,
                            color: accentColor,
                            '&:hover': {
                              backgroundColor: accentColor,
                              color: themes[theme].textButton,
                            }
                          }}
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
                          className={`rounded-md aspect-square overflow-hidden`}
                          style={{ backgroundColor: backgroundSecondary }}
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
            className={`font-manrope font-medium text-sm sm:text-base text-white transition-colors flex items-center justify-center py-3 px-8 rounded-lg shadow-md hover:shadow-lg`}
            style={{
              backgroundColor: accentColor,
              color: themes[theme].textButton,
              '&:hover': {
                backgroundColor: hoverAccent,
              }
            }}
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
