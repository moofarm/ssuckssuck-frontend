import React from "react";

const LandingPageLayout = ({ page }) => {
  return (
    <React.Fragment>
      <h1 className="fixed text-3xl text-dark-green font-nps-bold p-6">쑥쑥쑥</h1>
      {page}
    </React.Fragment>
  );
};

export default LandingPageLayout;
