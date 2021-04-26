import React from 'react';
import UploadWorkout from "./UploadWorkout";
import './uploader.css'
import {useDispatch, useSelector} from "react-redux";
import {hideUploader} from "../../../reducers/uploadReducer";

const Uploader = () => {
    const workouts = useSelector(state => state.upload.workouts)
    const isVisible = useSelector(state => state.upload.isVisible)
    const dispatch = useDispatch()

    return ( isVisible &&
        <div className="uploader">
            <div className="uploader__header">
                <div className="uploader__title">Загрузки</div>
                <button className="uploader__close" onClick={() => dispatch(hideUploader())}>X</button>
            </div>
            {workouts.map(workout =>
                <UploadWorkout key={workout.id} workout={workout}/>
            )}
        </div>
    );
};

export default Uploader;
