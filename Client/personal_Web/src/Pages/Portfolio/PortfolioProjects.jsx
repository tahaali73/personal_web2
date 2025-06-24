import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

function PortfolioProjects() {
  const { theme, themes } = useContext(ThemeContext);
  const backgroundColor = themes[theme].primaryColor;
  const largeTextcolor = themes[theme].largeTextColor;
  const CardColor = themes[theme].CardColor;

  return (
    <div className={`w-[1280px] h-[1749px] bg-[${backgroundColor}]`}>
      <div
        className={`w-[1280px] h-[543px] bg-[${CardColor}] flex flex-col justify-between`}
      >
        <p
          className={`font-manrope font-semibold text-[20px] text-[${largeTextcolor}]`}
        >
          Projects Done in 2023
        </p>

        <div className="w-[1280px] h-[459px] flex justify-between"></div>
      </div>
    </div>
  );
}

export default PortfolioProjects;
