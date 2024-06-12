import React from "react";
import { Button } from "../Button";
import { useStepActions } from "../../context/LandingProvider";
import { checkNicknameDupl, changeNickname } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const LandingFirstSection = () => {
  const dispatch = useDispatch();
  const actions = useStepActions();

  const user = useSelector(state => state.user.user);
  const isNicknameDupl = useSelector(state => state.user.isNicknameDupl);

  const handleClickConfirmButton = () => {
    dispatch(checkNicknameDupl(user.nickname));
    if (isNicknameDupl) alert("중복된 닉네임 입니다!");
    else actions.nextStep();
  };

  return (
    <React.Fragment>
      <h1 className="text-xl">
        나의 무 이름을 지어주세요. <span className="text-red">(필수)</span>
      </h1>
      <input
        type="text"
        className="border-[0.5px] border-gray rounded-md p-3 outline-none w-4/5 pl-3 my-5"
        onChange={e => dispatch(changeNickname(e.target.value))}
      />
      <Button label="확인" onClick={handleClickConfirmButton}></Button>
    </React.Fragment>
  );
};

export default LandingFirstSection;
