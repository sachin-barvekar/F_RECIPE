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
