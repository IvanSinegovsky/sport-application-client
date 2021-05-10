import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWorkouts, createWorkout} from "../../actions/workout";
import WorkoutList from "./workoutList/WorkoutList"
import './calendar.css'
import Popup from "./popup/Popup";
import {setPopupDisplay} from "../../reducers/workoutReducer";
import {Button, ButtonGroup} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import ProgressBar from "../progress/ProgressBar";
import Goal from "./Goal";
import {getGoals} from "../../actions/goal";

const Calendar = () => {
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getWorkouts())}, [])
    useEffect(() => {dispatch(getGoals())}, [])

    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }
    const goals = useSelector(state => state.goal.goals)

    return (
        <div className="calendar">
            <Goal goals={goals}/>
            <div className="calendar__btns">
                <Button startIcon={<EditIcon/>}
                        onClick={() => showPopupHandler()}>Add workout</Button>
            </div>
            <WorkoutList/>
            <Popup/>
        </div>
    );
};

export default Calendar;
