import { useState } from "react";
import { categories } from "../../utils/utils";
import Modal from "./Modal";

const MakeRoomContent = () => {
  const [majorCategory, setMajorCategory] = useState("");
  const [minorCategory, setMinorCategory] = useState("");
  // TODO: 방만들기 응답이 오면 상태값 true로 바꾸기
  const [isMakeRoom, setIsMakeRoom] = useState(false);

  const handleMajorCategoryChange = e => {
    setMajorCategory(e.target.value);
    setMinorCategory("");
  };

  const handleMinorCategoryChange = e => {
    setMinorCategory(e.target.value);
  };

  return (
    <div className="w-[120%] px-10 text-left">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">제목</h2>
        <input
          type="text"
          className="w-full p-2 border-[0.5px] rounded border-gray outline-none"
          maxLength={25}
          placeholder="제목을 입력하세요"
        />
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">카테고리</h2>
        <div className="flex">
          <select
            name="major-category"
            id="major-category"
            value={majorCategory}
            onChange={handleMajorCategoryChange}
            className="w-1/2 border-[0.5px] rounded p-2 mr-2 border-gray outline-none"
          >
            <option value="" disabled>
              대분류
            </option>
            {Object.keys(categories).map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            name="minor-category"
            id="minor-category"
            value={minorCategory}
            onChange={handleMinorCategoryChange}
            disabled={!majorCategory}
            className="w-1/2 border-[0.5px] rounded p-2 border-gray outline-none"
          >
            <option value="" disabled>
              소분류
            </option>
            {majorCategory &&
              categories[majorCategory].map(subCategory => (
                <option key={subCategory} value={subCategory}>
                  {subCategory}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">설명</h2>
        <textarea
          className="w-full p-2 border-[0.5px] rounded h-24 border-gray outline-none"
          maxLength={100}
          placeholder="설명을 입력하세요"
          rows={4}
        />
      </div>
      {/* TODO: 미션방 가입 모달 띄우기 */}
      {isMakeRoom && <Modal></Modal>}
    </div>
  );
};

export default MakeRoomContent;
