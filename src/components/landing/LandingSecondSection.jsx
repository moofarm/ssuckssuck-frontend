import { Button } from "../Button";
import { useCategorySelector } from "../../hooks/useCategorySelector";
import React from "react";
import { useStepActions, useUser } from "../../context/LandingProvider";
import { useNavigate } from "react-router-dom";
import { categories } from "../../utils/datas";

const LandingSecondSection = () => {
  const { selectedCategory, changeCategory } = useCategorySelector();
  const actions = useStepActions();
  const user = useUser();

  let navigate = useNavigate();

  return (
    <React.Fragment>
      <h1 className="text-xl my-5">현재 가장 이루고 싶은 목표가 있나요? </h1>
      <div className="flex flex-wrap gap-4 w-full m-auto justify-between">
        {Object.keys(categories).map(category => {
          return (
            <div
              key={category}
              className="w-[30%]"
              onClick={() => {
                actions.nextStep("mainCategory", category);
                if (category === "기타") navigate("/mymissions");
              }}
            >
              <Button
                backgroundColor={
                  (
                    user["mainCategory"]
                      ? user["mainCategory"] === category
                      : selectedCategory === category
                  )
                    ? "dark-green"
                    : "white"
                }
                label={category}
                style={{ width: "100%" }}
                onClick={() => {
                  changeCategory(category);
                  user["subCategory"] = categories[category][0];
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
