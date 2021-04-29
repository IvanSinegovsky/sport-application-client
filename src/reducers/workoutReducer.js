const SET_WORKOUTS = "SET_WORKOUTS"
const SET_CURRENT_DAY = "SET_CURRENT_DAY"
const ADD_WORKOUT = "WORKOUT"
const SET_POPUP_DISPLAY = "SET_POPUP_DISPLAY"
const PUSH_TO_STACK = "PUSH_TO_STACK"
const DELETE_WORKOUTS = 'DELETE_WORKOUTS'
const SET_VIEW = 'SET_VIEW'

const defaultState = {
    workouts: [],
    currentDay: null,
    popupDisplay: 'none',
    dayStack: [],
    view: 'list',
}
// todo вместо информации о файлах - информация о тренировках
export default function workoutReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_WORKOUTS: return {...state, workouts: action.payload}
        case SET_CURRENT_DAY: return {...state, currentDay: action.payload}
        case ADD_WORKOUT: return {...state, workouts: [...state.workouts, action.payload]}
        case SET_POPUP_DISPLAY: return {...state, popupDisplay: action.payload}
        case PUSH_TO_STACK: return {...state, dayStack: [...state.dayStack, action.payload]}
        case DELETE_WORKOUTS: return {...state, workouts: [...state.workouts.filter(workout => workout._id !== action.payload)]}
        case SET_VIEW: return {...state, view: action.payload}
        default:
            return state
    }
}

export const setWorkouts = (workouts) => ({type: SET_WORKOUTS, payload: workouts})
export const setCurrentDay= (day) => ({type: SET_CURRENT_DAY, payload: day})
export const addWorkout = (workout) => ({type: ADD_WORKOUT, payload: workout})
export const setPopupDisplay = (display) => ({type: SET_POPUP_DISPLAY, payload: display})
export const pushToStack = (day) => ({type: PUSH_TO_STACK, payload: day})
export const deleteWorkoutAction = (dayId) => ({type: DELETE_WORKOUTS, payload: dayId})
export const setWorkoutView = (payload) => ({type: SET_VIEW, payload})
