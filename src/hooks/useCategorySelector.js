import { useState } from "react";
import { categories } from "../utils/utils";

export const useCategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState("공부");
  const [selectedsubcategory, setSelectedSubcategory] = useState("");

  const changeCategory = category => {
    setSelectedCategory(category);
    setSelectedSubcategory(categories[category][0]);
  };

  const changeSubCategory = subCategory => {
    setSelectedSubcategory(subCategory);
  };

  return { selectedCategory, changeCategory, selectedsubcategory, changeSubCategory };
};
