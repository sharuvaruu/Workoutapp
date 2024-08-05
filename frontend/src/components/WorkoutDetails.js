import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async () => {
    if (!workout || !workout._id) {
      console.error("Workout ID is not available for deletion.");
      return;
    }

    try {
      const response = await fetch('/api/workouts/' + workout._id, {
        method: 'DELETE'
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'DELETE_WORKOUT', payload: json })
      } else {
        console.error("Failed to delete workout:", json.error)
      }
    } catch (error) {
      console.error("Error deleting workout:", error.message)
    }
  }

  // Add a conditional check to prevent rendering if workout is undefined
  if (!workout) {
    return <div className="workout-details">Loading workout details...</div>
  }

  return (
    <div className="workout-details">
      <h4>{workout.title || 'No Title'}</h4>
      <p><strong>Load (kg): </strong>{workout.load || 'N/A'}</p>
      <p><strong>Number of reps: </strong>{workout.reps || 'N/A'}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt || Date.now()), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails
