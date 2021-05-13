const SET_WORKOUTS_CLASSIFICATION = "SET_WORKOUTS_CLASSIFICATION"

const defaultState = {
    workoutsClassification: [],
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case SET_WORKOUTS_CLASSIFICATION: return {...state, workoutsClassification: action.payload}
        default:
            return state
    }
}

export const setWorkoutsClassification = (workoutsClassification) => ({type: SET_WORKOUTS_CLASSIFICATION, payload: workoutsClassification})
