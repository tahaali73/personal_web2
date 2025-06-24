import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FlashMessage from "../../Components/Flash";
import { ThemeContext } from "../../Contexts/ThemeContext";

function ContactForm() {
  const [sent, setSent] = useState(null);
  const [notSent, setNotSent] = useState(null);

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => {
        setSent(null);
      }, 3000); // Reset state after 3 seconds
      return () => clearTimeout(timer);
    }
    if (notSent) {
      const timer = setTimeout(() => {
        setNotSent(null);
      }, 3000); // Reset state after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [sent, notSent]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => {
        if (typeof value === "boolean") {
          return value;
        } else {
          return value.trim() !== "";
        }
      })
    );

    fetch("http://127.0.0.1:5000/api/contact/sendmessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filteredData),
    })
      .then((response) => {
        if (response.ok) {
          setSent(true);
        } else {
          setNotSent(true);
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.error(error);
        setNotSent(true);
      });
    reset();
  };

  // Watch contact method selections
  const watchWhatsapp = watch("whatsappContact");
  const watchEmail = watch("emailContact");

  const contactDetails = [
    {
      title: "You can Email Me Here",
      value: "diytech960@gmail.com",
      href: "mailto:diytech960@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
    {
      title: "Call Me At This Number",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
        </svg>
      ),
    },
    {
      title: "Visit Me At This Location",
      value: "123 Design Street, Creative City",
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com",
      color: "#1DA1F2",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="#1DA1F2"
          viewBox="0 0 24 24"
        >
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      color: "#0077B5",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="#0077B5"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "https://dribbble.com",
      color: "#EA4C89",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="#EA4C89"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm6.32 17.457c-1.52-3.31-3.29-5.72-4.24-6.71.4-1.06.7-2.18.86-3.34 1.95 1.6 3.21 4.06 3.38 6.74zm-5.43-7.94c-.2.93-.49 1.83-.85 2.7a31.97 31.97 0 00-5.65-.46c.36-2.15 1.52-4.06 3.24-5.33.97 1.01 2.2 2.4 3.26 3.09zm-4.45-.92c-1.52 1.18-2.56 2.88-2.87 4.8-1.43-.26-2.8-.26-3.83-.2a9.78 9.78 0 016.7-7.68c.41 1 .69 1.98 1.02 3.08zm-6.25 5.68c1.24-.1 2.62-.03 4.05.26.14 1.42.49 2.77.99 4.03a9.85 9.85 0 01-5.04-4.29zM9.59 20.2a23.2 23.2 0 01-1.18-4.3 29.2 29.2 0 015.2.43c.83 1.12 1.7 2.56 2.4 4.2a9.78 9.78 0 01-6.42-.33zm8.2-1.52a19.9 19.9 0 00-2.15-3.78c1.1-.1 2.19 0 3.2.3a9.84 9.84 0 01-1.05 3.48z" />
        </svg>
      ),
    },
  ];

  const { theme, themes } = useContext(ThemeContext);
  const backgroundColor = themes[theme].primaryColor;
  const secondaryColor = themes[theme].secondaryColor;
  const mediumTextColor = themes[theme].mediumTextColor;
  const largeTextColor = themes[theme].largeTextColor;
  const CardColor = themes[theme].CardColor;
  const borderColor = themes[theme].borderColor;
  const secondaryHoverColor = themes[theme].secondaryHoverColor;

  return (
    <div
      className={`w-full py-12 px-4 sm:px-6 lg:px-8 bg-[${backgroundColor}]`}
    >
      <div className="max-w-6xl mx-auto">
        <h3 className="font-manrope font-bold text-3xl text-center text-[#333333] mb-8">
          Get in Touch
        </h3>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info - same as before */}
          <div className="w-full lg:w-2/5 space-y-6">
            {contactDetails.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex border-gray-100 justify-between items-center p-6 bg-[${CardColor}] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[${borderColor}] group`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-[${CardColor}] flex items-center justify-center mr-4 group-hover:bg-[${secondaryColor}] transition-colors`}
                  >
                    <div
                      className={`text-[${secondaryColor}] group-hover:text-white transition-colors`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <p
                      className={`text-sm text-[${mediumTextColor}] font-normal`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`text-base text-[${largeTextColor}] font-medium`}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
                <div
                  className={`w-10 h-10 rounded-full bg-[${CardColor}] flex items-center justify-center group-hover:bg-[${secondaryColor}] group-hover:text-white transition-colors`}
                >
                  →
                </div>
              </a>
            ))}

            {/* Social Icons */}
            <div className="mt-4">
              <p
                className={`text-lg font-medium text-[${largeTextColor}] mb-4`}
              >
                My Social Profiles
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="hover:scale-110 transform transition-transform"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`w-full lg:w-3/5 bg-[${backgroundColor}] rounded-2xl shadow-xl p-6 md:p-8`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className={`font-manrope font-medium text-[${mediumTextColor}] block mb-2`}
                >
                  First Name *
                </label>
                <input
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "First name must be at least 2 characters",
                    },
                  })}
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className={`w-full p-3 border border-[${borderColor}] rounded-lg focus:ring-2 focus:ring-[${secondaryColor}] focus:border-transparent transition-all`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Last Name (Optional) */}
              <div>
                <label
                  htmlFor="lastName"
                  className={`font-manrope font-medium text-[${mediumTextColor}] block mb-2`}
                >
                  Last Name
                </label>
                <input
                  {...register("lastName")}
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  className={`w-full p-3 border border-[${borderColor}] rounded-lg focus:ring-2 focus:ring-[${secondaryColor}] focus:border-transparent transition-all`}
                />
              </div>

              {/* Contact Method Selection */}
              <div className="md:col-span-2">
                <p
                  className={`font-manrope font-medium text-[${largeTextColor}] text-lg mb-3`}
                >
                  How would you like us to reply? *
                </p>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="whatsapp-contact"
                      {...register("whatsappContact")}
                      className={`w-5 h-5 text-[${secondaryColor}] rounded focus:ring-[${secondaryColor}]`}
                    />
                    <label
                      htmlFor="whatsapp-contact"
                      className={`ml-2 font-manrope font-medium text-[${mediumTextColor}]`}
                    >
                      WhatsApp
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="email-contact"
                      {...register("emailContact", {
                        validate: (value) =>
                          value ||
                          watchWhatsapp ||
                          "Please select at least one contact method",
                      })}
                      className={`w-5 h-5 text-[${secondaryColor}] rounded focus:ring-[${secondaryColor}]`}
                    />
                    <label
                      htmlFor="email-contact"
                      className={`ml-2 font-manrope font-medium text-[${mediumTextColor}]`}
                    >
                      Email
                    </label>
                  </div>
                </div>
                {errors.emailContact && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.emailContact.message}
                  </p>
                )}
              </div>

              {/* WhatsApp Number (Conditional) */}
              {watchWhatsapp && (
                <div className="md:col-span-2">
                  <label
                    htmlFor="whatsappNumber"
                    className="font-manrope font-medium text-[#4D4D4D] block mb-2"
                  >
                    WhatsApp Number *
                  </label>
                  <input
                    {...register("whatsappNumber", {
                      required: watchWhatsapp && "WhatsApp number is required",
                      pattern: {
                        value: /^\+?[0-9\s\-()]{7,20}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    id="whatsappNumber"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5700FF] focus:border-transparent transition-all"
                  />
                  {errors.whatsappNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.whatsappNumber.message}
                    </p>
                  )}
                </div>
              )}

              {/* Email Address (Conditional) */}
              {watchEmail && (
                <div className="md:col-span-2">
                  <label
                    htmlFor="email"
                    className={`font-manrope font-medium text-[${mediumTextColor}] block mb-2`}
                  >
                    Email Address *
                  </label>
                  <input
                    {...register("email", {
                      required: watchEmail && "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full p-3 border border-[${borderColor}] rounded-lg focus:ring-2 focus:ring-[${secondaryColor}] focus:border-transparent transition-all`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              )}

              {/* Contact Reason */}
              <div className="md:col-span-2">
                <p
                  className={`font-manrope font-medium text-[${largeTextColor}] text-lg mb-3`}
                >
                  Why are you contacting us?
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Web Design",
                    "Collaboration",
                    "Mobile App Design",
                    "Others",
                  ].map((option, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        {...register(`option-${index}`)}
                        type="checkbox"
                        id={`option-${index}`}
                        value={option}
                        className={`w-5 h-5 text-[${secondaryColor}] rounded focus:ring-[${secondaryColor}]`}
                      />
                      <label
                        htmlFor={`option-${index}`}
                        className={`ml-2 font-manrope font-medium text-[${mediumTextColor}]`}
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className={`font-manrope font-medium text-[${mediumTextColor}] block mb-2`}
                >
                  Your Message *
                </label>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  id="message"
                  rows="5"
                  placeholder="How can we help you?"
                  className={`w-full p-3 border border-[${borderColor}] rounded-lg focus:ring-2 focus:ring-[${secondaryColor}] focus:border-transparent transition-all`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  className={`font-manrope font-medium text-white bg-[${secondaryColor}] hover:bg-[${secondaryHoverColor}] transition-colors flex items-center justify-center py-3 px-12 rounded-lg shadow-md hover:shadow-lg w-full max-w-xs`}
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        {sent && (
          <FlashMessage
            message="Message sent successfully!"
            type="success"
            onClose={() => setSent(null)}
          />
        )}

        {notSent && (
          <FlashMessage
            message="Failed to send message."
            type="error"
            onClose={() => setNotSent(null)}
          />
        )}
      </div>
    </div>
  );
}

export default ContactForm;
