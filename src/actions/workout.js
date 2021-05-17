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
        } catch (e) {
            alert('some exception in getWorkouts() method')
        }
    }
}

export function createWorkout(date, exercises, description) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/v1/calendar/add`, {
                date,
                exercises,
                description
            }, {
                headers: {Authorization: `${localStorage.getItem('token')}`}
            });
            dispatch(addWorkout(response.data))
            console.log(response.data)
        } catch (e) {
            alert('some exception in createWorkout() method')
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
            alert('some exception in deleteWorkout() method')
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
            alert('some exception in getClassifiedWorkouts() method')
            alert(e.response.data)
        }
    }
}

export function getCurrentClassifiedWorkouts(exerciseClassification) {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/v1/calendar/current_classified_workouts?exerciseClassification=${exerciseClassification}`, {
                headers: {Authorization: `${localStorage.getItem('token')}`}
            });
            dispatch(setClassifiedWorkouts(response.data))
        } catch (e) {
            alert('some exception in getClassifiedWorkouts() method')
            alert(e.response.data)
        }
    }
}

export function getUserWorkoutsDates() {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/v1/calendar/workouts_dates}`, {
                headers: {Authorization: `${localStorage.getItem('token')}`}
            });
            return response.data;
        } catch (e) {
            console.log('cant get users workouts dates')
        }
    }
}
