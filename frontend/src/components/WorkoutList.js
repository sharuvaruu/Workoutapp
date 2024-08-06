import React from 'react';
import WorkoutDetails from './WorkoutDetails'; // Update path if necessary
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutList = () => {
  const { workouts } = useWorkoutsContext();

  return (
    <div className="workout-list">
      {workouts.length === 0 && <div>Loading workouts...</div>}
      {workouts.length > 0 && workouts.map(workout => (
        <WorkoutDetails key={workout._id} workout={workout} />
      ))}
    </div>
  );
};

export default WorkoutList;
