export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const SET_DATE = 'SET_DATE'
export const ADD_EXERCISE = 'ADD_EXERCISE'
export const SET_DESCRIPTION = 'SET_DESCRIPTION'
export const CLEAR_WORKOUT_CREATING = 'CLEAR_WORKOUT_CREATING'

const defaultState = {
    counter: 1,
    date: null,
    exercises: [],
    description: ""
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case INCREMENT:
            if (state.counter === 20) {
                return {
                    ...state,
                    counter: state.counter
                }
            }
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            if (state.counter === 1) {
                return {
                    ...state,
                    counter: state.counter
                }
            }
            return {
                ...state,
                counter: state.counter - 1
            }
        case SET_DATE: return {
            ...state,
            date: action.payload
        }
        case ADD_EXERCISE: return {
            ...state,
            exercises: [...state.exercises, action.payload]
        }
        case SET_DESCRIPTION: return {
            ...state,
            description: action.payload
        }
        case CLEAR_WORKOUT_CREATING: return {
            ...state,
            date: null,
            exercises: [],
            description: ""
        }
        default:
            return state
    }
}


export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})
export const addExercise = (exercise) =>({type: ADD_EXERCISE, payload: exercise})
export const setDate = (date) => ({type: SET_DATE, payload: date})
export const setDescription = (description) => ({type: SET_DESCRIPTION, payload: description})
export const clearWorkoutCreating = () => ({type: CLEAR_WORKOUT_CREATING})
