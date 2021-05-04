import axios from "axios";
import {API_URL} from "../config";
import {addWorkout, deleteWorkoutAction, setClassifiedWorkouts, setWorkouts} from "../reducers/workoutReducer";

export function getWorkouts() {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/v1/calendar/workouts`, {
                headers: {Authorization: `${localStorage.getItem('token')}`}
            });
            dispatch(setWorkouts(response.data))
            console.log(response.data)
        } catch (e) {
            alert(e.response.data)
        }
    }
}

export function createWorkout(date, exercises) {
    return async dispatch => {
        try {
            console.log(date)
            console.log(exercises)
            const response = await axios.post(`${API_URL}/api/v1/calendar/add`, {
                date,
                exercises
            }, {
                headers: {Authorization: `${localStorage.getItem('token')}`}
            });
            dispatch(addWorkout(response.data))
            console.log(response.data)
        } catch (e) {
            alert(e.response)
        }
    }
}

export function deleteWorkout(workout) {
    return async dispatch => {
        try {
            console.log(workout.date)
            const response = await axios.delete(`${API_URL}/api/v1/calendar/delete?date=${workout.date}`,{
                headers: {Authorization: `${localStorage.getItem('token')}`}
            });
            dispatch(deleteWorkoutAction(workout.date))
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }
}

export function getClassifiedWorkouts() {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/v1/calendar/classified_workouts`, {
                headers: {Authorization: `${localStorage.getItem('token')}`}
            });
            dispatch(setClassifiedWorkouts(response.data))
            console.log(response.data)
        } catch (e) {
            alert(e.response.data)
        }
    }
}
