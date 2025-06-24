import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Contexts/ThemeContext';

// Importing icons (you should replace these with your actual icon imports)
// For the purpose of this example, I'll use placeholder SVG icons
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#5700FF">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const BrowserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#5700FF">
    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-1 2v2H6V6h12zM5 18a1 1 0 01-1-1V9h16v8a1 1 0 01-1 1H5z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#5700FF">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#5700FF">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#5700FF">
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#5700FF">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
  </svg>
);

function Footer({ name, email, phoneNum, location }) {
  const {theme, themes} = useContext(ThemeContext);
  const primaryColor = themes[theme].primaryColor
  const secondaryColor = themes[theme].secondaryColor
  const mediumTextColor = themes[theme].mediumTextColor
  const CardColor = themes[theme].CardColor
  const smallTextColor = themes[theme].smallTextColor
  return (
    <footer className="w-full pt-10 pb-8" style={{backgroundColor:primaryColor}}>
      <div className="max-w-[1276px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Logo, Navigation, Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          {/* Logo */}
          <div className="font-manrope font-semibold text-[18px] sm:text-[20px] md:text-[22px]" style={{color:secondaryColor}}>
            {name}
          </div>
          
          {/* Navigation Links */}
          <div className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 font-manrope font-medium text-[16px] text-gray-700">
              {[['Home','/'], ['About Me','/about'], ['Portfolio','/portfolio'], ['Contact Me','/contact']].map((item) => (
                <Link to={item[1]}>
                <li key={item[0]} className={`hover:text-[${secondaryColor}] transition-colors duration-200`} >
                  {item[0]}
                </li>
                </Link>
              ))}
            </ul>            
          </div>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-4">
            {[
              { icon: <TwitterIcon />, name: 'Twitter' },
              { icon: <BrowserIcon />, name: 'Browser' },
              { icon: <LinkedInIcon />, name: 'LinkedIn' }
            ].map((social, index) => (
              <a 
                key={index}
                href="#"
                className={`w-10 h-10 rounded-full flex items-center justify-center bg-[${CardColor}] hover:bg-[${secondaryColor}] transition-all duration-300 group`}
                aria-label={social.name}
              >
                <div className="group-hover:filter group-hover:brightness-0 group-hover:invert">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[742px] mx-auto py-6 border-t border-gray-200 mt-4`}>
          {[
            { icon: <EmailIcon />, text: email },
            { icon: <PhoneIcon />, text: phoneNum },
            { icon: <LocationIcon />, text: location }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center sm:justify-start gap-3"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                {item.icon}
              </div>
              <span className={`font-manrope text-[${mediumTextColor}] text-[16px]`}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className={`font-manrope text-[${smallTextColor}] text-[14px]`}>
            All rights reserved by taha for this website
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;