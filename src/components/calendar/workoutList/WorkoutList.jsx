import React from 'react';
import './workoutList.css'
import {useSelector} from "react-redux";
import Workout from "./workout/Workout";
import CalendarPlate from "../calendarPlate/CalendarPlate.jsx";

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
            <CalendarPlate/>
        );
    }
};

export default WorkoutList;
