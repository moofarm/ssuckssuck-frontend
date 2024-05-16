import PropTypes from "prop-types";
import EmptyStar from "../assets/empty_star.svg";
import FullStar from "../assets/full_star.svg";
import { useState } from "react";
import Modal from "./modal/Modal";
import JoinRoom from "./modal/JoinRoom";

export const List = ({ mission }) => {
  const [isClickBookmarked, setIsClickBookmarked] = useState(mission.isBookmarked);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenMissionModal, setIsOpenMissionModal] = useState(false);

  const page = window.location.pathname.split("/")[1];

  const handlerClickStar = () => {
    setIsClickBookmarked(!isClickBookmarked);
  };

  const handlerClickList = () => {
    setIsOpenMissionModal(!isOpenMissionModal);
  };

  const handlerClickTrash = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  return (
    <div
      className="flex justify-between items-center w-full h-[8vh] p-5 my-3 bg-white rounded-lg border-[0.5px] border-gray shadow hover:cursor-pointer hover:shadow-sm"
      onClick={handlerClickList}
    >
      <div className="flex gap-5 items-center">
        {page === "mymissions" ? (
          <div onClick={handlerClickStar}>
            <svg width="35" height="35" viewBox="0 0 40 40">
              {isClickBookmarked ? <FullStar /> : <EmptyStar />}
            </svg>
          </div>
        ) : (
          <span className="m-[-0.5rem]"></span>
        )}
        <p className="nps-bold text-lg">{mission.title}</p>
      </div>
      {page === "mymissions" ? (
        <span
          className="material-symbols-outlined text-2xl hover:text-3xl"
          onClick={handlerClickTrash}
        >
          delete
        </span>
      ) : (
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-2xl">groups</span>
          <span className="text-lg">{mission.participantsCount}</span>
        </div>
      )}
      {isOpenMissionModal && (window.location.pathname === "/mymissions") | mission.isMine ? (
        <Modal
          title={mission.title}
          contents={mission.description}
          setModal={setIsOpenMissionModal}
          state={isOpenMissionModal}
          leftLabel="취소"
          rightLabel="입장하기"
        />
      ) : (
        <Modal
          title={mission.title}
          setModal={setIsOpenMissionModal}
          state={isOpenMissionModal}
          leftLabel="취소"
          rightLabel="가입하기"
        >
          <JoinRoom />
        </Modal>
      )}
      {isOpenDeleteModal && (
        <Modal
          title="토익만점기원"
          contents="미션을 중단하시나요?"
          setModal={setIsOpenDeleteModal}
          state={isOpenDeleteModal}
          leftLabel="아니요"
          rightLabel="네"
        />
      )}
    </div>
  );
};

List.propTypes = {
  mission: PropTypes.object,
};
