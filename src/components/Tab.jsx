// Tab.jsx

import React, { Component } from "react";
import { categories } from "../utils/utils.js"; // utils.js 파일에서 categories 객체 import

export default class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "공부",
      selectedSubcategory: categories["공부"][0],
    };
  }

  //대분류 변경
  handleCategoryChange = category => {
    this.setState({
      selectedCategory: category,
      selectedSubcategory: categories[category][0],
    });
  };

  //소분류 변경
  handleSubcategoryChange = subcategory => {
    this.setState({ selectedSubcategory: subcategory });
  };

  render() {
    const { selectedCategory, selectedSubcategory } = this.state;

    return (
      <div className="flex flex-col tab-container bg-white rounded-md p-4 ">
        <div className="flex flex-wrap gap-2 w-full">
          {Object.keys(categories).map(category => (
            <button
              key={category}
              onClick={() => this.handleCategoryChange(category)}
              className={`flex-1 py-2 px-4 rounded-t-lg ${
                selectedCategory === category ? "bg-light-green text-black" : "bg-white text-gray"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap w-full bg-light-green justify-center">
          <div className="flex flex-wrap gap-2 my-4 w-auto">
            {categories[selectedCategory].map(subcategory => (
              <button
                key={subcategory}
                onClick={() => this.handleSubcategoryChange(subcategory)}
                className={`w-28 h-10 py-2 px-4 rounded-lg shadow-md ${
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
  }
}
