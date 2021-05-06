import React, {useState} from 'react';
import {Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {addExercise} from "../../../reducers/popupReducer";
import SaveIcon from "@material-ui/icons/Save";
import CheckIcon from '@material-ui/icons/Check';

const ExerciseInputItem = () => {
    const [weight, setWeight] = useState("")
    const [exerciseClassification, setExerciseClassification] = useState("")
    const dispatch = useDispatch()

    function createExercise() {
        dispatch(addExercise({exerciseClassification: exerciseClassification,
            weight: weight}))
    }

    const handleChange = event => setExerciseClassification(event.target.value)
    const handleWeightInputChange = event => {
        setWeight(event.target.value)
    }

    return (
        <div>
            <TextField
                label="Exercise classification"
                select
                value={exerciseClassification}
                onChange={handleChange}
                required="true"
                style={{
                    width: 130
                }}
            >
                <MenuItem value='ANJUMANIA'>Anjumania</MenuItem>
                <MenuItem value='PRESS_KATCHAT'>Press katchat</MenuItem>
                <MenuItem value='PRISEDANIYA'>Prisedaniya</MenuItem>
            </TextField>
            <TextField
                InputProps={{
                    endAdornment: <InputAdornment position='start'>kgs</InputAdornment>
                }}
                value={weight}
                type="number"
                required="true"
                variant="outlined"
                label="Greatest weight"
                helperText="Must be filled out"
                onChange={handleWeightInputChange}
                style={{
                    width: 125
                }}
            />
            <Button
                startIcon={<SaveIcon/>}
                checkedIcon={<CheckIcon/>}
                variant="contained"
                color="primary"
                onClick={() => createExercise()}>Save</Button>
        </div>
    );
};

export default ExerciseInputItem;
