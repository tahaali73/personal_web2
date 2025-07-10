import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

function Creative() {
  const { theme, themes } = useContext(ThemeContext);
  const backgroundPrimary = themes[theme].backgroundPrimary;
  const accentColor = themes[theme].accent;
  const textSecondary = themes[theme].textSecondary;
  const textPrimary = themes[theme].textPrimary;
  const backgroundSecondary = themes[theme].backgroundSecondary; // Card background
  const borderColor = themes[theme].border;
  const cardHoverBorder = themes[theme].cardHoverBorder;
  const iconDefault = themes[theme].iconDefault;

  // Skill data with icon placeholders
  const skills = [
    {
      title: "Web Design Principles",
      description:
        "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          viewBox="0 0 24 24"
          fill={iconDefault} // Dynamic fill color
        >
          <path d="M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 3h2v2h-2V6zm0 3h2v2h-2V9zM8 6h2v2H8V6zm0 3h2v2H8V9zm-1 2H5V9h2v2zm0-3H5V6h2v2zm9 7H8v-2h8v2zm0-4h-2V9h2v2zm0-3h-2V6h2v2zm3 3h-2V9h2v2zm0-3h-2V6h2v2zm-7 15l4-4H8l4 4z" />
        </svg>
      ),
    },
    {
      title: "User Interface - UI Design",
      description:
        "Ability to create visually appealing and intuitive user interfaces that enhance user experience and engagement.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          viewBox="0 0 24 24"
          fill={iconDefault} // Dynamic fill color
        >
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9v-2h2v2zm0-4H9V9h2v2zm4 4h-2v-2h2v2zm0-4h-2V9h2v2zm4 4h-2v-2h2v2zm0-4h-2V9h2v2z" />
        </svg>
      ),
    },
    {
      title: "User Experience - UX Design",
      description:
        "Understanding of user behavior and psychology to design seamless user experiences that meet user needs and goals.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          viewBox="0 0 24 24"
          fill={iconDefault} // Dynamic fill color
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
    },
    {
      title: "Responsive Web Design",
      description:
        "Knowledge of designing websites that adapt and function seamlessly across various devices and screen sizes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          viewBox="0 0 24 24"
          fill={iconDefault} // Dynamic fill color
        >
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
        </svg>
      ),
    },
    {
      title: "Wireframing and Prototyping",
      description:
        "Ability to create wireframes and interactive prototypes to visualize and test website layouts and functionality.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          viewBox="0 0 24 24"
          fill={iconDefault} // Dynamic fill color
        >
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zM6 12h8v2H6zm0-3h12v2H6zm0-3h12v2H6z" />
        </svg>
      ),
    },
    {
      title: "Mobile-Friendly Optimization",
      description:
        "Expertise in optimizing websites for mobile devices, ensuring fast loading times and excellent user experience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="54"
          viewBox="0 0 24 24"
          fill={iconDefault} // Dynamic fill color
        >
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
          <path d="M14 8h-4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="w-full py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: backgroundPrimary }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            className={`font-manrope font-semibold text-3xl sm:text-4xl md:text-[38px] mb-4`}
            style={{ color: textPrimary }}
          >
            Creative Skills
          </h2>
          <p
            className={`font-manrope font-normal text-base sm:text-lg md:text-xl max-w-3xl mx-auto`}
            style={{ color: textSecondary }}
          >
            As a web designer, I possess a diverse set of skills and expertise
            to bring your web design visions to life
          </p>
        </div>
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border`}
              style={{
                backgroundColor: backgroundSecondary,
                borderColor: borderColor,
                // Apply hover border dynamically using inline style with group-hover
                '--tw-border-opacity': '1',
                '&:hover': {
                  borderColor: cardHoverBorder,
                }
              }}
            >
              <div className="flex flex-col items-center">
                {/* Icon with animated background */}
                <div
                  className={`mb-6 p-4 rounded-full transition-colors duration-300`}
                  style={{
                    backgroundColor: backgroundSecondary,
                    // Apply group-hover background directly
                    '--tw-bg-opacity': '1',
                    '&:hover': {
                      backgroundColor: accentColor,
                    }
                  }}
                >
                  <div
                    className="transition-all duration-300"
                    // Apply group-hover filter directly to invert icon color
                    style={{
                      '--tw-filter': 'none',
                      '&:hover': {
                        filter: 'brightness(0) invert(1)', // Invert to white/light for dark icons on accent background
                      }
                    }}
                  >
                    {skill.icon}
                  </div>
                </div>
                {/* Content */}
                <div className="text-center">
                  <h3
                    className={`font-manrope font-semibold text-xl md:text-[20px] mb-3 transition-colors`}
                    style={{
                      color: textPrimary,
                      // Apply group-hover text color directly
                      '&:hover': {
                        color: accentColor,
                      }
                    }}
                  >
                    {skill.title}
                  </h3>
                  <p
                    className={`font-manrope font-normal text-sm md:text-base`}
                    style={{ color: textSecondary }}
                  >
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Creative;
