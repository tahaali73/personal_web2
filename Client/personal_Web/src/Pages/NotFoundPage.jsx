import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Contexts/ThemeContext";

function NotFoundPage() {
  const { theme, themes } = useContext(ThemeContext);
  const secondaryColor = themes[theme].secondaryColor;
  const largeTextcolor = themes[theme].largeTextColor;
  const secondaryHoverColor = themes[theme].secondaryHoverColor;
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className={`text-3xl font-bold mb-4 text-[${largeTextcolor}]`}>
        404 Not Found
      </h1>
      <Link to="/">
        <button
          className="text-white font-manrope font-medium text-md py-4 px-6 rounded-md flex justify-center items-center gap-2" style={{ backgroundColor: secondaryColor, '--secondary-hover-color': secondaryHoverColor }}
        >
          Go Back to Home
        </button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
