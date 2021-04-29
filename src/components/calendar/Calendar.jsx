import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createDay, getWorkouts, uploadWorkout} from "../../actions/workout";
import WorkoutList from "./workoutList/WorkoutList";
import './calendar.css'
import Popup from "./Popup";
import {setCurrentDay, setWorkoutView, setPopupDisplay} from "../../reducers/workoutReducer";
import Uploader from "./uploader/Uploader";

const Calendar = () => {
    const dispatch = useDispatch()
    const currentDay = useSelector(state => state.workouts.currentDay)
    const loader = useSelector(state => state.app.loader)
    const dayStack = useSelector(state => state.workouts.dayStack)

    useEffect(() => {
        dispatch(getWorkouts(currentDay))
    }, [currentDay])

    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }

    function backClickHandler() {
        const backDayId = dayStack.pop()
        dispatch(setCurrentDay(backDayId))
    }

    function workoutUploadHandler(event) {
        const workouts = [...event.target.workouts]
        workouts.forEach(workout => dispatch(uploadWorkout(workout, currentDay)))
    }

    if(loader) {
        return (
            <div className="loader">
                <div className="lds-dual-ring"></div>
            </div>
        )
    }

    return(
        <div className="calendar">
            <div className="calendar__btns">
                <button className="calendar__back" onClick={() => backClickHandler()}>Назад</button>
                <button className="calendar__plate" onClick={() => dispatch(setWorkoutView('plate'))}/>
                <button className="calendar__list" onClick={() => dispatch(setWorkoutView('list'))}/>
            </div>
            <WorkoutList/>
            <Popup/>
            <Uploader/>
        </div>
    )
};

export default Calendar;
