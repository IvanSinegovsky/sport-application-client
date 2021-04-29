import axios from 'axios'
import {addWorkout, deleteWorkoutAction, setWorkouts} from "../reducers/workoutReducer";
import {addUploadWorkout, changeUploadWorkout, showUploader} from "../reducers/uploadReducer";
import {hideLoader, showLoader} from "../reducers/appReducer";
import {API_URL} from "../config";

export function getWorkouts(currentDay) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            let url = `${API_URL}api/v1/calendar/workouts`

            const response = await axios.get(url, {
                //headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
                headers: {authorization: localStorage.getItem('token')}
            });
            console.log(response.data)



            dispatch(setWorkouts(response.data))
        } catch (e) {
            alert('smd')
        } finally {
            dispatch(hideLoader())
        }
    }
}

export function createDay(date) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/v1/add`,{
                parent: date,// todo change to workout object
            }, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(addWorkout(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function uploadWorkout(workout, dayId) {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('workout', workout)
            if (dayId) {
                formData.append('parent', dayId)
            }
            const uploadWorkout = {name: workout.name, progress: 0, id: Date.now()}
            dispatch(showUploader())
            dispatch(addUploadWorkout(uploadWorkout))
            const response = await axios.post(`${API_URL}api/workouts/upload`, formData, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
                onUploadProgress: progressEvent => {
                    const totalLength = progressEvent.lengthComputable ? progressEvent.total
                        : progressEvent.target.getResponseHeader('content-length')
                        || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                    if (totalLength) {
                        uploadWorkout.progress = Math.round((progressEvent.loaded * 100) / totalLength)
                        dispatch(changeUploadWorkout(uploadWorkout))
                    }
                }
            });
            dispatch(addWorkout(response.data))
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function deleteWorkout(workout) {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/workouts?id=${workout._id}`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(deleteWorkoutAction(workout._id))
            alert(response.data.message)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function searchWorkouts(search) {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/workouts/search?search=${search}`,{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(setWorkouts(response.data))
        } catch (e) {
            alert(e?.response?.data?.message)
        } finally {
            dispatch(hideLoader())
        }
    }
}
