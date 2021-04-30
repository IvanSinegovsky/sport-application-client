const SET_WORKOUTS = "SET_WORKOUTS"

const defaultState = {
    workouts: []
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case SET_WORKOUTS: return {...state, workouts: action.payload}
        default:
            return state
    }
}

//экшны
export const setWorkouts = (workouts) => ({type: SET_WORKOUTS, payload: workouts})
