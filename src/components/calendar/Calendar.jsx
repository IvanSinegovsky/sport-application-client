import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getWorkouts, createWorkout} from "../../actions/workout";
import WorkoutList from "./workoutList/WorkoutList"
import './calendar.css'
import Popup from "./Popup";
import {setPopupDisplay, setWorkoutView} from "../../reducers/workoutReducer";

const Calendar = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWorkouts())
    }, [])

    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }

    return (
        <div className="calendar">
            <div className="calendar__btns">
                <button className="calendar__create" onClick={() => showPopupHandler()}>Добавить тренировку</button>
                <button className="calendar__list" onClick={() => dispatch(setWorkoutView('list'))}/>
                <button className="calendar__plate" onClick={() => dispatch(setWorkoutView('plate'))}/>
            </div>
            <WorkoutList/>
            <Popup/>
        </div>
    );
};

export default Calendar;
