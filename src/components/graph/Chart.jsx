import React from "react";
import {Line} from "react-chartjs-2";

function Chart(classifiedWorkoutsArray) {
    let labels = classifiedWorkoutsArray.data[0];
    let label1 = classifiedWorkoutsArray.data[1];
    let label2 = classifiedWorkoutsArray.data[2];
    let label3 = classifiedWorkoutsArray.data[3];

    console.log('output4' + labels)

    const chartData = {
        labels,
        datasets: [
            {
                label: 'BARBELL_BENCH_PRESS',
                backgroundColor: 'rgba(0,0,255,0.2)',
                borderColor: 'rgba(0,0,255,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0,0,255,0.4)',
                hoverBorderColor: 'rgba(0,0,255,1)',
                data: label1,
            },
            {
                label: 'BENT-OVER_ROW',
                backgroundColor: 'rgba(0,255,0,0.2)',
                borderColor: 'rgba(0,255,0,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0,0,255,0.4)',
                hoverBorderColor: 'rgba(0,0,255,1)',
                data: label2,
            },
            {
                label: 'CALF_RAISE',
                backgroundColor: 'rgba(255,0,0,0.2)',
                borderColor: 'rgba(255,0,0,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0,0,255,0.4)',
                hoverBorderColor: 'rgba(0,0,255,1)',
                data: label3,
            },
        ],
    };
    return (
        <div>
            <h2>Exercises weight progress</h2>
            <Line data={chartData}/>
        </div>
    );
}

export default Chart;
