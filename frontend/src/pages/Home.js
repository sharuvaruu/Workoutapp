import React, { useEffect } from 'react';
import WorkoutList from '../components/WorkoutList'; // Update path if necessary
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const Home = () => {
  const { dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workouts');
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: 'SET_WORKOUTS', payload: json });
        } else {
          console.error("Failed to fetch workouts:", json.error);
        }
      } catch (error) {
        console.error("Error fetching workouts:", error.message);
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workout-list-container">
        <WorkoutList />
      </div>
      <div className="workout-form-container">
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
