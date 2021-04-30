import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import appReducer from "./appReducer";
import workoutReducer from "./workoutReducer";

const rootReducer = combineReducers({
    user: userReducer,
    app: appReducer,
    workout: workoutReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
