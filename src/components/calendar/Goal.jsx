import React from 'react';
import {Button, Card, CardActions, CardContent, CardHeader, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ProgressBar from "../progress/ProgressBar";
import exerciseClassificationFormat from "../../utils/exerciseClassificationFormat";

const Goal = ({goals}) => {
    return (
        <div>
                <Card style={{marginLeft: 10}}>
                    <Grid container spacing={2}>
                    <Typography color="textPrimary"
                                gutterBottom
                                style={{marginTop: 15, marginLeft: 17}}>
                        Your goals fulfillment:
                    </Typography>
                    <CardContent>
                    {
                        goals.map(goal => (
                            <Grid item>
                                <Typography color="textSecondary">
                                    {exerciseClassificationFormat(goal.exerciseClassification)}:
                                </Typography>
                                <ProgressBar done={(goal.fulfillingInPercents * 100).toString().slice(0, 4)}/>
                            </Grid>))
                    }
                    </CardContent>
                </Grid>
                </Card>
        </div>
    );
};

export default Goal;
