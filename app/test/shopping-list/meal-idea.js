import { useState, useEffect } from "react";
import React from "react";
import Meals from "./meals";

export default function MealIdea({ ingredient }) {
  const [mealsData, setMealsData] = useState(null);
  const [mealIngredients, setMealIngredients] = useState([]);
  async function fetchMealIdeas(ingredient) {
    let fetchedData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    fetchedData = await fetchedData.json();
    setMealsData(fetchedData.meals);
  }

  async function fetchMealIngredients(selectedMeal) {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedMeal}`
    );
    res = await res.json();
    res = res.meals;
    res = res[0];
    let res_keys = Object.keys(res);

    let listOfIngredients = [];

    for (let i = 9; i < 29; i++) {
      let Ingredient_value_key = res_keys[i];
      let Ingredient_quantity_key = res_keys[i + 20];

      listOfIngredients.push({
        value: res[Ingredient_value_key],
        quantity: res[Ingredient_quantity_key],
      });
    }
    setMealIngredients(listOfIngredients);
  }

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
      <Meals
        propsList={mealsData}
        loadMealData={fetchMealIngredients}
        finalData={mealIngredients}
      />
    </div>
  );
}
