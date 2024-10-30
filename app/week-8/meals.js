import { useState, useEffect } from "react";
function Meals({ propsList }) {
  const [mealIngredients, setMealIngredients] = useState([]);
  const [selectedMeal, setMealSelection] = useState(null);

  async function fetchMealData() {
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
    console.log(listOfIngredients);
    setMealIngredients(listOfIngredients);
  }

  function loadMealData() {
    fetchMealData();
  }

  useEffect(loadMealData, [selectedMeal]);
  return propsList === null
    ? ""
    : propsList.map((props) => (
        <ul
          key={props.idMeal}
          className="m-2  p-2 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer"
        >
          <div
            className="flex gap-4"
            onClick={() =>
              selectedMeal === props.idMeal
                ? setMealSelection(null)
                : setMealSelection(props.idMeal)
            }
          >
            <img className="max-w-10" src={props.strMealThumb} alt="" />
            <li className="capitalize text-base align-baseline">
              {props.strMeal}
            </li>
          </div>
          {selectedMeal === props.idMeal ? (
            <ul key={Math.random().toString()} className="text-gray-400">
              Ingredients needed:
              {mealIngredients.map((ingredient) => (
                <li key={Math.random().toString()} className="mx-2 text-sm ">
                  {" "}
                  {ingredient.value}{" "}
                  {!["", " ", null, undefined].includes(ingredient.quantity)
                    ? `(${ingredient.quantity})`
                    : ""}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </ul>
      ));
}

export default Meals;
