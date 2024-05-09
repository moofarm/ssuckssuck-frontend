import React from "react";
import { Button } from "../Button";
import { useStepActions, useUser } from "../../context/LandingProvider";

const LandingFirstSection = () => {
  const actions = useStepActions();
  const user = useUser();

  return (
    <React.Fragment>
      <h1 className="text-xl">
        나의 무 이름을 지어주세요. <span className="text-red">(필수)</span>
      </h1>
      <input
        type="text"
        className="border-[0.5px] border-gray rounded-md p-3 outline-none w-4/5 pl-3 my-5"
        onChange={e => (user.nickname = e.target.value)}
      />
      <Button backgroundColor="green" label="확인" onClick={actions.nextStep}></Button>
    </React.Fragment>
  );
};

export default LandingFirstSection;
