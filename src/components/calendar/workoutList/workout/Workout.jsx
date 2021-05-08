import React from 'react';
import './workout.css';
import dumbbell from '../../../../assets/img/lildumbbell.jpg';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import {deleteWorkout} from "../../../../actions/workout";
import {useDispatch, useSelector} from "react-redux";
import Exercise from "./Exercise";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    makeStyles,
    Typography
} from "@material-ui/core";

const Workout = ({workout}) => {
    const dispatch = useDispatch()
    const exercises = workout.exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}/>)

    function deleteClickHandler(e) {
        dispatch(deleteWorkout(workout))
        e.stopPropagation()
    }

    return (
        <div>
            <Card>
                <CardHeader/>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {workout.date}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {exercises}
                    </Typography>
                    <Typography color="textSecondary">
                        Workout notes plug
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button startIcon={<DeleteForeverIcon/>}
                            onClick={(e) => deleteClickHandler(e)}/>
                    <Button startIcon={<EditIcon/>}
                            onClick={(e) => {/*todo*/}/*deleteClickHandler(e)*/}/>
                </CardActions>
            </Card>
        </div>
    );
};

export default Workout;
