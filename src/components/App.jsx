import React, {useEffect} from 'react';
import Navbar from "./navbar/Navbar";
import './app.css'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Registration from "./authorization/Registration";
import Graph from "./graph/Graph";
import Login from "./authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";
import Calendar from "./calendar/Calendar";
import {getClassifiedWorkouts} from "../actions/classifiedWorkout";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [])

    useEffect(() => {
        dispatch(getClassifiedWorkouts())
    })


    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar/>
                <div className="wrap">
                    {!isAuth ?
                        <Switch>
                            <Route path="/registration" component={Registration}/>
                            <Route path="/login" component={Login}/>
                            <Redirect to='/login'/>
                        </Switch>
                        :
                        <Switch>
                            <Route exact path="/" component={Calendar}/>
                            <Route path="/graphs" component={Graph}/>
                            <Redirect to="/"/>
                        </Switch>
                    }
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
