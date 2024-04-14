import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";

export const Modal = ({ width, height, title, contents, setModal, state }) => {
  // 모달을 닫는 함수
  const disableModal = () => {
    setModal(false);
  };

  // Button 1 클릭 시 동작
  const handleButton1Click = () => {
    console.log("Button 1 clicked");
    // 실제 동작을 정의하세요.
  };

  // Button 2 클릭 시 동작
  const handleButton2Click = () => {
    console.log("Button 2 clicked");
    // 실제 동작을 정의하세요.
  };

  // title의 길이에 따라 highlight의 width를 동적으로 설정
  const calculateHighlightWidth = (title) => {
    const baseWidth = 50; // 기본 highlight width (조정 가능)
    const charWidth = 17; // 글자당 추가될 width (조정 가능)
    return baseWidth + charWidth * title.length; // title의 길이와 비례하여 width 계산
  };

  return (
    <>
      {state && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-999"
            onClick={disableModal}
          />
          <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#e9f2e9] rounded-lg shadow-lg z-1000"
            style={{ width, height }}
          >
            <div
              className="absolute top-2 right-2 cursor-pointer text-2xl"
              onClick={disableModal}
            >
              &times;
            </div>
            <div className="flex flex-col justify-between items-center text-center h-4/5 p-4">
              <div className="flex flex-col items-center mt-8">
                <h1 className="absolute text-2xl font-bold z-10">{title}</h1>
                <div
                  className="absolute bg-[#ff9595] opacity-50 mt-3 z-1"
                  style={{ width: `${calculateHighlightWidth(title)}px`, height:"1.3rem" }}
                />
              </div>
              <p className="text-xl mt-16">{contents}</p>
              <div class="flex justify-center gap-2">
                <Button primary={false} size="small" label="아니요" onClick={handleButton2Click} />
                <Button primary={true} size="small" label="네" onClick={handleButton1Click} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

// PropTypes를 사용하여 속성을 검사
Modal.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  contents: PropTypes.string,
  setModal: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
};

// 기본 값을 지정
Modal.defaultProps = {
  width: "400px",
  height: "300px",
  title: "모달 제목",
  contents: "모달 내용",
};
