import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button";

const Modal = ({ title, contents, setModal, state, leftLabel, rightLabel, children }) => {
  const disableModal = () => {
    setModal(false);
  };

  const handleButtonRightClick = () => {};

  const handleButtonLeftClick = () => {
    setModal(false);
  };

  const calculateHighlightWidth = title => {
    const baseWidth = 3.125;
    const charWidth = 1.0625;
    return baseWidth + charWidth * title.length;
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      {state && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-999" onClick={disableModal} />
          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#e9f2e9] rounded-lg shadow-lg z-1000"
            style={{ padding: "2rem" }}
          >
            <div className="absolute top-2 right-2 cursor-pointer text-2xl" onClick={disableModal}>
              &times;
            </div>
            <div className="flex flex-col justify-between items-center text-center h-4/5 p-2">
              <div className="flex flex-col items-center mt-8">
                <h1 className="absolute text-2xl font-nps-bold z-10">{title}</h1>
                <div
                  className="absolute bg-[#ff9595] opacity-50 mt-3 z-1"
                  style={{ width: `${calculateHighlightWidth(title)}rem`, height: "1.3rem" }}
                />
              </div>
              <p className="text-xl mt-16 mb-6">{contents}</p>

              <div>{children}</div>

              <div className="flex justify-center gap-2 mt-5">
                <Button
                  primary={false}
                  size="small"
                  label={leftLabel}
                  onClick={handleButtonLeftClick}
                />
                <Button
                  primary={true}
                  size="small"
                  label={rightLabel}
                  onClick={handleButtonRightClick}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.string,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string,
  setModal: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  title: "모달 제목",
  contents: "모달 내용",
  leftLabel: "아니오",
  rightLabel: "네",
};

export default Modal;
