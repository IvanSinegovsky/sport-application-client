import React from 'react';
import './workout.css'
import dumbbell from '../../../../assets/img/lildumbbell.jpg'

const Workout = ({workout}) => {
    return (
        <div className='workout'>
            <img src={dumbbell} alt="" className="workout__img"/>
            <div className="workout__date">{workout.date.slice(0, 10)}</div>
        </div>
    );
};

export default Workout;
