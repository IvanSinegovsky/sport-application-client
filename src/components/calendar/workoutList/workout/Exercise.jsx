import React from 'react';

const Exercise = ({exercise}) => {
    return (
        <div>
            <div>{exercise.exerciseClassification}</div>
            <div>{exercise.weight}:</div>
        </div>
    );
};

export default Exercise;
