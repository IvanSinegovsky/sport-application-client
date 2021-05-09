import React, {useState} from 'react';
import {Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {addExercise, setDescription} from "../../../reducers/popupReducer";
import SaveIcon from "@material-ui/icons/Save";
import CheckIcon from '@material-ui/icons/Check';

const DescriptionInputItem = () => {
    const [workoutDescription, setWorkoutDescription] = useState("")
    const dispatch = useDispatch()

    const handleDescriptionInputChange = event => {
        setWorkoutDescription(event.target.value)
        dispatch(setDescription(workoutDescription))
    }
    return (
        <div>
            <TextField
                variant="outlined"
                label="Workout description"
                value={workoutDescription}
                onChange={handleDescriptionInputChange}
                style={{
                    width: 125
                }}
            />
        </div>
    );
};

export default DescriptionInputItem;
