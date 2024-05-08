import React, { useState, useEffect } from "react";
import ExampleJpg from "../assets/example_photo_jpg.jpg";
import { ProfileImage } from "../components/ProfileImage";
import { Button } from "./Button.jsx";

export const CardModal = ({ nickname, closeModal }) => {
  // closeModal 함수를 props로 받음
  const [modalSize, setModalSize] = useState("70vh"); // 초기값으로 화면의 높이의 70%를 설정

  useEffect(() => {
    const calculateModalSize = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const modalDimension = Math.min(windowWidth, windowHeight) / 1.5;
      setModalSize(`${modalDimension}px`);
    };

    calculateModalSize(); // 초기에 한 번 실행하여 모달의 크기를 설정

    window.addEventListener("resize", calculateModalSize); // 화면 크기가 변경될 때마다 모달의 크기를 다시 계산하여 설정

    return () => {
      window.removeEventListener("resize", calculateModalSize); // cleanup 함수 등록
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center fixed top-0 left-0">
      <div className="modal relative" style={{ width: modalSize, height: modalSize }}>
        <img src={ExampleJpg} className="w-full h-full rounded-xl" alt="Example Photo" />
        <div className="absolute top-0 left-0 w-full h-16 bg-black bg-opacity-50 rounded-t-xl flex items-center">
          <div className="w-8 h-8 flex justify-center items-center m-4">
            <ProfileImage level={2} />
          </div>
          <p className="text-white">{nickname}</p>
          <button className="ml-auto mr-5 text-white" onClick={closeModal}>
            X
          </button>
        </div>
        {/*TODO: //현재 로그인된 계정과 nickname이 일치하면 수정하기 버튼, 일치하지 않으면 신고하기 */}
        <div className="absolute bottom-3 right-3 flex items-center">
          <Button
            primary={false}
            size="small"
            label="🚨신고하기"
            onClick={() => {
              console.log("Report Button clicked!");
              {
                /*TODO: 버튼 클릭시 모달창으로 연결해야 함 */
              }
            }}
          />
        </div>
        <div className="absolute bottom-3 right-3 flex items-center">
          <Button
            primary={false}
            size="small"
            label="✏️수정하기"
            onClick={() => {
              console.log("Modify Button clicked!");
              {
                /*TODO: 버튼 클릭시 모달창 연결*/
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
