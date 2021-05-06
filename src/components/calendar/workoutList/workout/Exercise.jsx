import React from 'react';

const Exercise = ({exercise}) => {
    return (
        <div>
            <div>{exercise.exerciseClassification} : {exercise.weight}</div>
        </div>
    );
};

export default Exercise;
