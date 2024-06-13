import React from "react";
import { Button } from "../Button";
import { categoryMap, subCategory } from "../../utils/types";
import { useDispatch, useSelector } from "react-redux";
import { changeSubCategory, signup } from "../../redux/userSlice";

const LandingThirdSection = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const handleClickSubCategory = sub => {
    dispatch(changeSubCategory(subCategory[sub]));
  };

  return (
    <React.Fragment>
      <h1 className="text-xl my-5">현재 가장 이루고 싶은 목표가 있나요? 2</h1>
      <div className="flex flex-wrap gap-4 w-full m-auto mb-10 justify-center">
        {categoryMap[user["mainCategory"]].map(sub => {
          return (
            <Button
              key={sub}
              backgroundColor={
                user["subCategory"]
                  ? subCategory[sub] === user["subCategory"]
                    ? "darkgreen"
                    : "white"
                  : "white"
              }
              textColor={
                user["subCategory"]
                  ? subCategory[sub] === user["subCategory"]
                    ? "white"
                    : "black"
                  : "black"
              }
              label={sub}
              style={{ width: "16%" }}
              value={sub}
              onClick={e => handleClickSubCategory(e.target.value)}
            />
          );
        })}
      </div>
      <Button
        label="완료"
        onClick={() => {
          dispatch(signup(user));
        }}
      ></Button>
    </React.Fragment>
  );
};

export default LandingThirdSection;
