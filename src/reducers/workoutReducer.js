const SET_WORKOUTS = "SET_WORKOUTS"
const ADD_WORKOUT = "ADD_WORKOUT"

const defaultState = {
    workouts: []
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case SET_WORKOUTS: return {...state, workouts: action.payload}
        case ADD_WORKOUT: return {...state, workouts: [...state.workouts, action.payload]}
        //дословно про верхний кейс: изменяем массив файлов, в котором разворачиваем старый массив,
        //в старый массив добавляется один элемент из экшна - добавленная тренировка
        default:
            return state
    }
}

//экшны
export const setWorkouts = (workouts) => ({type: SET_WORKOUTS, payload: workouts})
export const addWorkout = (workout) =>({type: ADD_WORKOUT, payload: workout})
