import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import appReducer from "./appReducer";
import workoutReducer from "./workoutReducer";
import popupReducer from "./popupReducer";
import goalReducer from "./goalReducer";
import classifiedWorkoutReducer from "./classifiedWorkoutReducer";

const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer,
    workout: workoutReducer,
    inputsCounter: popupReducer,
    goal: goalReducer,
    classifiedWorkout: classifiedWorkoutReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
