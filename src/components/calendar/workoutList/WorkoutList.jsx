import React from 'react';
import './workoutList.css'
import {useSelector} from "react-redux";
import Workout from "./workout/Workout";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Switch} from "react-router-dom";
import {Typography} from "@material-ui/core";

const WorkoutList = () => {
    const workouts = useSelector(state => state.workout.workouts)

    return (
        <div>
            {workouts !== "" ? <Switch><Container maxWidth="lg">
                <Grid container spacing={2}>
                    {
                        workouts.map(workout => (
                            <Grid item key={workout.id} xs={12} md={6} lg={4}>
                                <Workout workout={workout}/>
                            </Grid>))
                    }
                </Grid>
            </Container></Switch>
                : <Switch>
                    <Typography color="textSecondary" style={{marginTop: 5, marginLeft: 30}}>
                        No workouts yet, create from above
                    </Typography></Switch>}
        </div>
    );
};

export default WorkoutList;
