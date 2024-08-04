import React from "react";
import style from "./fooditem.module.css";

const FoodItem = ({ food, setfoodId }) => {
  return (
    <div className={style.itemContainer}>
      <img src={food.image} alt={food.title} className={style.itemImage}></img>
      <div className={style.itemInfo}>
        <p className={style.itemName}>{food.title}</p>
      </div>
      <div className={style.buttonContainer}>
        <button
          className={style.itembutton}
          onClick={() => {
            console.log(food.id);
            setfoodId(food.id);
          }}
        >
          View Recipes
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
