import React, { useContext, useRef } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

// Reusable ProjectGrid component
const ProjectGrid = ({ title, projects }) => {
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
    <div className="w-full flex flex-col mb-16">
      <h3 className="font-manrope font-semibold text-xl md:text-2xl text-[#333333] mb-6">
        {title}
      </h3>

      <div className="relative">
        {/* Navigation Arrows */}
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 z-10">
          <button
            onClick={scrollLeft}
            className="bg-white rounded-full p-3 shadow-lg hover:bg-[#5700FF] hover:text-white transition-all duration-300 transform -translate-x-1/2"
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
            className="bg-white rounded-full p-3 shadow-lg hover:bg-[#5700FF] hover:text-white transition-all duration-300 transform translate-x-1/2"
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
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300  hover:border-[#5700FF]/30 w-[280px] sm:w-[300px] flex-shrink-0"
              >
                <div className="p-5">
                  <h3 className="font-manrope font-medium text-lg text-[#333333] mb-3 group-hover:text-[#5700FF] transition-colors">
                    {project.title}
                  </h3>

                  {/* Main Image */}
                  <div className="relative overflow-hidden rounded-lg mb-3 aspect-video">
                    <div className="bg-gray-200 rounded-xl w-full h-full flex items-center justify-center">
                      <img src={project.image} />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <button className="w-full py-2 bg-white text-[#5700FF] font-manrope font-medium rounded-md hover:bg-[#5700FF] hover:text-white transition-colors">
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
  const backgroundColor = themes[theme].primaryColor;
  const mediumTextColor = themes[theme].mediumTextColor;
  const largeTextcolor = themes[theme].largeTextColor;
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
      className={`w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[${backgroundColor}]`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`font-manrope font-bold text-3xl md:text-4xl lg:text-5xl text-[${largeTextcolor}] mb-4`}
          >
            My Portfolio Projects
          </h2>
          <p
            className={`font-manrope text-base md:text-lg text-[${mediumTextColor}] max-w-3xl mx-auto`}
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
          projects={projects2023.slice(0, 4)}
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
