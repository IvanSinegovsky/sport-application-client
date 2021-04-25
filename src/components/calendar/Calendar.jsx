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
    const currentDay = useSelector(state => state.files.currentDay)
    const loader = useSelector(state => state.app.loader)
    const dayStack = useSelector(state => state.files.dayStack)
    const [dragEnter, setDragEnter] = useState(false)
    const [sort, setSort] = useState('type')

    useEffect(() => {
        dispatch(getWorkouts(currentDay, sort))
    }, [currentDay, sort])

    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }

    function backClickHandler() {
        const backDayId = dayStack.pop()
        dispatch(setCurrentDay(backDayId))
    }

    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadWorkout(file, currentDay)))
    }

    function dragEnterHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }

    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }

    function dropHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(uploadWorkout(file, currentDay)))
        setDragEnter(false)
    }

    if(loader) {
        return (
            <div className="loader">
                <div className="lds-dual-ring"></div>
            </div>
        )
    }

    return ( !dragEnter ?
            <div className="disk" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                <div className="disk__btns">
                    <button className="disk__back" onClick={() => backClickHandler()}>Назад</button>
                    <button className="disk__create" onClick={() => showPopupHandler()}>Создать папку</button>
                    <div className="disk__upload">
                        <label htmlFor="disk__upload-input" className="disk__upload-label">Загрузить файл</label>
                        <input multiple={true} onChange={(event)=> fileUploadHandler(event)} type="file" id="disk__upload-input" className="disk__upload-input"/>
                    </div>
                    <select value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className='disk__select'>
                        <option value="name">По имени</option>
                        <option value="type">По типу</option>
                        <option value="date">По дате</option>
                    </select>
                    <button className="disk__plate" onClick={() => dispatch(setWorkoutView('plate'))}/>
                    <button className="disk__list" onClick={() => dispatch(setWorkoutView('list'))}/>
                </div>
                <WorkoutList/>
                <Popup/>
                <Uploader/>
            </div>
            :
            <div className="drop-area" onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                Перетащите файлы сюда
            </div>
    );
};

export default Calendar;
