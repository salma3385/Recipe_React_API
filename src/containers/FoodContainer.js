// import { useState,useEffect } from 'react';
// import FoodList from "../components/FoodList";
// import FoodForm from "../components/FoodForm";
// import Food from "../components/Food";


// const FoodContainer = () => {

//     const [foods, setFoods] = useState([]);   
    
//     useEffect(() => {                 
//         const fetchData = async () => {
//             const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
//             const data = await response.json();
//             setFoods(data);
//         }
//         fetchData()
//     }, [])

   

//     return (
//         <>
//             <h1>Meal Recipes</h1>    
//             <p><em>A place for people who love to try new meals</em></p>  
//             <FoodForm />   
//             <FoodList foods = {foods} />   
//         </>
        
//     );
// }


// export default FoodContainer;
