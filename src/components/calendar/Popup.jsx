import React, {useState} from 'react';
import Input from "../../utils/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {addWorkout, setPopupDisplay} from "../../reducers/workoutReducer";
import {createWorkout} from "../../actions/workout";
import Dropdown from "./dropdown";

const Popup = () => {
    const [workoutDate, setWorkoutDate] = useState('')
    const popupDisplay = useSelector(state => state.workout.popupDisplay)
   // const date = useSelector(state => state.workout.date)
    const dispatch = useDispatch()

    //todo change names
    const items = [
        {
            id: 1,
            value: 'Pulp Fiction',
        },
        {
            id: 2,
            value: 'The Prestige',
        },
        {
            id: 3,
            value: 'Blade Runner 2049',
        },
    ];

    function createHandler() {
        dispatch(createWorkout(workoutDate, [
            { exerciseClassification: 'ANJUMANIA', weight: 14.88 },
            { exerciseClassification: 'PRISEDANIYA', weight: 13.37 }
        ]))
    }

    return (
         <div className="popup" onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
            <div className="popup__content" onClick={(event => event.stopPropagation())}>
                <div className="popup__header">
                        <div className="popup__title">Создать новую тренировку</div>
                    <button className="popup__close" onClick={() => dispatch(setPopupDisplay('none'))}>x</button>
                </div>
                <Input type="text" placeholder="Введите дату..." value={workoutDate} setValue={setWorkoutDate}/>
                <Dropdown title="Select movie" items={items} multiSelect />
                <button className="popup__create" onClick={() => createHandler()}>Создать</button>
            </div>
        </div>
    );
};

export default Popup;
