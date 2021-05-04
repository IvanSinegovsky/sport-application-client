import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setPopupDisplay} from "../../../reducers/workoutReducer";
import {createWorkout} from "../../../actions/workout";
import ExerciseInputList from "./ExerciseInputList";
import {decrement, increment} from "../../../reducers/popupReducer";
import SelectDate from "./SelectDate";

const Popup = () => {
    const [workoutDate, setWorkoutDate] = useState('')
    const popupDisplay = useSelector(state => state.workout.popupDisplay)
    const dispatch = useDispatch()

/*    function createHandler() {
        dispatch(createWorkout(workoutDate, [
            { exerciseClassification: 'ANJUMANIA', weight: 14.88 },
            { exerciseClassification: 'PRISEDANIYA', weight: 13.37 }
        ]))
    }*/

    function counterIncrement() {
        dispatch(increment())
    }

    function counterDecrement() {
        dispatch(decrement())
    }

    return (
         <div className="popup" onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
            <div className="popup__content" onClick={(event => event.stopPropagation())}>
                <div className="popup__header">
                        <div className="popup__title">Создать новую тренировку</div>
                    <button className="popup__close" onClick={() => dispatch(setPopupDisplay('none'))}>x</button>
                </div>
                <SelectDate/>
                <ExerciseInputList/>
                <button className="popup__create" onClick={() => counterIncrement()}>+</button>
                <button className="popup__create" onClick={() => counterDecrement()}>-</button>
                <button className="popup__create" onClick={() => createWorkout()}>Создать</button>
            </div>
        </div>
    );
};

export default Popup;
