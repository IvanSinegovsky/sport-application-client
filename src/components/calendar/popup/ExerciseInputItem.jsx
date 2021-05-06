import React, {useState} from 'react';
import Input from "../../../utils/input/Input";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {addExercise} from "../../../reducers/popupReducer";

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
                    width: 130,
                    height: 50
                }}
            >
                <MenuItem value='ANJUMANIA'>Anjumania</MenuItem>
                <MenuItem value='PRESS_KATCHAT'>Press katchat</MenuItem>
                <MenuItem value='PRISEDANIYA'>Prisedaniya</MenuItem>
            </TextField>
            <TextField
                value={weight}
                type="number"
                required="true"
                variant="outlined"
                label="Greatest weight"
                helperText="Must be filled out"
                onChange={handleWeightInputChange}
                style={{
                    height: 20
                }}
            />
            <button className="calendar__create" onClick={() => createExercise()}>Save</button>
        </div>
    );
};

export default ExerciseInputItem;
