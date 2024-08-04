import React from "react";
import Item from "./Item";

const ItemList = ({ food, isLoad }) => {
  return (
    <div>
      {isLoad ? (
        <p>Loading...</p>
      ) : (
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
    </div>
  );
};

export default ItemList;
