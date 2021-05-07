import React from 'react';
import './workout.css';
import dumbbell from '../../../../assets/img/lildumbbell.jpg';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import {deleteWorkout} from "../../../../actions/workout";
import {useDispatch, useSelector} from "react-redux";
import Exercise from "./Exercise";
import {Button, ButtonGroup, Icon} from "@material-ui/core";
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

const Workout = ({workout}) => {
    const dispatch = useDispatch()
    const exercises = workout.exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}/>)

    function deleteClickHandler(e) {
        dispatch(deleteWorkout(workout))
        e.stopPropagation()
    }

    return (
        <div>
            <Container maxWidth="lg">
                <Grid container
                      justify="center">

                    <Grid item xs={2}>
                        <Paper variant="outlined" square style={{
                            paddingLeft: 50,
                            paddingTop: 20,
                            width: '100%',
                            height: '100%'
                        }}>{workout.date}</Paper>
                    </Grid>

                    <Grid item xs={3}>
                        <Paper variant="outlined" square style={{
                            marginBlockEnd: 10,
                            padding: 7,
                            width: '100%',
                            height: '100%'
                        }}>{exercises}</Paper>
                    </Grid>

                    <Grid item xs={5}>
                        <Paper variant="outlined" square style={{
                            marginBlockEnd: 10,
                            padding: 7,
                            width: '100%',
                            height: '100%'
                        }}>Workout notes plug</Paper>
                    </Grid>

                    <Grid item xs={1}>
                        <Paper variant="outlined" square style={{
                            paddingLeft: 20,
                            paddingTop: 15,
                            width: '100%',
                            height: '100%'
                        }}>
                                <Button startIcon={<DeleteForeverIcon/>}
                                        onClick={(e) => deleteClickHandler(e)}/>
                                <Button startIcon={<EditIcon/>}
                                        onClick={(e) => {/*todo*/}/*deleteClickHandler(e)*/}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Workout;
