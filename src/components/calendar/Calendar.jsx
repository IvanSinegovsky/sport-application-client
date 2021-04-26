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

    function workoutUploadHandler(event) {
        const workouts = [...event.target.workouts]
        workouts.forEach(workout => dispatch(uploadWorkout(workout, currentDay)))
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
        let workouts = [...event.dataTransfer.workouts]
        workouts.forEach(workout => dispatch(uploadWorkout(workout, currentDay)))
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
            <div className="calendar" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
                <div className="calendar__btns">
                    <button className="calendar__back" onClick={() => backClickHandler()}>Назад</button>
                    <button className="calendar__create" onClick={() => showPopupHandler()}>Создать папку</button>
                    <div className="calendar__upload">
                        <label htmlFor="calendar__upload-input" className="calendar__upload-label">Загрузить файл</label>
                        <input multiple={true} onChange={(event)=> workoutUploadHandler(event)} type="workout" id="calendar__upload-input" className="calendar__upload-input"/>
                    </div>
                    <select value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className='calendar__select'>
                        <option value="name">По имени</option>
                        <option value="type">По типу</option>
                        <option value="date">По дате</option>
                    </select>
                    <button className="calendar__plate" onClick={() => dispatch(setWorkoutView('plate'))}/>
                    <button className="calendar__list" onClick={() => dispatch(setWorkoutView('list'))}/>
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
