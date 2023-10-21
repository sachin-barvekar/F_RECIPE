// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Target = () => {
//   const [calories, setCalories] = useState('');
//   const [meals, setMeals] = useState([]);

//   const apiKey = 'YOUR_SPOONACULAR_API_KEY';

//   const handleCaloriesChange = (e) => {
//     setCalories(e.target.value);
//   };

//   const fetchMeals = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.spoonacular.com/recipes/findByNutrients?apiKey=${apiKey}&maxCalories=${calories}&number=10`
//       );
//       setMeals(response.data);
//     } catch (error) {
//       console.error('Error fetching meals:', error);
//     }
//   };

//   // Function to fetch meal images
//   const fetchMealImages = async () => {
//     const mealsWithImages = [];
//     for (const meal of meals) {
//       try {
//         const imageResponse = await axios.get(
//           `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${apiKey}`
//         );
//         mealsWithImages.push({ ...meal, image: imageResponse.data.image });
//       } catch (error) {
//         console.error('Error fetching meal image:', error);
//       }
//     }
//     setMeals(mealsWithImages);
//   };

//   useEffect(() => {
//     fetchMealImages();
//   }, [meals]);

//   return (
//     <div>
//       <div className="container mt-5">
//         <div className="card p-4">
//           <h1 className="card-title h3">Meal Finder</h1>
//           <div className="mb-3">
//             <label className="form-label">Enter maximum calories:</label>
//             <input
//               type="number"
//               value={calories}
//               onChange={handleCaloriesChange}
//               className="form-control w-25"
//             />
//           </div>
//           <button onClick={fetchMeals} className="btn btn-primary">
//             Find Meals
//           </button>
//           <div className="row mt-4">
//             {meals.map((meal) => (
//               <div key={meal.id} className="col-md-4 mb-3">
//                 <div className="card">
//                   <img src={meal.image} className="card-img-top" alt={meal.title} />
//                   <div className="card-body">
//                     <h3 className="card-title h5">{meal.title}</h3>
//                     <p>Calories: {meal.calories}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default Target;


// export { Target }; 






import React, { useState } from 'react';
import axios from 'axios';


const Target = () => {
  const [calories, setCalories] = useState('');
  const [meals, setMeals] = useState([]);

  const apiKey = 'YOUR_SPOONACULAR_API_KEY';

  const handleCaloriesChange = (e) => {
    setCalories(e.target.value);
  };

  const fetchMeals = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/findByNutrients?apiKey=2f570a74f5234f65a8633fcbd019c909&maxCalories=${calories}`
      );
      setMeals(response.data);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  return (
    <div>
      {/* <Sidebar></Sidebar> */}
      <div className="container mt-5">
        <div className="card p-4">
          <h1 className="card-title h3">Meal Finder</h1>
          <div className="mb-3">
            <label className="form-label">Enter maximum calories:</label>
            <input
              type="number"
              value={calories}
              onChange={handleCaloriesChange}
              className="form-control w-25"
            />
          </div>
          <button
            onClick={fetchMeals}
            className="btn btn-primary"
          >
            Find Meals
          </button>
          <ul className="list-group mt-4">
            {meals.map((meal) => (
              <li key={meal.id} className="list-group-item mb-3">
                <h3 className="h5">{meal.title}</h3>
                <p>Calories: {meal.calories}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Target;
