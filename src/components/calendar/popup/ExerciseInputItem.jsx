import React, {useState} from 'react';
import {Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {addExercise} from "../../../reducers/popupReducer";
import DoneIcon from '@material-ui/icons/Done';

const ExerciseInputItem = () => {
    const [weight, setWeight] = useState("")
    const [exerciseClassificationName, setExerciseClassificationName] = useState("")
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const dispatch = useDispatch()

    function createExercise() {
        setIsButtonDisabled(true)
        dispatch(addExercise({exerciseClassificationName: exerciseClassificationName, weight: weight}))
    }

    const handleChange = event => setExerciseClassificationName(event.target.value)
    const handleWeightInputChange = event => {
        setWeight(event.target.value)
    }

    return (
        <div>
            <TextField
                label="Exercise classification"
                select
                value={exerciseClassificationName}
                onChange={handleChange}
                required="true"
                style={{width: 200, paddingRight: 20}}
            >
                {/*todo to array of items like in calendarplate*/}
                <MenuItem value='BARBELL_BENCH_PRESS'>BARBELL_BENCH_PRESS</MenuItem>
                <MenuItem value='BENT-OVER_ROW'>BENT-OVER_ROW</MenuItem>
                <MenuItem value='CALF_RAISE'>CALF_RAISE</MenuItem>
            </TextField>
            <TextField
                InputProps={{
                    endAdornment: <InputAdornment position='start'>kgs</InputAdornment>
                }}
                value={weight}
                type="number"
                required="true"
                label="Greatest weight"
                onChange={handleWeightInputChange}
                style={{width: 200, paddingRight: 20, paddingBottom: 10}}
            />
            <Button
                disabled={isButtonDisabled}
                startIcon={<DoneIcon/>}
                color="primary"
                onClick={() => createExercise()}
                style={{marginTop: 15}}>Add</Button>
        </div>
    );
};

export default ExerciseInputItem;
