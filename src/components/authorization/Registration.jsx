import React, {useState} from 'react';
import './authorization.css'
import {registration} from "../../actions/user";
import {Button, TextField, Typography} from "@material-ui/core";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")

    const handleFirstNameChange = event => {
        setFirstname(event.target.value)
    }

    const handleLastNameChange = event => {
        setLastname(event.target.value)
    }

    const handleEmailChange = event => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

    return (
        <div className='authorization'>
            <Typography variant="h4" component="div" style={{ flexGrow: 1 }}>
                Sign up
            </Typography>
            <TextField
                value={firstName}
                required="true"
                label="Firstname"
                onChange={handleFirstNameChange}
                style={{width: 400, paddingBottom: 10}}
            />
            <TextField
                value={lastName}
                required="true"
                label="Lastname"
                onChange={handleLastNameChange}
                style={{width: 400, paddingBottom: 10}}
            />
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
                    onClick={() => registration(firstName, lastName, email, password)}>Sign up</Button>
        </div>
    );
};

export default Registration;
