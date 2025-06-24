import React from "react";
import CreativePortfolio from "./CreativePortfolio";
import PortfolioProjects from "./ProjectGrid";

function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-between">
      <CreativePortfolio />
      <PortfolioProjects />
    </div>
  );
}

export default Portfolio;
