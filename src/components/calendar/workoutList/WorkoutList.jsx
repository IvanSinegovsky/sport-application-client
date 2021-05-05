import React from 'react';
import './workoutList.css'
import {useSelector} from "react-redux";
import Workout from "./workout/Workout";

const WorkoutList = () => {
    const workouts = useSelector(state => state.workout.workouts).map(workout => <Workout key={workout.id} workout={workout}/>)

    return (
        <div className='workoutlist'>
            <div className="workoutlist__header">
                <div className="workoutlist__name">Название</div>
                <div className="workoutlist__date">Дата</div>
            </div>
            {workouts}
        </div>
    );
};

export default WorkoutList;
