import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../Contexts/ThemeContext';

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const milestones = [
    {
      year: "2015",
      title: "Started My Journey",
      description: "Began my career in web design after completing my degree in Graphic Design",
      icon: "🎓",
      color: "#FF6B6B" // Specific color for this milestone
    },
    {
      year: "2016",
      title: "First Professional Project",
      description: "Designed and developed my first commercial website for a local business",
      icon: "💼",
      color: "#4ECDC4" // Specific color for this milestone
    },
    {
      year: "2017",
      title: "Specialized in UX Design",
      description: "Completed UX certification and focused on user-centered design approach",
      icon: "👥",
      color: "#FFD166" // Specific color for this milestone
    },
    {
      year: "2018",
      title: "Started Freelancing",
      description: "Began freelancing full-time and worked with clients from various industries",
      icon: "🚀",
      color: "#6A0572" // Specific color for this milestone
    },
    {
      year: "2019",
      title: "Award-Winning Design",
      description: "Received Webby Award for innovative e-commerce design solution",
      icon: "🏆",
      color: "#1A936F" // Specific color for this milestone
    },
    {
      year: "2020",
      title: "Founded Design Studio",
      description: "Established my own design studio with a team of talented designers",
      icon: "🏢",
      color: "#3A86FF" // Specific color for this milestone
    },
    {
      year: "2022",
      title: "Industry Speaker",
      description: "Invited as keynote speaker at DesignCon 2022 conference",
      icon: "🎤",
      color: "#FF9F1C" // Specific color for this milestone
    },
    {
      year: "2023",
      title: "Published Design System",
      description: "Created and open-sourced a comprehensive design system for web applications",
      icon: "📘",
      color: "#7209B7" // Specific color for this milestone
    }
  ];

  const { theme, themes } = useContext(ThemeContext);
  const backgroundPrimary = themes[theme].backgroundPrimary;
  const accentColor = themes[theme].accent;
  const textSecondary = themes[theme].textSecondary;
  const textPrimary = themes[theme].textPrimary;
  const backgroundSecondary = themes[theme].backgroundSecondary; // Card background
  const textButton = themes[theme].textButton; // For text on accent background
  const shadowColor = themes[theme].shadow; // For shadows

  return (
    <div className="w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: backgroundPrimary }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className={`font-manrope font-bold text-3xl md:text-4xl lg:text-5xl mb-4`}
            style={{ color: textPrimary }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Milestones of My Career
          </motion.h2>
          <motion.p
            className={`font-manrope text-base md:text-lg max-w-2xl mx-auto`}
            style={{ color: textSecondary }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            A journey through the pivotal moments that shaped my design career and expertise
          </motion.p>
        </div>
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden md:block`}
            style={{ backgroundColor: accentColor }}
          ></div>
          {/* Mobile horizontal line */}
          <div
            className={`absolute top-1/2 w-full h-1 md:hidden`}
            style={{ backgroundColor: accentColor }}
          ></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-24">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`relative ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Timeline item */}
                <div
                  className={`relative rounded-2xl shadow-lg p-6 transition-all duration-300 cursor-pointer ${activeIndex === index ? 'ring-4 ring-opacity-50 transform scale-105' : 'hover:shadow-xl'}`}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  style={{
                    backgroundColor: backgroundSecondary,
                    borderLeft: `4px solid ${milestone.color}`, // Use milestone's specific color for border
                    boxShadow: `0 4px 6px -1px ${shadowColor}, 0 2px 4px -1px ${shadowColor}`,
                    // Add ring color for active state
                    ...(activeIndex === index && {
                      boxShadow: `0 0 0 4px ${milestone.color}40, 0 4px 6px -1px ${shadowColor}, 0 2px 4px -1px ${shadowColor}` // Adding a subtle ring effect
                    })
                  }}
                >
                  {/* Year */}
                  <div
                    className={`absolute -top-3 left-6 py-1 px-4 rounded-full text-sm font-bold`}
                    style={{ backgroundColor: milestone.color, color: textButton }} // Use milestone's specific color for background, and textButton for text
                  >
                    {milestone.year}
                  </div>
                  {/* Icon */}
                  <div
                    className="absolute -top-4 md:top-1/2 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg"
                    style={{
                      backgroundColor: milestone.color,
                      left: index % 2 === 0 ? 'auto' : '-56px',
                      right: index % 2 === 0 ? '-56px' : 'auto',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 10, // Ensure icon is above the line
                      boxShadow: `0 4px 6px -1px ${shadowColor}, 0 2px 4px -1px ${shadowColor}`
                    }}
                  >
                    {milestone.icon}
                  </div>
                  {/* Content */}
                  <h3 className={`font-manrope font-bold text-xl mb-2`} style={{ color: textPrimary }}>
                    {milestone.title}
                  </h3>
                  <p className={`font-manrope text-base`} style={{ color: textSecondary }}>
                    {milestone.description}
                  </p>
                  {/* Expandable details */}
                  {activeIndex === index && (
                    <motion.div
                      className="mt-4 pt-4 border-t"
                      style={{ borderColor: themes[theme].border }} // Use theme border color
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className={``} style={{ color: textSecondary }}>
                        This achievement marked a significant turning point in my career, allowing me to expand my skills and take on more challenging projects.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {['React', 'Figma', 'UI/UX', 'Webflow'].map((tag, i) => (
                          <span
                            key={i}
                            className={`text-xs font-medium px-2.5 py-0.5 rounded`}
                            style={{
                              backgroundColor: backgroundSecondary, // Use card background for tags
                              color: accentColor, // Use accent color for tag text
                              border: `1px solid ${accentColor}` // Add a subtle border matching accent
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
