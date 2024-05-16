import PropTypes from "prop-types";

export const Button = ({ backgroundColor, textColor, size, label, onClick, ...props }) => {
  const buttonColor = "bg-" + backgroundColor + " text-" + textColor + " ";
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
        buttonSize +
        buttonColor +
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
  textColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: "green",
  textColor: "white",
  size: "medium",
  label: null,
  onClick: undefined,
};
