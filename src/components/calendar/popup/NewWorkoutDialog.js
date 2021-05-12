import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {InputAdornment, makeStyles, MenuItem, Typography} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CheckIcon from "@material-ui/icons/Check";
import {useDispatch, useSelector} from "react-redux";
import {addExercise, decrement, increment, setDate} from "../../../reducers/popupReducer";
import {createGoal} from "../../../actions/goal";
import CalendarPlate from "../calendarPlate/CalendarPlate.jsx";
import ExerciseInputList from "./ExerciseInputList";
import {createWorkout} from "../../../actions/workout";
import DescriptionInputItem from "./DescriptionInputItem";


export default function SetAGoalDialog(props) {
    const {onClose, open} = props;

    const exercises = useSelector(state => state.inputsCounter.exercises)
    const description = useSelector(state => state.inputsCounter.description)
    const date = useSelector(state => state.inputsCounter.date)

    const dispatch = useDispatch()

    const handleDayClick = date => storeDate(date);
    const handleClose = () => onClose()

    function storeDate(date) {
        date = date.toLocaleDateString()
        date = date.toString().slice(6, 10) + '-' + date.toString().slice(3, 5) + '-' + date.toString().slice(0, 2)
        dispatch(setDate(date))
    }

    function counterIncrement() {dispatch(increment())}
    function counterDecrement() {dispatch(decrement())}
    function createHandler() {dispatch(createWorkout(date, exercises, description))}
    function isDisabled() {
        if (date == null || exercises.length === 0) {
            return true;
        }
        return false;
    }

    return (
        <div>
            <Dialog onClose={handleClose}
                    open={open}
                    >
                <DialogTitle>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        Create new workout {date}
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <CalendarPlate onChange={handleDayClick}/>
                    <div>
                        <ExerciseInputList/>
                        <Button
                            color="primary"
                            onClick={() => counterIncrement()}
                            style={{marginLeft: "37%", fontSize: 30}}>+</Button>
                        <Button
                            color="primary"
                            onClick={() => counterDecrement()}
                            style={{fontSize: 30}}>-</Button>
                        <DescriptionInputItem/>
                        <Button
                            disabled={isDisabled()}
                            startIcon={<SaveIcon/>}
                            variant="contained"
                            color="primary"
                            onClick={() => createHandler()}>Save</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
