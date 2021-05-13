const SET_WORKOUTS_CLASSIFICATION = "SET_WORKOUTS_CLASSIFICATION"

const defaultState = {
    exercisesClassifications: [],
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case SET_WORKOUTS_CLASSIFICATION: return {...state, exercisesClassifications: action.payload}
        default:
            return state
    }
}

export const setWorkoutsClassification = (exercisesClassifications) => ({type: SET_WORKOUTS_CLASSIFICATION, payload: exercisesClassifications})
