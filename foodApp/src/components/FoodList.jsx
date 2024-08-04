import React from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ foodData, setfoodId }) => {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setfoodId={setfoodId} />
      ))}
    </div>
  );
};

export default FoodList;
