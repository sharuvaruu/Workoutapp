import { useEffect } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workouts')
        const json = await response.json()

        if (response.ok) {
          dispatch({ type: 'SET_WORKOUTS', payload: json })
        } else {
          console.error("Failed to fetch workouts:", json.error)
        }
      } catch (error) {
        console.error("Error fetching workouts:", error.message)
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.length > 0 ? (
          workouts.map(workout => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))
        ) : (
          <div>Loading workouts...</div>
        )}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home
