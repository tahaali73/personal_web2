import React from "react";
import CreativePortfolio from "./CreativePortfolio";
import PortfolioProjects from "./ProjectGrid"; // Renamed from PortfolioProjects to ProjectGrid as per your file structure

function Portfolio() {
  return (
    // The main container for the Portfolio page.
    // Individual sections will handle their own background colors based on the theme.
    <div className="flex flex-col items-center justify-between">
      <CreativePortfolio />
      <PortfolioProjects />
    </div>
  );
}

export default Portfolio;
