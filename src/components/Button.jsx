//import React from "react";
import PropTypes from "prop-types";

export const Button = ({ backgroundColor, size, label, onClick, ...props }) => {
  const buttonMode =
    backgroundColor === "green"
      ? "bg-green text-white "
      : backgroundColor === "dark-green"
        ? "bg-dark-green text-white "
        : "bg-white text-gray ";

  const buttonSize =
    size === "small"
      ? "w-[6rem] h-[3rem] text-sm "
      : size === "medium"
        ? "w-[12rem] h-[3.5rem] text-base "
        : "w-[20rem] h-[4rem] text-lg ";

  return (
    <button
      type="button"
      className={
        "outline-none rounded-lg font-nps-bold " +
        buttonMode +
        buttonSize +
        "hover:brightness-90 " +
        "active:shadow-shadow "
      }
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: "green",
  size: "medium",
  label: null,
  onClick: undefined,
};
