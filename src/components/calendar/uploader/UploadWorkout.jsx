import React from 'react';
import './uploader.css';
import {useDispatch} from "react-redux";
import {removeUploadWorkout} from "../../../reducers/uploadReducer";

const UploadWorkout = ({workout}) => {
    const dispatch = useDispatch()

    return (
        <div className="upload-workout">
            <div className="upload-workout__header">
                <div className="upload-workout__name">{workout.name}</div>
                <button className="upload-workout__remove" onClick={() => dispatch(removeUploadWorkout(workout.id))}>X</button>
            </div>
            <div className="upload-workout__progress-bar">
                <div className="upload-workout__upload-bar" style={{width: workout.progress + "%"}}/>
                <div className="upload-workout__percent">{workout.progress}%</div>
            </div>
        </div>
    );
};

export default UploadWorkout;
