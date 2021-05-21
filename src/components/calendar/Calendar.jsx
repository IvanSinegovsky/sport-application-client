import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWorkouts} from "../../actions/workout";
import WorkoutList from "./workoutList/WorkoutList"
import {setPopupDisplay} from "../../reducers/workoutReducer";
import {Button, Typography} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import Goal from "./Goal";
import {getGoals} from "../../actions/goal";
import NewWorkoutDialog from "../calendar/popup/NewWorkoutDialog.js";
import {Switch} from "react-router-dom";

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
            {goals !== ""
                ? <Switch><Goal goals={goals}/></Switch>
                : <Switch><Typography color="textSecondary" style={{marginTop: 25, marginLeft: 30}}>No goals yet</Typography></Switch>}
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
}

export default Calendar;
