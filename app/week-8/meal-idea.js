import { useState, useEffect } from "react";
import React from "react";

async function fetchMealIdeas(ingredient) {
  console.log(ingredient);
  let fetchedData = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  return fetchedData.meals;
}

export default function MealIdea({ ingredient }) {
  const [meals, setMeals] = useState(null);

  const loadMealIdeas = () => {
    setMeals(fetchMealIdeas(ingredient));
    console.log(meals);
  };

  useEffect(loadMealIdeas, [ingredient]);

  return (
    <div>
      <h1 className="font-bold text-xl">Meal Ideas</h1>
      {ingredient === null && <p>Select an item to see meal Ideas</p>}
      {!(!(ingredient === null) && meals === null) && (
        <p>No meal ideas found for {ingredient}</p>
      )}
      {!(!(ingredient === null) && !(meals === null)) && (
        <p>Here are some meal ideas using {ingredient}:</p>
      )}

      {}
    </div>
  );
}
