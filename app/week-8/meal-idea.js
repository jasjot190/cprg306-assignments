import { useState, useEffect } from "react";
import React from "react";
import Meals from "./meals";

export default function MealIdea({ ingredient }) {
  const [mealsData, setMealsData] = useState(null);
  async function fetchMealIdeas(ingredient) {
    let fetchedData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    fetchedData = await fetchedData.json();
    setMealsData(fetchedData.meals);
  }

  function loadMealIdeas() {
    fetchMealIdeas(ingredient);
  }

  useEffect(loadMealIdeas, [ingredient]);

  return (
    <div>
      <h1 className="font-bold text-xl">Meal Ideas</h1>
      {ingredient === null && <p>Select an item to see meal Ideas</p>}
      {ingredient == !null && mealsData == null && (
        <p>No meal ideas found for {ingredient}</p>
      )}
      {mealsData === !null && (
        <p>Here are some meal ideas using {ingredient}:</p>
      )}
      {/* <Meals
        propList={[
          {
            strMeal: "BBQ Pork Sloppy Joes",
            strMealThumb:
              "https://www.themealdb.com/images/media/meals/atd5sh1583188467.jpg",
            idMeal: "52995",
          },
          {
            strMeal: "Bread and Butter Pudding",
            strMealThumb:
              "https://www.themealdb.com/images/media/meals/xqwwpy1483908697.jpg",
            idMeal: "52792",
          },
        ]}
      /> */}
      <Meals propsList={mealsData} />
    </div>
  );
}
