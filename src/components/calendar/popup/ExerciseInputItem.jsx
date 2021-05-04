import React, {useEffect, useState} from 'react';
import Input from "../../../utils/input/Input";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

const ExerciseInputItem = () => {
    /* input field serial number in popup output
    const inputsCounter = useSelector(state => state.inputsCounter.counter)*/
    const [weight, setWeight] = useState("")
    const [exerciseType, setExerciseType] = useState("")

    const handleTypeSelect = e => setExerciseType(e.target.exerciseType)

    return (
        <div>
            <FormControl>
                <InputLabel>type</InputLabel>
                     <Select onChange={handleTypeSelect}>
                        <MenuItem value='ANJUMANIA'>Anjumania</MenuItem>
                        <MenuItem value='PRESS_KATCHAT'>Press katchat</MenuItem>
                        <MenuItem value='PRISEDANIYA'>Prisedaniya</MenuItem>
                     </Select>
            </FormControl>
            <Input value={weight} setValue={setWeight} type="text" placeholder="Введите вес..."/>
        </div>
    );
};

export default ExerciseInputItem;
