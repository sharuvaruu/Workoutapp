// src/App.js

import React from 'react';
import { WorkoutsProvider } from './hooks/useWorkoutsContext';  // Ensure this path is correct
import Navbar from './components/Navbar';
import WorkoutDetails from './components/WorkoutDetails';
import WorkoutForm from './components/WorkoutForm';

function App() {
  return (
    <WorkoutsProvider>
      <Navbar />
      <WorkoutDetails />
      <WorkoutForm />
    </WorkoutsProvider>
  );
}

export default App;
