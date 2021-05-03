import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './graph.css'
import {getClassifiedWorkouts, getWorkouts} from "../../actions/workout";
import Chart from "./Chart";
const Graph = () => {
    //const [classifiedWorkoutsData, setClassifiedWorkoutsDate] = useState(null)
    const dispatch = useDispatch()
    const classifiedWorkouts = useSelector(state => state.workout.classifiedWorkouts)

    useEffect(() => {
        dispatch(getClassifiedWorkouts())
    }, [])

    return (
        <div className="calendar">
            <div className="calendar__btns">
                yoo
            </div>
            {
                classifiedWorkouts ?
                <Chart data={classifiedWorkouts}/>
                    : <div>Unable to display visualization:(</div>
            }
        </div>
    );
};

export default Graph;
