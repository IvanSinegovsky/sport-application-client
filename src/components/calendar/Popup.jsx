import React, {useState} from 'react';
import Input from "../../utils/input/Input";
import {useDispatch, useSelector} from "react-redux";
import {setPopupDisplay} from "../../reducers/workoutReducer";
import {createDay} from "../../actions/workout";

const Popup = () => {
    const [dayName, setDayName] = useState('')
    const popupDisplay = useSelector(state => state.workouts.popupDisplay)
    const currentDay = useSelector(state => state.workouts.currentDay)
    const dispatch = useDispatch()

    function createHandler() {
        dispatch(createDay(currentDay, dayName))
    }

    return (
        <div className="popup" onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
            <div className="popup__content" onClick={(event => event.stopPropagation())}>
                <div className="popup__header">
                    <div className="popup__title">Создать новую папку</div>
                    <button className="popup__close" onClick={() => dispatch(setPopupDisplay('none'))}>X</button>
                </div>
                <Input type="text" placeholder="Введите название папки..." value={dayName} setValue={setDayName}/>
                <button className="popup__create" onClick={() => createHandler()}>Создать</button>
            </div>
        </div>
    );
};

export default Popup;
