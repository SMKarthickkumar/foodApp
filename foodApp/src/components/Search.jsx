import React, { useEffect, useState } from "react";
import style from "./search.module.css";

const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "49a0d6cff64c4adeb8279652b3e4ccc0";

const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function loadFood() {
      const res = await fetch(`${API_URL}?apiKey=${API_KEY}&query=${query}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    loadFood();
  }, [query]);
  return (
    <div className={style.searchContainer}>
      <input
        type="text"
        placeholder="Search for food..."
        className={style.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
