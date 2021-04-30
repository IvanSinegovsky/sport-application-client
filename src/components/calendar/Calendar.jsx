import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getWorkouts, createWorkout} from "../../actions/workout";
import WorkoutList from "./workoutList/WorkoutList"
import './calendar.css'

const Calendar = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWorkouts())
    }, [])

    function addWorkoutHandler() {
        dispatch(createWorkout('2021-04-30', [
            { exerciseClassification: 'ANJUMANIA', weight: 14.88 },
            { exerciseClassification: 'PRISEDANIYA', weight: 13.37 }
        ]))
    }

    return (
        <div className="calendar">
            <div className="workout__btns">
                <button className="workout__create" onClick={() => addWorkoutHandler()}>Добавить тренировку</button>
            </div>
            <WorkoutList/>
        </div>
    );
};

export default Calendar;
