import { useState } from "react";
import Item from "./item";
import itemsjson from "./items.json";
import Groups from "./groups";

export const itemList = () => {
  let datalist = [...itemsjson];
  const [sortBy, setSortBy] = useState("name");
  let CategorisedList = [];

  if (sortBy === "GroupedCategory") {
    CategorisedList = splitByCategory(datalist);
  } else if (sortBy === "category") {
    datalist = datalist.sort((a, b) => a.category.localeCompare(b.category));
  } else {
    datalist = datalist.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div>
      <div>
        Sort by:
        <button
          onClick={() => setSortBy("name")}
          className={`p-1 m-2 w-28 ${
            sortBy === "name" ? "bg-orange-500" : "bg-orange-700"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`p-1 m-2 w-28 ${
            sortBy === "category" ? "bg-orange-500" : "bg-orange-700"
          }`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy("GroupedCategory")}
          className={`p-1 m-2 w-28 ${
            sortBy === "GroupedCategory" ? "bg-orange-500" : "bg-orange-700"
          }`}
        >
          Grouped Category
        </button>
      </div>
      {sortBy === "name" || sortBy == "category" ? Item(datalist) : ""}
      {sortBy === "GroupedCategory" ? Groups(CategorisedList) : ""}
    </div>
  );
};

const splitByCategory = (datalist) => {
  let categoryList = {};
  datalist = datalist.sort((a, b) => a.category.localeCompare(b.category));
  datalist.forEach((props) => {
    if (!Object.keys(categoryList).includes(props.category)) {
      categoryList[props.category] = [props];
    } else {
      categoryList[props.category].push(props);
    }
  });
  return categoryList;
};
