import React from 'react';
import './workout.css'
import dumbbell from '../../../../assets/img/lildumbbell.jpg'
import {deleteWorkout} from "../../../../actions/workout";
import {useDispatch, useSelector} from "react-redux";
import Exercise from "./Exercise";

const Workout = ({workout}) => {
    const dispatch = useDispatch()
    const exercises = workout.exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}/>)

    function deleteClickHandler(e) {
        dispatch(deleteWorkout(workout))
        e.stopPropagation()
    }

    return (
        <div className='workout'>
            <img src={dumbbell} alt="" className="workout__img"/>
            <div className="workout__date">{exercises}</div>
            <div className="workout__date">{workout.date}</div>
            <button onClick={(e) => deleteClickHandler(e)} className="workout__delete">Удалить тренировку</button>
        </div>
    );
};

export default Workout;
