import React from 'react';
import './workoutList.css'
import {useSelector} from "react-redux";
import Workout from "./workout/Workout";

const WorkoutList = () => {

    //создание массива файлов
    const workouts = useSelector(state => state.workout.workouts).map(workout => <Workout key={workout.id} workout={workout}/>)
    const fileView = useSelector(state => state.workout.view)

    if (fileView === 'list') {
        return (
            <div className='workoutlist'>
                <div className="workoutlist__header">
                    <div className="workoutlist__name">Название</div>
                    <div className="workoutlist__date">Дата</div>
                </div>
                {workouts}
            </div>
        );
    }

    if (fileView === 'plate') {
        return (
            <div>calendar plug</div>
        );
    }
};

export default WorkoutList;
