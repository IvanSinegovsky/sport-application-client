import React, {useState} from 'react';
import './authorization.css'
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";
import {Button, InputAdornment, MenuItem, TextField, Typography} from "@material-ui/core";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleEmailChange = event => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

    return (
        <div className='authorization'>
            <Typography variant="h4" component="div" style={{ flexGrow: 1 }}>
                Sign in
            </Typography>
            <TextField
                value={email}
                required="true"
                label="Email"
                onChange={handleEmailChange}
                style={{width: 400, paddingBottom: 10}}
            />
            <TextField
                value={password}
                type="password"
                required="true"
                label="Password"
                onChange={handlePasswordChange}
                style={{width: 400, paddingBottom: 40}}
            />
            <Button variant="contained"
                    color="white"
                    onClick={() => dispatch(login(email, password))}>Sign in</Button>
        </div>
    );
};

export default Login;
