import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWorkouts, createWorkout} from "../../actions/workout";
import WorkoutList from "./workoutList/WorkoutList"
import Popup from "./popup/Popup";
import {setPopupDisplay} from "../../reducers/workoutReducer";
import {Button, ButtonGroup} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
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
        <div>
            <Goal goals={goals}/>
            <div>
                <Button variant="outlined"
                        color="secondary"
                        startIcon={<AddIcon/>}
                        onClick={() => showPopupHandler()}
                        style={{marginTop: 15, marginBottom: 15, marginLeft: 25}}>Add workout</Button>
            </div>
            <WorkoutList/>
            <Popup/>
        </div>
    );
};

export default Calendar;
