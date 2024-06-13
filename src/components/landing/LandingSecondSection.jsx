import { Button } from "../Button";
import { useCategorySelector } from "../../hooks/useCategorySelector";
import React, { useEffect } from "react";
import { useStepActions } from "../../context/LandingProvider";
import { useNavigate } from "react-router-dom";
import { categories, mainCategory } from "../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { signup, changeMainCategory } from "../../redux/userSlice";

const LandingSecondSection = () => {
  const { selectedCategory, changeCategory } = useCategorySelector();
  const actions = useStepActions();

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.user.isLoading);
  const user = useSelector(state => state.user.user);

  let navigate = useNavigate();

  const handleClickCategory = category => {
    changeCategory(category);
    dispatch(changeMainCategory(mainCategory[category]));
  };

  useEffect(() => {
    if (!user.mainCategory) return;
    if (user.mainCategory === "ETC") {
      dispatch(signup(user));
      if (!isLoading) navigate("/mymissions");
    } else {
      actions.nextStep();
    }
  }, [user.mainCategory]);

  return (
    <React.Fragment>
      <h1 className="text-xl my-5">현재 가장 이루고 싶은 목표가 있나요? </h1>
      <div className="flex flex-wrap gap-4 w-full m-auto justify-between">
        {Object.keys(categories).map(category => {
          return (
            <div key={category} className="w-[30%]">
              <Button
                backgroundColor={
                  (
                    user["mainCategory"]
                      ? user["mainCategory"] === category
                      : selectedCategory === category
                  )
                    ? "darkgreen"
                    : "white"
                }
                textColor={
                  (
                    user["mainCategory"]
                      ? user["mainCategory"] === category
                      : selectedCategory === category
                  )
                    ? "white"
                    : "black"
                }
                label={category}
                style={{ width: "100%" }}
                value={category}
                onClick={e => {
                  handleClickCategory(e.target.value);
                  // user["subCategory"] = categories[category][0];
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
