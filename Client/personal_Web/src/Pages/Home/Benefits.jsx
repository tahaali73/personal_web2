import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

function Benefits() {
  // Benefits data
  const { theme, themes } = useContext(ThemeContext);
  const backgroundColor = themes[theme].primaryColor;
  const secondaryColor = themes[theme].secondaryColor;
  const mediumTextColor = themes[theme].mediumTextColor;
  const largeTextcolor = themes[theme].largeTextColor;
  const CardColor = themes[theme].CardColor;

  const benefits = [
    {
      title: "Customized Designs Tailored to Your Brand",
      description:
        "I understand the importance of creating a unique and memorable brand identity. By collaborating closely with you, I ensure that your website reflects your brand's personality, values, and objectives. The result is a customized design that sets you apart from the competition and resonates with your target audience.",
    },
    {
      title: "Creative Excellence that Captivates Visitors",
      description:
        "With a keen eye for aesthetics and a passion for creativity, I excel in designing visually stunning and engaging websites. By combining beautiful visuals, captivating typography, and strategic use of color, I create an immersive and impactful user experience. Your website will leave a lasting impression on visitors, enhancing your brand's credibility and professionalism.",
    },
    {
      title: "User-Centric Approach for Optimal Experience",
      description:
        "I prioritize user experience (UX) design, placing your visitors at the center of the design process. By conducting in-depth research and employing user testing techniques, I ensure that your website is intuitive, easy to navigate, and seamlessly guides users towards their goals. The result is a satisfying user journey that increases engagement and conversions.",
    },
    {
      title: "Mobile-Friendly Designs for Broad Accessibility",
      description:
        "In today's mobile-dominated landscape, having a responsive website is crucial. I specialize in creating mobile-friendly designs that adapt flawlessly across different devices and screen sizes. Your website will look and perform beautifully, whether accessed from a desktop, smartphone, or tablet, ensuring that you reach and engage your audience effectively.",
    },
    {
      title: "Expertise in Cutting-Edge Technologies",
      description:
        "With a strong command of HTML, CSS, JavaScript, and other front-end technologies, I possess the technical skills to bring your design concepts to life. From seamless animations to interactive elements, I leverage the latest web technologies to enhance user engagement and create a dynamic user experience.",
    },
  ];

  return (
    <div
      className={`w-full py-16 px-4 sm:px-6 lg:px-8 bg-[${backgroundColor}]`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`font-manrope font-semibold text-3xl md:text-4xl lg:text-[38px] text-[${largeTextcolor}] mb-4`}
          >
            Benefits
          </h2>
          <p
            className={`font-manrope font-normal text-base md:text-lg text-[${mediumTextColor}] max-w-3xl mx-auto`}
          >
            By choosing my web design service, you'll enjoy the following
            benefits
          </p>
        </div>
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First two benefits (larger cards) */}
          {benefits.slice(0, 2).map((benefit, index) => (
            <div
              key={index}
              className={`bg-[${CardColor}] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border hover:border-[${secondaryColor}]/20`}
            >
              <div className="flex items-start mb-6">
                <div
                  className={`w-10 h-10 rounded-full bg-[${secondaryColor}] flex items-center justify-center mr-4`}
                >
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 text-[${secondaryColor}]`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h3
                  className={`font-manrope font-semibold text-xl md:text-2xl text-[${largeTextcolor}]`}
                >
                  {benefit.title}
                </h3>
              </div>
              <p
                className={`font-manrope font-normal text-base md:text-lg text-[${mediumTextColor}]`}
              >
                {benefit.description}
              </p>
            </div>
          ))}
          {/* Last three benefits (smaller cards) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.slice(2, 5).map((benefit, index) => (
              <div
                key={index + 2}
                className={`bg-[${CardColor}] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border hover:border-[${secondaryColor}]/20`}
              >
                <div className="flex items-start mb-6">
                  <div
                    className={`w-10 h-10 rounded-full bg-[${secondaryColor}] flex items-center justify-center mr-4`}
                  >
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 text-[${secondaryColor}]`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3
                    className={`font-manrope font-semibold text-xltext-[${largeTextcolor}]`}
                  >
                    {benefit.title}
                  </h3>
                </div>
                <p
                  className={`font-manrope font-normal text-base text-[${mediumTextColor}]`}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
