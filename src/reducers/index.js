import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import workoutReducer from "./workoutReducer";
import uploadReducer from "./uploadReducer";
import appReducer from "./appReducer";


const rootReducer = combineReducers({
    user: userReducer,
    workouts: workoutReducer,
    upload: uploadReducer,
    app: appReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
