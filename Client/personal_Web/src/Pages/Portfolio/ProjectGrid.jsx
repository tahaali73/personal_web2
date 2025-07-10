import React, { useContext, useRef } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

// Reusable ProjectGrid component
const ProjectGrid = ({ title, projects }) => {
  const scrollContainerRef = useRef(null);
  const { theme, themes } = useContext(ThemeContext);
  const backgroundPrimary = themes[theme].backgroundPrimary;
  const accentColor = themes[theme].accent;
  const textSecondary = themes[theme].textSecondary;
  const textPrimary = themes[theme].textPrimary;
  const backgroundSecondary = themes[theme].backgroundSecondary; // Card background
  const borderColor = themes[theme].border;
  const hoverAccent = themes[theme].hoverAccent;
  const textButton = themes[theme].textButton;
  const shadowColor = themes[theme].shadow;

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
    <div className="w-full flex flex-col mb-16">
      <h3 className="font-manrope font-semibold text-xl md:text-2xl mb-6" style={{ color: textPrimary }}>
        {title}
      </h3>

      <div className="relative">
        {/* Navigation Arrows */}
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 z-10">
          <button
            onClick={scrollLeft}
            className={`rounded-full p-3 shadow-lg transition-all duration-300 transform -translate-x-1/2`}
            style={{
              backgroundColor: backgroundPrimary, // Arrow button background
              color: textPrimary, // Arrow icon color
              boxShadow: `0 4px 6px -1px ${shadowColor}, 0 2px 4px -1px ${shadowColor}`,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = accentColor; e.currentTarget.style.color = textButton; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = backgroundPrimary; e.currentTarget.style.color = textPrimary; }}
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

        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 z-10">
          <button
            onClick={scrollRight}
            className={`rounded-full p-3 shadow-lg transition-all duration-300 transform translate-x-1/2`}
            style={{
              backgroundColor: backgroundPrimary, // Arrow button background
              color: textPrimary, // Arrow icon color
              boxShadow: `0 4px 6px -1px ${shadowColor}, 0 2px 4px -1px ${shadowColor}`,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = accentColor; e.currentTarget.style.color = textButton; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = backgroundPrimary; e.currentTarget.style.color = textPrimary; }}
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

        {/* Scrollable Projects Grid */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-4 scrollbar-hide"
        >
          <div className="flex space-x-6 min-w-max">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border`}
                style={{
                  backgroundColor: backgroundSecondary, // Project card background
                  borderColor: borderColor,
                  width: '280px', // Fixed width for scrollable items
                  flexShrink: 0,
                  // Adding hover border color
                  '&:hover': {
                    borderColor: accentColor,
                  }
                }}
              >
                <div className="p-5">
                  <h3 className="font-manrope font-medium text-lg mb-3 transition-colors"
                    style={{
                      color: textPrimary, // Project title color
                      '&:hover': {
                        color: accentColor, // Project title hover color
                      }
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Main Image */}
                  <div className="relative overflow-hidden rounded-lg mb-3 aspect-video">
                    <div className={`rounded-xl w-full h-full flex items-center justify-center`}
                      style={{ backgroundColor: backgroundPrimary }} // Image placeholder background
                    >
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <button
                        className={`w-full py-2 font-manrope font-medium rounded-md transition-colors`}
                        style={{
                          backgroundColor: backgroundPrimary, // Button background
                          color: accentColor, // Button text color
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = accentColor; e.currentTarget.style.color = textButton; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = backgroundPrimary; e.currentTarget.style.color = accentColor; }}
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main PortfolioProjects component
function PortfolioProjects() {
  const { theme, themes } = useContext(ThemeContext);
  const backgroundPrimary = themes[theme].backgroundPrimary;
  const textSecondary = themes[theme].textSecondary;
  const textPrimary = themes[theme].textPrimary;

  const projects2023 = [
    {
      title: "Z-Aura Perfume Website",
      image: "src/assets/home/z-frame_website.png",
    },
    {
      title: "Luxe Furniture E-Commerce",
      image: "src/assets/home/z-frame_website.png",
    },
    {
      title: "Tech Solutions Dashboard",
      image: "src/assets/home/z-frame_website.png",
    },
    {
      title: "Travel Booking Platform",
      image: "src/assets/home/z-frame_website.png",
    },
    {
      title: "Fitness App Dashboard",
      image: "src/assets/home/z-frame_website.png",
    },
    {
      title: "Restaurant Booking System",
      image: "src/assets/home/z-frame_website.png",
    },
  ];

  const projects2022 = [
    {
      title: "Healthcare Portal",
      image: "src/assets/home/z-frame_website.png",
    },
    {
      title: "Educational Platform",
      image: "src/assets/home/z-frame_website.png",
    },
    {
      title: "Real Estate Marketplace",
      image: "src/assets/home/z-frame_website.png",
    },
    {
      title: "Music Streaming Service",
      image: "src/assets/home/z-frame_website.png",
    },
    {
      title: "Eco-Friendly Product Store",
      image: "src/assets/home/z-frame_website.png",
    },
  ];

  return (
    <div
      className="w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: backgroundPrimary }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`font-manrope font-bold text-3xl md:text-4xl lg:text-5xl mb-4`}
            style={{ color: textPrimary }}
          >
            My Portfolio Projects
          </h2>
          <p
            className={`font-manrope text-base md:text-lg max-w-3xl mx-auto`}
            style={{ color: textSecondary }}
          >
            Explore my recent work showcasing innovative design solutions across
            various industries
          </p>
        </div>

        {/* Project Grids */}
        <ProjectGrid title="Projects Done in 2023" projects={projects2023} />
        <ProjectGrid title="Projects Done in 2022" projects={projects2022} />
        <ProjectGrid
          title="Projects Done in 2021"
          projects={projects2023.slice(0, 4)} // Using a slice of 2023 projects for 2021
        />
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

export default PortfolioProjects;
