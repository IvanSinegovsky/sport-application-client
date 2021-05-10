import React from 'react';
import './workout.css';
import exerciseClassificationFormat from "../../../../utils/exerciseClassificationFormat";

const Exercise = ({exercise}) => {
    return (
        <div className="exercise">
            <div>{exerciseClassificationFormat(exercise.exerciseClassification)} - {exercise.weight} kgs</div>
        </div>
    );
};

export default Exercise;
