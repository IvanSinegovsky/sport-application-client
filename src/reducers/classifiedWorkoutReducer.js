const SET_CLASSIFIED_WORKOUTS = "SET_CLASSIFIED_WORKOUTS"

const defaultState = {
    classifiedWorkouts: [],
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case SET_CLASSIFIED_WORKOUTS: return {...state, classifiedWorkouts: action.payload}
        default:
            return state
    }
}

export const setClassifiedWorkouts = (classifiedWorkouts) => ({type: SET_CLASSIFIED_WORKOUTS, payload: classifiedWorkouts})
