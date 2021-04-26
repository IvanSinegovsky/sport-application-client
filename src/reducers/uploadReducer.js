const SHOW_UPLOADER = 'SHOW_UPLOADER'
const HIDE_UPLOADER = 'HIDE_UPLOADER'
const ADD_UPLOAD_workout = 'ADD_UPLOAD_workout'
const REMOVE_UPLOAD_workout = 'REMOVE_UPLOAD_workout'
const CHANGE_UPLOAD_workout = 'CHANGE_UPLOAD_workout'


const defaultState = {
    isVisible: false,
    workouts: []
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SHOW_UPLOADER: return {...state, isVisible: true}
        case HIDE_UPLOADER: return {...state, isVisible: false}
        case ADD_UPLOAD_workout:
            return {...state, workouts: [...state.workouts, action.payload]}
        case REMOVE_UPLOAD_workout:
            return {...state, workouts: [...state.workouts.filter(workout => workout.id != action.payload)]}
        case CHANGE_UPLOAD_workout:
            return {
                ...state,
                workouts: [...state.workouts.map(workout => workout.id == action.payload.id
                    ? {...workout, progress: action.payload.progress}
                    : {...workout}
                )]
            }
        default:
            return state
    }
}


export const showUploader = () => ({type: SHOW_UPLOADER})
export const hideUploader = () => ({type: HIDE_UPLOADER})
export const addUploadWorkout = (workout) => ({type: ADD_UPLOAD_workout, payload: workout})
export const removeUploadWorkout = (workoutId) => ({type: REMOVE_UPLOAD_workout, payload: workoutId})
export const changeUploadWorkout = (payload) => ({type: CHANGE_UPLOAD_workout, payload: payload})
