import React, { useEffect, useState } from "react";
import style from "./fooddetails.module.css";
import ItemList from "./ItemList";

const FoodDetails = ({ foodId }) => {
  const API_URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "49a0d6cff64c4adeb8279652b3e4ccc0";
  const [food, setFood] = useState({});
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    async function FetchFood() {
      await fetch(`${API_URL}?apiKey=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setFood(data);
          setIsLoad(false);
        })
        .catch((error) => console.error("Error:", error));
    }
    FetchFood();
  }, [foodId]);

  return (
    <div>
      <div className={style.recipeCard}>
        <h1 className={style.recipeName}>{food.title}</h1>
        <img
          className={style.recipeImage}
          src={food.image}
          alt={food.title}
        ></img>
        <div className={style.recipeDetails}>
          <span>
            <strong>⏱️ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👧‍👦 Serve {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 vegetarian" : "🍖 non-vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐻 vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>${food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h1>Ingredients</h1>
        <ItemList food={food} isLoad={isLoad} />
        <h1>Instructions</h1>
        <div className={style.recipeInstruction}>
          <ol>
            {isLoad ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
