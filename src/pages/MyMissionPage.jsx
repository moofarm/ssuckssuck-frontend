import React, { useEffect, useState } from "react";
import SadMussuk from "../assets/sad_mussuk.svg";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { List } from "../components/List";
import { missions } from "../utils/dummy-datas";
import { useSelector } from "react-redux";

const MyMissionPage = () => {
  const [myMissionList, setMyMissionList] = useState([]);

  const navigate = useNavigate();
  const loginedUser = useSelector(state => state.user.loginedUser);

  useEffect(() => {
    setMyMissionList(missions);
    console.log(loginedUser);
  }, []);

  return (
    <div className="page">
      {myMissionList.length === 0 ? (
        <div className="absolute top-[15%] left-[25%] bg-light-green rounded-3xl p-20 w-1/2 m-auto shadow-xl flex flex-col items-center gap-3">
          <svg width="130px" viewBox="0 0 150 165">
            <SadMussuk />
          </svg>
          <div className="text-center">
            <p className="text-xs">나의 미션방이 비어있어요</p>
            <p> 다른 미션방을 둘러보세요</p>
          </div>
          <Button label="모든 미션방 보러가기" onClick={() => navigate("/missions")}></Button>
        </div>
      ) : (
        <div className="w-2/3 m-auto mt-10">
          <p>🔥 오늘도 미션으로 불태워요!</p>
          {myMissionList.map((mission, idx) => {
            return <List key={idx} mission={mission} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MyMissionPage;
