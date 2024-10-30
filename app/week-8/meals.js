import React from "react";

function Meals({ propsList }) {
  console.log(propsList);
  return propsList === null
    ? ""
    : propsList.map((props) => (
        <ul
          key={Math.random().toString()}
          className="m-1 p-2 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer"
        >
          <li className="capitalize text-xl">{props.strMeal}</li>
        </ul>
      ));
}

export default Meals;
