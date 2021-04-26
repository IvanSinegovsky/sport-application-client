import React from 'react';
import './workout.css'
import dayLogo from '../../../../assets/img/day.svg'
import workoutLogo from '../../../../assets/img/workout.svg'
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, setCurrentDay} from "../../../../reducers/workoutReducer";
import {deleteWorkout} from "../../../../actions/workout";
import sizeFormat from "../../../../utils/sizeFormat";
const Workout = ({workout}) => {
    const dispatch = useDispatch()
    const currentDay = useSelector(state => state.workouts.currentDay)
    const workoutView = useSelector(state => state.workouts.view)

    function openDirHandler(workout) {
        if(workout.type === 'dir') {
            dispatch(pushToStack(currentDay))
            dispatch(setCurrentDay(workout._id))
        }
    }

    function deleteClickHandler(e) {
        e.stopPropagation()
        dispatch(deleteWorkout(workout))
    }

    if (workoutView === 'list') {
        return (
            <div className='workout' onClick={() => openDirHandler(workout)}>
                <img src={workout.type === 'dir' ? dayLogo : workoutLogo} alt="" className="workout__img"/>
                <div className="workout__name">{workout.name}</div>
                <div className="workout__date">{workout.date.slice(0, 10)}</div>
                <div className="workout__size">{sizeFormat(workout.size)}</div>
                <button onClick={(e) => deleteClickHandler(e)} className="workout__btn workout__delete">delete</button>
            </div>
        );
    }
    if (workoutView === 'plate') {
        return (
            <div className='workout-plate' onClick={() => openDirHandler(workout)}>
                <img src={workout.type === 'dir' ? dayLogo : workoutLogo} alt="" className="workout-plate__img"/>
                <div className="workout-plate__name">{workout.name}</div>
                <div className="workout-plate__btns">
                    <button onClick={(e) => deleteClickHandler(e)} className="workout-plate__btn workout-plate__delete">delete</button>
                </div>
            </div>
        );
    }

};

export default Workout;
