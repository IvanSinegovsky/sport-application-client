import React from "react";
import {Line} from "react-chartjs-2";
import {Typography} from "@material-ui/core";

function Chart(datesAndWeights) {
    let labels = datesAndWeights.data[0];
    let weights = datesAndWeights.data[1];

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Exercise progress',
                backgroundColor: 'rgba(0,0,255,0.2)',
                borderColor: 'rgba(0,0,255,1)',
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(0,0,255,0.4)',
                hoverBorderColor: 'rgba(0,0,255,1)',
                data: weights,
            },
        ],
    };

    return (
        <div>
            {chartData.labels === undefined && <div>
                <Typography
                    style={{marginTop: 40, marginLeft: 160, fontSize: 25}}>
                    Choose the exercise classification above to check your progress</Typography>
            </div>}
            {chartData.labels !== undefined && <Line data={chartData}/>}
        </div>
    );
}

export default Chart;
