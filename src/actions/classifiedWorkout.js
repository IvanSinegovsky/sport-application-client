import axios from "axios";
import {API_URL} from "../config";
import {setClassifiedWorkouts} from "../reducers/classifiedWorkoutReducer";

export function getClassifiedWorkouts() {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/v1/classification/exercises_classifications`);
            dispatch(setClassifiedWorkouts(response.data))
        } catch (e) {
            alert(e.response.data)
        }
    }
}
