import React from 'react';
import './workout.css';
import dumbbell from '../../../../assets/img/lildumbbell.jpg';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import {deleteWorkout} from "../../../../actions/workout";
import {useDispatch, useSelector} from "react-redux";
import Exercise from "./Exercise";
import {Button, ButtonGroup, Icon} from "@material-ui/core";

const Workout = ({workout}) => {
    const dispatch = useDispatch()
    const exercises = workout.exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}/>)

    function deleteClickHandler(e) {
        dispatch(deleteWorkout(workout))
        e.stopPropagation()
    }

    return (
        <div className='workout'>
            <div className="workout__exercises">{exercises}</div>
            <div className="workout__date">{workout.date}</div>
          <ButtonGroup>
            <Button className="workout__delete"
                    startIcon={<DeleteForeverIcon/>}
                    onClick={(e) => deleteClickHandler(e)}>Delete</Button>
            <Button className="workout__edit"
                    startIcon={<EditIcon/>}
                    onClick={(e) => {/*todo*/}/*deleteClickHandler(e)*/}>Edit</Button>
          </ButtonGroup>
        </div>
    );
};

export default Workout;
