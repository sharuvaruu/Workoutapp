import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = () => {
  const { dispatch, workouts } = useWorkoutsContext()
  // console.log(formatDistanceToNow(new Date(workouts.createdAt), { addSuffix: true }))

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workouts._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json })
    }
  }

  return (
    <>
      {workouts &&
        <div className="workout-details">
          <h1>WORKOUT BUDDY</h1>

          {workouts.map((item, index) => {
            console.log(item)
            return (<div className="workout-details">
              <h4>{item.title}</h4>
              <p><strong>Load (kg): </strong>{item.load}</p>
              <p><strong>Number of reps: </strong>{item.reps}</p>
              <p><strong>Time: </strong>{formatDistanceToNow(new Date(item.createdAt || Date.now()), { addSuffix: true })}</p>
              {/* <p>{formatDistanceToNow(new Date(workouts.createdAt), { addSuffix: true })}</p> */}
              <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
            </div>)
          })
          }

        </div>
      }

    </>
  )
}

export default WorkoutDetails