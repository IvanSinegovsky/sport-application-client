import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getWorkouts, createWorkout} from "../../actions/workout";
import WorkoutList from "./workoutList/WorkoutList"
import './calendar.css'
import Popup from "./popup/Popup";
import {setPopupDisplay} from "../../reducers/workoutReducer";
import {Button, ButtonGroup} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

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
                <Button startIcon={<EditIcon/>}
                        onClick={() => showPopupHandler()}>Add workout</Button>
            </div>
            <WorkoutList/>
            <Popup/>
        </div>
    );
};

export default Calendar;
