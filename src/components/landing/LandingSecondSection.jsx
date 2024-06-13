import { Button } from "../Button";
import React from "react";
import { useStepActions } from "../../context/LandingProvider";
import { mainCategory } from "../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { signup, changeMainCategory } from "../../redux/userSlice";

const LandingSecondSection = () => {
  const actions = useStepActions();

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const handleClickCategory = category => {
    dispatch(changeMainCategory(mainCategory[category]));
    if (category === "기타")
      dispatch(
        signup({
          ...user,
          mainCategory: "ETC",
          subCategory: "",
        }),
      );
    else actions.nextStep();
  };

  return (
    <React.Fragment>
      <h1 className="text-xl my-5">현재 가장 이루고 싶은 목표가 있나요? 1 </h1>
      <div className="flex flex-wrap gap-4 w-full m-auto justify-between">
        {Object.keys(mainCategory).map(category => {
          return (
            <div key={category} className="w-[30%]">
              <Button
                backgroundColor={
                  user["mainCategory"]
                    ? mainCategory[category] === user["mainCategory"]
                      ? "darkgreen"
                      : "white"
                    : category === "공부"
                      ? "darkgreen"
                      : "white"
                }
                textColor={
                  user["mainCategory"]
                    ? mainCategory[category] === user["mainCategory"]
                      ? "white"
                      : "black"
                    : category === "공부"
                      ? "white"
                      : "black"
                }
                label={category}
                style={{ width: "100%" }}
                value={category}
                onClick={e => {
                  handleClickCategory(e.target.value);
                }}
              />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default LandingSecondSection;
