import React, { useState } from "react";
import { categories } from "../utils/datas";
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
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`flex-1 py-2 px-4 rounded-t-lg text-xl font-nps-bold ${
              selectedCategory === category ? "bg-light-green text-black" : "bg-white text-gray"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap w-full bg-light-green justify-center">
        <div className="flex flex-wrap gap-3 my-4 w-auto">
          {categories[selectedCategory].map(subcategory => (
            <button
              key={subcategory}
              onClick={() => handleSubcategoryChange(subcategory)}
              className={`w-44 h-12 py-2 px-4 rounded-2xl shadow-md ${
                selectedSubcategory === subcategory
                  ? "bg-dark-green text-white"
                  : "bg-white text-black"
              }`}
            >
              {subcategory}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tab;
