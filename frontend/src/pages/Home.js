// src/pages/Home.js
import { useEffect,useState } from 'react';
import React from 'react';

const Home = () => {
  const [workouts,setWorkouts]=useState(null)
  useEffect(()=>{
   const fetchWorkouts=async()=>{
    const response = await fetch('https:/localhost:4000/api/workouts')
    const json= await response.json()

    if(response.ok){
       setWorkouts(json)
    }
   }
   fetchWorkouts()
  },[])
  console.log("Home component rendered");
  return (
    <div className="home">
      <div classname="workouts">
        {workouts && workouts.map((workout)=>(
          <p key={workout._id}>{workout.title}</p>
        )
        )
        
        }
      </div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
