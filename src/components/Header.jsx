import { useState } from "react";
import { UserInfo } from "./UserInfo";
import Modal from "./Modal";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpenMakingRoomModal, setIsOpenMakingRoomModal] = useState(false);

  const firstMenu = window.location.pathname === "/mymissions" ? "모든미션방" : "나의미션방";
  const firstMenuLocation =
    window.location.pathname === "/mymissions" ? "/missions" : "/mymissions";
  const menus = [firstMenu, "방만들기"];

  const handleClickMakingRoom = () => {
    setIsOpenMakingRoomModal(!isOpenMakingRoomModal);
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
            <nav key={idx} className="hover:text-dark-green cursor-pointer">
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
        <span className="material-symbols-outlined cursor-pointer text-3xl">search</span>
        <UserInfo />
      </div>
      {isOpenMakingRoomModal && (
        <Modal
          title="방 만들기"
          contents="방 만들기 모달"
          leftLabel="취소"
          rightLabel="만들기"
          setModal={setIsOpenMakingRoomModal}
          state={isOpenMakingRoomModal}
        />
      )}
    </header>
  );
};
