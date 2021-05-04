import React, {useState} from 'react';
import Input from "../../../utils/input/Input";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {addExercise} from "../../../reducers/popupReducer";

const ExerciseInputItem = () => {
    /* input field serial number in popup output
    const inputsCounter = useSelector(state => state.inputsCounter.counter)*/
    const [weight, setWeight] = useState("")
    const [exerciseClassification, setExerciseClassification] = useState("")
    const dispatch = useDispatch()

    function createExercise() {
        dispatch(addExercise({exerciseClassification: exerciseClassification,
            weight: weight}))
    }

    const handleChange = e => setExerciseClassification(e.target.value)

    return (
        <div>
            <FormControl>
                <InputLabel>type</InputLabel>
                     <Select onChange={handleChange}>
                        <MenuItem value='ANJUMANIA'>Anjumania</MenuItem>
                        <MenuItem value='PRESS_KATCHAT'>Press katchat</MenuItem>
                        <MenuItem value='PRISEDANIYA'>Prisedaniya</MenuItem>
                     </Select>
            </FormControl>
            <Input value={weight} setValue={setWeight} type="text" placeholder="Введите вес..."/>
            <button className="calendar__create" onClick={() => createExercise()}>Save</button>
        </div>
    );
};

export default ExerciseInputItem;
