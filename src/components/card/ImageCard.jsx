import React, { useState } from "react";
import ExampleJpg from "../../assets/example_photo_jpg.jpg";
import { CardModal } from "./CardModal.jsx";

export const ImageCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="shadow-md">
      <div
        className="w-60 h-60 flex g-1 bg-white border-gray rounded-xl items-center justify-center border"
        onClick={openModal}
      >
        <img src={ExampleJpg} className="w-full h-full rounded-xl" />
      </div>
      {isModalOpen && <CardModal nickname="람람" closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};
