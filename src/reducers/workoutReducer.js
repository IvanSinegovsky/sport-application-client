const SET_WORKOUTS = "SET_WORKOUTS"
const ADD_WORKOUT = "ADD_WORKOUT"
const SET_POPUP_DISPLAY = "SET_POPUP_DISPLAY"
const DELETE_WORKOUT = "DELETE_WORKOUT"
const SET_VIEW = "SET_VIEW"
const SET_CLASSIFIED_WORKOUTS = "SET_CLASSIFIED_WORKOUTS"

const defaultState = {
    workouts: [],
    classifiedWorkouts: [],
    popupDisplay: 'none',
    view: 'list'
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case SET_WORKOUTS: return {...state, workouts: action.payload}
        case ADD_WORKOUT: return {...state, workouts: [...state.workouts, action.payload]} //дословно про кейс: изменяем массив файлов, в котором разворачиваем старый массив, в старый массив добавляется один элемент из экшна - добавленная тренировка
        case SET_POPUP_DISPLAY: return {...state, popupDisplay: action.payload}
        case DELETE_WORKOUT: return {...state, workouts: [...state.workouts.filter(
            workout => workout.date != action.payload
            )]}
        case SET_VIEW: return {...state, view: action.payload}
        case SET_CLASSIFIED_WORKOUTS: return {...state, classifiedWorkouts: action.payload}
        default:
            return state
    }
}

//экшны
export const setWorkouts = (workouts) => ({type: SET_WORKOUTS, payload: workouts})
export const addWorkout = (workout) =>({type: ADD_WORKOUT, payload: workout})
export const setPopupDisplay = (display) =>({type: SET_POPUP_DISPLAY, payload: display})
export const deleteWorkoutAction = (date) =>({type: DELETE_WORKOUT, payload: date})
export const setWorkoutView = (payload) =>({type: SET_VIEW, payload})
export const setClassifiedWorkouts = (classifiedWorkouts) =>({type: SET_CLASSIFIED_WORKOUTS, payload: classifiedWorkouts})
