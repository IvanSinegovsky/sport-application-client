import React, {useState} from 'react';
import './navbar.css'
import {NavLink, Route, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";
import {AppBar, Button, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import DateRangeIcon from '@material-ui/icons/DateRange';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import SetAGoalDialog from "../calendar/popup/SetAGoalDialog.js";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: 100
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const navbarButtonStyle={
    textDecoration: 'none',
    color: 'white'
}

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    const classes = useStyles();
    const path = `https://github.com/IvanSinegovsky/sport-application-client/tree/development`;

    function redirect() {
        window.location.assign(path);
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div className="navbar">
            <AppBar position="fixed"
                    style={{
                        background: '#8367C7'
                    }}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>SPORTPLAN</Typography>
                    {!isAuth && <Button color="inherit"><NavLink to="/login" style={navbarButtonStyle}>Login</NavLink></Button>}
                    {!isAuth && <Button color="inherit"><NavLink to="/registration" style={navbarButtonStyle}>Register</NavLink></Button>}
                    {isAuth && <Button color="inherit"
                                       onClick={handleClickOpen}
                                       startIcon={<TrackChangesIcon/>}>Set a goal</Button>}
                    {isAuth && <SetAGoalDialog open={open}
                                               onClose={handleClose}>Set a goal</SetAGoalDialog>}
                    {isAuth && <Button color="inherit"
                                       startIcon={<TrendingUpIcon/>}><NavLink to="/graphs" style={navbarButtonStyle}>Workouts monitoring</NavLink></Button>}
                    {isAuth && <Button color="inherit"
                                       startIcon={<DateRangeIcon/>}><NavLink to="/" style={navbarButtonStyle}>Workouts list</NavLink></Button>}
                    {isAuth && <IconButton edge="end"
                                           aria-haspopup="true"
                                           onClick={redirect}
                                           color="inherit">
                            <GitHubIcon/>
                        </IconButton>}
                    {isAuth && <Button color="inherit"
                                       onClick={() => dispatch(logout())}
                                       startIcon={<ExitToAppIcon/>}/>}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
