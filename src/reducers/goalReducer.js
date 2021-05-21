const ADD_GOAL = "ADD_GOAL"
const DELETE_GOAL = "DELETE_GOAL"
const SET_GOALS = "SET_GOALS"

const defaultState = {
    goals: [],
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case ADD_GOAL: return {...state, goals: [...state.goals, action.payload]}
        case DELETE_GOAL: return {...state, goals: [...state.goals.filter(
                goals => goals.exerciseClassificationName !== action.payload
            )]}
        case SET_GOALS: return {...state, goals: action.payload}
        default:
            return state
    }
}

export const addGoal = (goals) =>({type: ADD_GOAL, payload: goals})
export const deleteGoalAction = (exerciseClassificationName) =>({type: DELETE_GOAL, payload: exerciseClassificationName})
export const setGoals = (goals) => ({type: SET_GOALS, payload: goals})
