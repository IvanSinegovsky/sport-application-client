import React from "react";
import {Line} from "react-chartjs-2";

function Chart(classifiedWorkoutsArray) {
    let labels = classifiedWorkoutsArray.data[0];
    let label1 = classifiedWorkoutsArray.data[1];
    let label2 = classifiedWorkoutsArray.data[2];
    let label3 = classifiedWorkoutsArray.data[3];

    const chartData = {
        labels,
        datasets: [
            {
                label: 'ANJUMANIYA',
                backgroundColor: 'rgba(0,0,255,0.2)',
                borderColor: 'rgba(0,0,255,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0,0,255,0.4)',
                hoverBorderColor: 'rgba(0,0,255,1)',
                data: label1,
            },
            {
                label: 'PRESS_KATCHAT',
                backgroundColor: 'rgba(0,255,0,0.2)',
                borderColor: 'rgba(0,255,0,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0,0,255,0.4)',
                hoverBorderColor: 'rgba(0,0,255,1)',
                data: label2,
            },
            {
                label: 'PRISEDANIYA',
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
            <h2>Line example</h2>
            <Line data={chartData}/>
        </div>
    );
}

export default Chart;
