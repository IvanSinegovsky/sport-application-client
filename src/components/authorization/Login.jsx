import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {useDispatch} from "react-redux";
import {login} from "../../actions/user";
import {Button} from "@material-ui/core";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='authorization'>
            <div className="authorization__header">Авторизация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
            <Button variant="contained"
                    color="primary"
                    onClick={() => dispatch(login(email, password))}>Sign in</Button>
        </div>
    );
};

export default Login;
