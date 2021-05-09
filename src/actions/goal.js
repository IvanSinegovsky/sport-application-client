import axios from "axios";
import {API_URL} from "../config";
import {addWorkout, setWorkouts} from "../reducers/workoutReducer";

export function getGoals() {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/v1/goal/get`, {
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

export function createGoal(exerciseClassification, expectedWeight) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/v1/goal/add`, {
                exerciseClassification,
                expectedWeight
            }, {
                headers: {Authorization: `${localStorage.getItem('token')}`}
            });
            dispatch(addWorkout(response.data))
            //todo add to redux
            console.log(response.data)
        } catch (e) {
            alert('some exception in createGoal() method')
            alert(e.response)
        }
    }
}
