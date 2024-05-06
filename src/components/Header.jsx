import { useState } from "react";
import { UserInfo } from "./UserInfo";
import Modal from "./modal/Modal";
import { Link } from "react-router-dom";
import SearchContainer from "./SearchContainer";
import MakeRoomContent from "./modal/MakeRoomContent";

export const Header = () => {
  const [isOpenMakeRoomModal, setIsOpenMakeRoomModal] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const firstMenu =
    window.location.pathname === "/mymissions" ? "🍀모든미션방보기" : "🌱나의미션방보기";

  const menus = [firstMenu, "🌻방만들기"];

  const firstMenuLocation =
    window.location.pathname === "/mymissions" ? "/missions" : "/mymissions";

  const handleClickMakingRoom = () => {
    setIsOpenMakeRoomModal(!isOpenMakeRoomModal);
  };

  const handleClickSearchIcon = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[8vh] flex justify-between items-center p-8 bg-white">
      <div className="flex gap-6 items-baseline">
        <Link to="/mymissions">
          <h1 className="text-3xl text-dark-green font-nps-bold cursor-pointer hover:animate-bounce">
            쑥쑥쑥
          </h1>
        </Link>
        {menus.map((menu, idx) => {
          return idx === 0 ? (
            <nav key={idx} className="hover:text-dark-green cursor-pointer text-center">
              <Link to={firstMenuLocation}>{menu}</Link>
            </nav>
          ) : (
            <nav
              key={idx}
              className="hover:text-dark-green cursor-pointer"
              onClick={handleClickMakingRoom}
            >
              {menu}
            </nav>
          );
        })}
      </div>
      <div className="flex items-center gap-5">
        <span
          className="material-symbols-outlined cursor-pointer text-3xl"
          onClick={handleClickSearchIcon}
        >
          search
        </span>
        <UserInfo />
      </div>
      {isOpenMakeRoomModal && (
        <Modal
          title="방 만들기"
          leftLabel="취소"
          rightLabel="만들기"
          setModal={setIsOpenMakeRoomModal}
          state={isOpenMakeRoomModal}
        >
          <MakeRoomContent />
        </Modal>
      )}
      {isOpenSearch && <SearchContainer isOpen={isOpenSearch} setIsOpen={setIsOpenSearch} />}
    </header>
  );
};
