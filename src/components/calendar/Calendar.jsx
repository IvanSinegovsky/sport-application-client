import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWorkouts, createWorkout} from "../../actions/workout";
import WorkoutList from "./workoutList/WorkoutList"
import {setPopupDisplay} from "../../reducers/workoutReducer";
import {Button, ButtonGroup, Toolbar} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import Goal from "./Goal";
import {getGoals} from "../../actions/goal";
import NewWorkoutDialog from "../calendar/popup/NewWorkoutDialog.js";

const Calendar = () => {
    const dispatch = useDispatch()
    useEffect(() => {dispatch(getWorkouts())}, [])
    useEffect(() => {dispatch(getGoals())}, [])
    const [open, setOpen] = useState(false)

    function showPopupHandler() {
        dispatch(setPopupDisplay('flex'))
    }
    const goals = useSelector(state => state.goal.goals)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Goal goals={goals}/>
            <div>
                <Button variant="outlined"
                        color="secondary"
                        startIcon={<AddIcon/>}
                        onClick={() => handleClickOpen()}
                        style={{marginTop: 15, marginBottom: 15, marginLeft: 25}}>Add workout</Button>
                <NewWorkoutDialog open={open}
                                onClose={handleClose}>Set a goal</NewWorkoutDialog>
            </div>
            <WorkoutList/>
        </div>
    );
};

export default Calendar;
