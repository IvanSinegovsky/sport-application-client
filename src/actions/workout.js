import axios from "axios";
import {API_URL} from "../config";
import {setWorkouts} from "../reducers/workoutReducer";

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

//todo change exercises to list or array type
export function createWorkout(date, exercises) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/v1/calendar/workouts`, {
                date,
                exercises
            }, {
                headers: {Authorization: `${localStorage.getItem('token')}`}
            });
            dispatch(setWorkouts(response.data))
            console.log(response.data)
        } catch (e) {
            alert(e.response.data)
        }
    }
}
