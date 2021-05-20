import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './graph.css'
import {getCurrentClassifiedWorkouts} from "../../actions/workout";
import Chart from "./Chart";
import {MenuItem, TextField} from "@material-ui/core";

const Graph = () => {
    const dispatch = useDispatch()
    const [exerciseClassificationName, setExerciseClassificationName] = useState("")
    const exercisesClassifications = useSelector(state => state.exerciseClassification.exercisesClassifications)
    const classifiedWorkouts = useSelector(state => state.workout.classifiedWorkouts)

    const handleChange = event => {
        setExerciseClassificationName(event.target.value)
        dispatch(getCurrentClassifiedWorkouts(exerciseClassificationName))
    }
/*
    useEffect(() => {
        dispatch(getCurrentClassifiedWorkouts(exerciseClassificationName))
    }, [])*/

    return (
        <div className="calendar">
            <TextField
                label="Exercise classification"
                select
                value={exerciseClassificationName}
                onChange={handleChange}
                required="true"
                style={{width: 200, paddingRight: 20}}
            >
                {exercisesClassifications.map((name, index) =>
                    <MenuItem key={name} value={name}>{name}</MenuItem>
                )}
            </TextField>
            {
                classifiedWorkouts ?
                <Chart data={classifiedWorkouts}/>
                    : <div>Unable to display visualization:(</div>
            }
        </div>
    );
};

export default Graph;
