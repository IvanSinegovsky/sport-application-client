import axios from "axios";
import {API_URL} from "../config";
import {setWorkoutsClassification} from "../reducers/WorkoutClassificationReducer";

export function getClassifiedWorkouts() {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/v1/classification/exercises_classifications`);
            dispatch(setWorkoutsClassification(response.data))
        } catch (e) {
            alert(e.response.data)
        }
    }
}
