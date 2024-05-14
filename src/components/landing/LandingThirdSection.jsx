import React, { useEffect } from "react";
import { useCategorySelector } from "../../hooks/useCategorySelector";

import { Button } from "../Button";
import { useUser } from "../../context/LandingProvider";
import { useNavigate } from "react-router-dom";
import { categories } from "../../utils/datas";

const LandingThirdSection = () => {
  const { selectedsubcategory, changeSubCategory } = useCategorySelector();

  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    changeSubCategory(user["subCategory"]);
  }, []);

  return (
    <React.Fragment>
      <h1 className="text-xl my-5">현재 가장 이루고 싶은 목표가 있나요? </h1>
      <div className="flex flex-wrap gap-4 w-full m-auto mb-10 justify-center">
        {categories[user.mainCategory].map(subCategory => {
          return (
            <Button
              key={subCategory}
              backgroundColor={selectedsubcategory === subCategory ? "dark-green" : "white"}
              textColor={selectedsubcategory === subCategory ? "white" : "black"}
              label={subCategory}
              style={{ width: "16%" }}
              onClick={() => changeSubCategory(subCategory)}
            />
          );
        })}
      </div>
      <Button
        label="완료"
        onClick={() => {
          user["subCategory"] = selectedsubcategory;
          navigate("/mymissions");
        }}
      ></Button>
    </React.Fragment>
  );
};

export default LandingThirdSection;
