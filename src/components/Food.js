  import React from "react";
  import { useState,useEffect } from "react";
  import MealItem from "./FoodItem"
  const Food = ({food}) => {

    const [foods, setFoods] = useState([]);
    useEffect(() => {                 
                const fetchData = async () => {
                     const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
                     const data = await response.json();
                     setFoods(data);
                 }
                 fetchData()
             }, [])

      return (
          <>
              <div className="main">
                 <div className="heading">
                     <h1>Search for a Recipe </h1>
                     <h4>You can find a range of food recipes that will. </h4>
                 </div>
                 <div className="searchBox">
                     <input type="search" className="search-bar" />
                 </div>
                 <div className="container">
                        <MealItem/>
                        <MealItem/>
                        <MealItem/>
                        <MealItem/>
                        <MealItem/>
                        <MealItem/>
                        <MealItem/>
                 </div>
              </div>
         </>
      );
  }

  export default Food;