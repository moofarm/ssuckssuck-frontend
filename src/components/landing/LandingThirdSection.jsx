import React, { useEffect } from "react";
import { useCategorySelector } from "../../hooks/useCategorySelector";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { categories, mainCategory, subCategory } from "../../utils/types";
import { useDispatch, useSelector } from "react-redux";

// TODO: 서브 카테고리 선택 후 회원 가입 진행
const LandingThirdSection = () => {
  const { selectedSubCategory, changeSubCategory } = useCategorySelector();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.user.isLoading);

  useEffect(() => {
    // changeSubCategory(user["subCategory"]);
  }, []);

  return (
    <React.Fragment>
      <h1 className="text-xl my-5">현재 가장 이루고 싶은 목표가 있나요? </h1>
      <div className="flex flex-wrap gap-4 w-full m-auto mb-10 justify-center">
        {categories["공부"].map(subCategory => {
          return (
            <Button
              key={subCategory}
              backgroundColor={selectedSubCategory === subCategory ? "darkgreen" : "white"}
              textColor={selectedSubCategory === subCategory ? "white" : "black"}
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
          // user["mainCategory"] = mainCategory[user["mainCategory"]];
          // user["subCategory"] = subCategory[selectedSubCategory];
          // dispatch(signup(JSON.parse(JSON.stringify(user))));
          // if (isLoading) console.log("회원가입 진행 중");
          // if (!isLoading) navigate("/mymissions");
        }}
      ></Button>
    </React.Fragment>
  );
};

export default LandingThirdSection;
