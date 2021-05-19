import React from 'react';
import './workout.css';
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
                <Typography color="textSecondary"
                            gutterBottom
                            style={{marginTop: 10, marginLeft: 17}}>
                    {workout.date}
                </Typography>
                <CardContent>
                    <Typography variant="h4" component="h2">
                        {exercises}
                    </Typography>
                    <Typography color="textSecondary">
                        {workout.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button startIcon={<DeleteForeverIcon/>}
                            onClick={(e) => deleteClickHandler(e)}/>
                    {/*<Button startIcon={<EditIcon/>}
                            onClick={(e) => deleteClickHandler(e)}/>*/}
                </CardActions>
            </Card>
        </div>
    );
};

export default Workout;
