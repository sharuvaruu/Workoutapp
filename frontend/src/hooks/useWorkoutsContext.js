// src/hooks/useWorkoutsContext.js

import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state and reducer
const WorkoutsContext = createContext();

const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_WORKOUT':
      return [...state, action.payload];
    case 'DELETE_WORKOUT':
      return state.filter(workout => workout._id !== action.payload._id);
    default:
      return state;
  }
};

// Provider component
export const WorkoutsProvider = ({ children }) => {
  const [workouts, dispatch] = useReducer(workoutsReducer, []);

  return (
    <WorkoutsContext.Provider value={{ workouts, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};

// Custom hook to use the workouts context
export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);
  if (context === undefined) {
    throw new Error('useWorkoutsContext must be used within a WorkoutsProvider');
  }
  return context;
};
