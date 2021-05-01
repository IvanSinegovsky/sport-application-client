import React from 'react';
import './workout.css'
import dumbbell from '../../../../assets/img/lildumbbell.jpg'
import {deleteWorkout} from "../../../../actions/workout";
import {useDispatch, useSelector} from "react-redux";

const Workout = ({workout}) => {
    const dispatch = useDispatch()

    function deleteClickHandler(e) {
        dispatch(deleteWorkout(workout))
        e.stopPropagation()
    }

    //{workout.date.slice(4, 10)}
    return (
        <div className='workout'>
            <img src={dumbbell} alt="" className="workout__img"/>
            <div className="workout__date">{workout.date}</div>
            <button onClick={(e) => deleteClickHandler(e)} className="workout__delete">Удалить тренировку</button>
        </div>
    );
};

export default Workout;
