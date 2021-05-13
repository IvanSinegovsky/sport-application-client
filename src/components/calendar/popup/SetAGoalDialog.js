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
import {useDispatch} from "react-redux";
import {addExercise} from "../../../reducers/popupReducer";
import {createGoal} from "../../../actions/goal";


export default function SetAGoalDialog(props) {
    const {onClose, selectedValue, open} = props;
    const [expectedWeight, setExpectedWeight] = useState("")
    const [exerciseClassificationName, setExerciseClassificationName] = useState("")
    const dispatch = useDispatch()

    function handleSave() {
        dispatch(createGoal(exerciseClassificationName, expectedWeight))
    }

    const handleChange = event => setExerciseClassificationName(event.target.value)
    const handleWeightInputChange = event => {
        setExpectedWeight(event.target.value)
        console.log(expectedWeight)
    }
    const handleClose = () => {onClose()}

    return (
        <div>
            <Dialog onClose={handleClose}
                    open={open}>
                <DialogTitle>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        Choose your goal as an exercise and the weight you want to achieve in it
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <div>
                        <TextField
                            label="Exercise classification"
                            select
                            value={exerciseClassificationName}
                            onChange={handleChange}
                            required="true"
                            style={{
                                width: 130
                            }}
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
                            value={expectedWeight}
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
                            onClick={() => handleSave()}>Save</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
