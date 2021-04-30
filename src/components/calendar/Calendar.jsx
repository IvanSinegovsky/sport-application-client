import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getWorkouts} from "../../actions/workout";
import WorkoutList from "./workoutList/WorkoutList"
import './calendar.css'

const Calendar = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWorkouts())
    }, [])

    return (
        <div className="calendar">
            <div className="workout__btns">
                <button className="workout__create">Добавить тренировку</button>
            </div>
            <WorkoutList/>
        </div>
    );
};

export default Calendar;
