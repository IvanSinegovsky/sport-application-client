import React from 'react';
import './workout.css';

const Exercise = ({exercise}) => {
    function stringToLowerCaseWithCapitalizedFirstLetter(string) {
        string = string.toLowerCase().replace('_', ' ')
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="exercise">
            <div>{stringToLowerCaseWithCapitalizedFirstLetter(exercise.exerciseClassification)} - {exercise.weight} kgs</div>
        </div>
    );
};

export default Exercise;
