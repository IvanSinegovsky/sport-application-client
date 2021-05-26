import axios from "axios";
import {API_URL} from "../config";
import {addGoal, deleteGoalAction, setGoals} from "../reducers/goalReducer";

export function getGoals() {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/v1/goal/goals`, {
                headers: {Authorization: `${localStorage.getItem('token')}`}
            });
            dispatch(setGoals(response.data))
            console.log(response.data)
        } catch (e) {
            alert('You have not set goals in exercises yet')
        }
    }
}

export function createGoal(exerciseClassificationName, weight) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/v1/goal/add`, {
                exerciseClassificationName: exerciseClassificationName,
                weight: weight
            }, {
                headers: {Authorization: `${localStorage.getItem('token')}`}
            });
            dispatch(addGoal(response.data))
            console.log(response.data)
        } catch (e) {
            console.log('createGoal exception')
        }
    }
}

export function deleteGoal(goal) {
    return async dispatch => {
        console.log(goal)
        try {
            const response = await axios.delete(
                `${API_URL}/api/v1/goal/delete?exerciseClassificationName=${goal.exerciseClassificationName}`,{
                headers: {Authorization: `${localStorage.getItem('token')}`}
            });
            dispatch(deleteGoalAction(goal.exerciseClassificationName))
        } catch (e) {
            alert('some exception in deleteGoal() method')
        }
    }
}
