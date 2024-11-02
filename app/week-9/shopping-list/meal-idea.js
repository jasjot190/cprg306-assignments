import { useState, useEffect } from "react";
import React from "react";
import Meals from "./meals";

export default function MealIdea({ ingredient }) {
  const [mealsData, setMealsData] = useState(null);
  // const [loadedData, setLoadedData] = useState([]);
  async function fetchMealIdeas(ingredient) {
    let filteredName = null;
    ingredient === null
      ? ""
      : (filteredName = ingredient.replace(
          /([#0-9]\u20E3)|[\xA9\xAE\u203C\u2047-\u2049\u2122\u2139\u3030\u303D\u3297\u3299][\uFE00-\uFEFF]?|[\u2190-\u21FF][\uFE00-\uFEFF]?|[\u2300-\u23FF][\uFE00-\uFEFF]?|[\u2460-\u24FF][\uFE00-\uFEFF]?|[\u25A0-\u25FF][\uFE00-\uFEFF]?|[\u2600-\u27BF][\uFE00-\uFEFF]?|[\u2900-\u297F][\uFE00-\uFEFF]?|[\u2B00-\u2BF0][\uFE00-\uFEFF]?|(?:\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDEFF])[\uFE00-\uFEFF]?/g,
          ""
        ));
    filteredName === null
      ? ""
      : (filteredName = filteredName.slice(0, filteredName.indexOf(",")));

    let fetchedData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${filteredName}`
    );
    fetchedData = await fetchedData.json();
    setMealsData(fetchedData.meals);
  }

  // async function fetchMealData(selectedMeal) {
  //   let res = await fetch(
  //     `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedMeal}`
  //   );
  //   res = await res.json();
  //   res = res.meals;
  //   res = res[0];
  //   let res_keys = Object.keys(res);

  //   let listOfIngredients = [];

  //   for (let i = 9; i < 29; i++) {
  //     let Ingredient_value_key = res_keys[i];
  //     let Ingredient_quantity_key = res_keys[i + 20];

  //     listOfIngredients.push({
  //       value: res[Ingredient_value_key],
  //       quantity: res[Ingredient_quantity_key],
  //     });
  //   }
  //   setLoadedData(listOfIngredients);
  // }

  useEffect(() => {
    fetchMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div>
      <h1 className="font-bold text-xl">Meal Ideas</h1>
      {ingredient === null && (
        <p className="m-2">Select an item to see meal Ideas</p>
      )}
      {!(ingredient === null) && mealsData === null && (
        <p className="m-2">No meal ideas found for {ingredient}</p>
      )}
      {!(mealsData === null) && (
        <p className="m-2">Here are some meal ideas using {ingredient}:</p>
      )}
      <Meals propsList={mealsData} />
    </div>
  );
}
