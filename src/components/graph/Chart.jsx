import React from "react";
import {Line} from "react-chartjs-2";

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
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0,0,255,0.4)',
                hoverBorderColor: 'rgba(0,0,255,1)',
                data: weights,
            },
        ],
    };

    console.log('chart data ' + chartData.labels)
    return (
        <div>
            {chartData.labels === "" && <div>didnt</div>}
            {chartData.labels !== "" && <Line data={chartData}/>}
        </div>
    );
}

export default Chart;
