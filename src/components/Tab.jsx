import React, { useState } from "react";
import { categories } from "../utils/datas";
import { Button } from "./Button";
const Tab = () => {
  const [selectedCategory, setSelectedCategory] = useState("공부");
  const [selectedSubcategory, setSelectedSubcategory] = useState(categories["공부"][0]);

  const handleCategoryChange = category => {
    setSelectedCategory(category);
    setSelectedSubcategory(categories[category][0]);
  };

  const handleSubcategoryChange = subcategory => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <div className="flex flex-col tab-container bg-white rounded-md p-4 ">
      <div className="flex flex-wrap gap-2 w-full">
        {Object.keys(categories).map(category => (
          <Button
            key={category}
            backgroundColor={`${selectedCategory === category ? "light-green" : "white"}`}
            textColor="black"
            onClick={() => handleCategoryChange(category)}
            label={category}
          />
        ))}
      </div>

      <div className="flex flex-wrap w-full bg-light-green justify-center">
        <div className="flex flex-wrap gap-3 my-4 w-auto">
          {categories[selectedCategory].map(subcategory => (
            <Button
              key={subcategory}
              backgroundColor={`${selectedSubcategory === subcategory ? "dark-green" : "white"}`}
              textColor={`${selectedSubcategory === subcategory ? "white" : "black"}`}
              label={subcategory}
              onClick={() => handleSubcategoryChange(subcategory)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tab;
