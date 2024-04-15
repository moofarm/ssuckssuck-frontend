//import React from "react";
import PropTypes from "prop-types";

export const Header = ({ user }) => {
  let firstMenu = window.location.pathname === "/" ? "나의미션방보기" : "모든미션방보기";
  const menus = [firstMenu, "방만들기"];
  return (
    <header className="fixed top-0 left-0 w-full h-[8%] flex justify-between items-center p-8 bg-white">
      <div className="flex gap-6 items-baseline">
        <h1 className="text-2xl text-dark-green font-nps-bold">쑥쑥쑥</h1>
        {menus.map((menu, idx) => {
          return (
            <nav key={idx} className="text-dark-green font-nps-bold">
              {menu}
            </nav>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined cursor-pointer text-2xl">search</span>
        <div className="flex">
          <h3>USER INFO</h3>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

Header.defaultProps = {
  user: {
    name: "무쑥이",
    image: "../assets/baby_ssukssuk.svg",
  },
};
