import axios from "axios";
import {API_URL} from "../config";
import {addWorkout, setWorkouts} from "../reducers/workoutReducer";
import {addGoal} from "../reducers/goalReducer";

export function getGoals() {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/v1/goal/goals`, {
                headers: {Authorization: `${localStorage.getItem('token')}`}
            });
            dispatch(setWorkouts(response.data))
            //todo add to redux
            console.log(response.data)
        } catch (e) {
            alert('some exception in getGoals() method')
            alert(e.response.data)
        }
    }
}

export function createGoal(exerciseClassification, weight) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/v1/goal/add`, {
                exerciseClassification,
                weight
            }, {
                headers: {Authorization: `${localStorage.getItem('token')}`}
            });
            dispatch(addGoal(response.data))
            console.log(response.data)
        } catch (e) {
            alert(e.response)
        }
    }
}
