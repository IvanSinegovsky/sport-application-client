import React from 'react';
import './file.css'
import dirLogo from '../../../../assets/img/day.svg'
import fileLogo from '../../../../assets/img/file.svg'
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, setCurrentDay} from "../../../../reducers/workoutReducer";
import {deleteWorkout} from "../../../../actions/workout";
import sizeFormat from "../../../../utils/sizeFormat";
const File = ({file}) => {
    const dispatch = useDispatch()
    const currentDay = useSelector(state => state.workouts.currentDay)
    const fileView = useSelector(state => state.workouts.view)

    function openDirHandler(file) {
        if(file.type === 'dir') {
            dispatch(pushToStack(currentDay))
            dispatch(setCurrentDay(file._id))
        }
    }

    function deleteClickHandler(e) {
        e.stopPropagation()
        dispatch(deleteWorkout(file))
    }

    if (fileView === 'list') {
        return (
            <div className='file' onClick={() => openDirHandler(file)}>
                <img src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file__img"/>
                <div className="file__name">{file.name}</div>
                <div className="file__date">{file.date.slice(0, 10)}</div>
                <div className="file__size">{sizeFormat(file.size)}</div>
                <button onClick={(e) => deleteClickHandler(e)} className="file__btn file__delete">delete</button>
            </div>
        );
    }
    if (fileView === 'plate') {
        return (
            <div className='file-plate' onClick={() => openDirHandler(file)}>
                <img src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file-plate__img"/>
                <div className="file-plate__name">{file.name}</div>
                <div className="file-plate__btns">
                    <button onClick={(e) => deleteClickHandler(e)} className="file-plate__btn file-plate__delete">delete</button>
                </div>
            </div>
        );
    }

};

export default File;
