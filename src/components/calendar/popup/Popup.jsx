import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setPopupDisplay} from "../../../reducers/workoutReducer";
import {createWorkout} from "../../../actions/workout";
import ExerciseInputList from "./ExerciseInputList";
import {decrement, increment, setDate} from "../../../reducers/popupReducer";
import Input from "../../../utils/input/Input";
import CalendarPlate from "../calendarPlate/CalendarPlate.jsx";

const Popup = () => {
    const dispatch = useDispatch()
    const popupDisplay = useSelector(state => state.workout.popupDisplay)
    const date = useSelector(state => state.inputsCounter.date)
    const exercises = useSelector(state => state.inputsCounter.exercises)

    let handleDayClick = date => storeDate(date);

    function storeDate(date) {
        date = date.toLocaleDateString()
        date = date.toString().slice(6, 10) + '-' + date.toString().slice(3, 5) + '-' + date.toString().slice(0, 2)
        dispatch(setDate(date))
    }

    function counterIncrement() {
        dispatch(increment())
    }

    function counterDecrement() {
        dispatch(decrement())
    }

    function createHandler() {
        dispatch(createWorkout(date, exercises))
    }


    return (
        <div className="popup" onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
            <div className="popup__content" onClick={(event => event.stopPropagation())}>
                <div className="popup__header">
                    <div className="popup__title">Создать новую тренировку</div>
                    <button className="popup__close" onClick={() => dispatch(setPopupDisplay('none'))}>x</button>
                </div>
                {date && <p>Selected date: {date}</p>}
                <CalendarPlate onChange={handleDayClick}/>
                <ExerciseInputList/>
                <button className="popup__create" onClick={() => counterIncrement()}>+</button>
                <button className="popup__create" onClick={() => counterDecrement()}>-</button>
                <button className="popup__create" onClick={() => createHandler()}>Создать</button>
            </div>
        </div>
    );
};

export default Popup;
