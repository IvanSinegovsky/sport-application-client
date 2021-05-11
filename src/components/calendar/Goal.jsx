import React from 'react';
import {Button, Card, CardActions, CardContent, CardHeader, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ProgressBar from "../progress/ProgressBar";
import exerciseClassificationFormat from "../../utils/exerciseClassificationFormat";

const Goal = ({goals}) => {
    return (
        <div style={{marginTop: 35}}>
            <Card style={{background: "#ffde7f"}}>
                    <Grid container style={{marginTop: 10}}>
                    {
                        goals.map(goal => (
                            <Grid item style={{marginLeft:20}}>
                                <Typography color="textSecondary">
                                    {exerciseClassificationFormat(goal.exerciseClassification)}:
                                </Typography>
                                <ProgressBar done={(goal.fulfillingInPercents * 100).toString().slice(0, 4)}/>
                            </Grid>))
                    }
                </Grid>
            </Card>
        </div>
    );
};

export default Goal;
