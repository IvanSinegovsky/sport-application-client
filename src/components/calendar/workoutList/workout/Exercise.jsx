import React from 'react';
import './workout.css';
import exerciseClassificationFormat from "../../../../utils/exerciseClassificationFormat";

const Exercise = ({exercise}) => {
    return (
        <div className="exercise">
            <div>{exerciseClassificationFormat(exercise.exerciseClassificationName)} - {exercise.weight} kgs</div>
        </div>
    );
};

export default Exercise;
