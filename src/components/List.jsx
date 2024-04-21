import PropTypes from "prop-types";
import EmptyStar from "../assets/empty_star.svg";
import FullStar from "../assets/full_star.svg";
import { useState } from "react";

export const List = ({ title, participantsCount, isBookmarked }) => {
  const [isClickBookmarked, setIsClickBookmarked] = useState(isBookmarked);
  const page = window.location.pathname.split("/")[1];

  const handlerClickStar = () => {
    setIsClickBookmarked(!isClickBookmarked);
  };

  const handlerClickList = () => {};

  const handlerClickTrash = () => {};

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
        <p className="nps-bold text-lg">{title}</p>
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
          <span className="text-lg">{participantsCount}</span>
        </div>
      )}
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string,
  participantsCount: PropTypes.number,
  isBookmarked: PropTypes.bool,
};
