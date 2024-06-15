import React from "react";

const LandingPageLayout = ({ page }) => {
  return (
    <React.Fragment>
      <div className="fixed left-[45%] h-[8vh] w-[10%] flex items-center justify-center">
        <h1 className="text-3xl text-darkgreen font-nps-bold">쑥쑥쑥</h1>
      </div>
      {page}
    </React.Fragment>
  );
};

export default LandingPageLayout;
