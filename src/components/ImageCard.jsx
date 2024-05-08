import React, { useState } from "react";
import Example from "../assets/example_photo.svg";
import { CardModal } from "../components/CardModal.jsx";

export const ImageCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div
        className="w-52 h-52 flex g-1 bg-white border-gray rounded-lg shadow-lg border items-center justify-center"
        onClick={openModal}
      >
        <Example />
      </div>
      {isModalOpen && <CardModal nickname="람람" closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};
