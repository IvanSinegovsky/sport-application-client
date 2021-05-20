import React, {useState} from 'react';
import {TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {setDescription} from "../../../reducers/popupReducer";

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
                multiline
                rows={4}
                variant="outlined"
                label="Workout description"
                value={workoutDescription}
                onChange={handleDescriptionInputChange}
                style={{marginTop: 15, marginBottom: 15, marginLeft: 10, width: 470}}
            />
        </div>
    );
};

export default DescriptionInputItem;
