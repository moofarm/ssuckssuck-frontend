import Plus from "../../assets/plus.svg";
import { useRef } from "react";

export const PlusCard = () => {
  const fileInput = useRef(null);

  const handleButtonClick = e => {
    fileInput.current.click();
  };

  const handleChange = e => {
    console.log(e.target.files[0]);
  };
  return (
    <div
      className="w-60 h-60 flex g-1 bg-white border-gray shadow-md rounded-xl border items-center justify-center "
      onClick={handleButtonClick}
    >
      <input
        hidden
        type="file"
        accept="image/jpg, image/png, image/jpeg, image/gif"
        name="image-input"
        ref={fileInput}
        onChange={handleChange}
      />
      <Plus />
    </div>
  );
};
