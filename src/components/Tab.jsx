import { categories } from "../utils/datas";
import { Button } from "./Button";
import { useCategorySelector } from "../hooks/useCategorySelector";

const Tab = () => {
  const { selectedCategory, changeCategory, selectedSubCategory, changeSubCategory } =
    useCategorySelector();

  return (
    <div className="flex flex-col tab-container bg-white rounded-md p-4 ">
      <div className="flex flex-wrap w-full">
        {Object.keys(categories).map(category => (
          <Button
            key={category}
            backgroundColor={`${selectedCategory === category ? "light-green" : "white"}`}
            textColor="black"
            onClick={() => changeCategory(category)}
            label={category}
            style={{ borderRadius: "0.5rem 0.5rem 0 0", width: `${100 / 6}%` }}
          />
        ))}
      </div>

      <div
        className="flex flex-wrap w-full bg-light-green justify-center"
        style={{ borderRadius: "0 0 0.5rem 0.5rem" }}
      >
        {selectedCategory !== "기타" && (
          <div className="flex flex-wrap gap-3 my-4 w-auto">
            {categories[selectedCategory].map(subcategory => (
              <Button
                key={subcategory}
                backgroundColor={`${selectedSubCategory === subcategory ? "dark-green" : "white"}`}
                textColor={`${selectedSubCategory === subcategory ? "white" : "black"}`}
                label={subcategory}
                onClick={() => changeSubCategory(subcategory)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tab;
