import React from 'react';
import './workoutList.css'
import {useSelector} from "react-redux";
import Workout from "./workout/Workout";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const WorkoutList = () => {
    const workouts = useSelector(state => state.workout.workouts).map(workout => <Workout key={workout.id} workout={workout}/>)

    return (
        <div>
            <Container maxWidth="lg">
                <Grid container
                      justify="center">
                    <Grid item xs={2}>
                        <Paper variant="outlined" square style={{
                            paddingLeft: 70,
                            paddingTop: 15,
                            width: '100%',
                            height: '100%',
                            paddingBlock: 15
                        }}>Date</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper variant="outlined" square style={{
                            paddingLeft: 95,
                            paddingTop: 15,
                            width: '100%',
                            height: '100%'
                        }}>Exercises</Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper variant="outlined" square style={{
                            paddingLeft: 180,
                            paddingTop: 15,
                            width: '100%',
                            height: '100%'
                        }}>Workout notes</Paper>
                    </Grid>
                    <Grid item xs={1}>
                        <Paper variant="outlined" square style={{
                            paddingLeft: 15,
                            paddingTop: 15,
                            width: '100%',
                            height: '100%'
                        }}>Actions</Paper>
                    </Grid>
                </Grid>
            </Container>
            {workouts}
        </div>
    );
};

export default WorkoutList;
