import PropTypes from "prop-types";

const SearchContainer = ({ isOpen, setIsOpen }) => {
  const handleClickCloseIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-white">
      <div className="w-3/4 m-auto flex flex-col">
        <span
          className="material-symbols-outlined self-end my-5 cursor-pointer"
          onClick={handleClickCloseIcon}
        >
          close
        </span>
        <div className="flex items-center border-[0.5px] border-gray rounded-md p-3">
          <span className="material-symbols-outlined">search</span>
          <input
            placeholder="검색할 키워드를 입력하세요."
            className="border-none outline-none w-full pl-3"
          />
        </div>
      </div>
    </div>
  );
};

SearchContainer.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.any,
};

SearchContainer.defaultProps = {
  isOpen: true,
};

export default SearchContainer;
