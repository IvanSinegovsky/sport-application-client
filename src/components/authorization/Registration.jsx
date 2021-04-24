import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")

    // TODO REPEAT PASSWORD FIELD AND MATCH IT
    return (
        <div className='authorization'>
            <div className="authorization__header">Регистрация</div>
            <Input value={firstName} setValue={setFirstname} type="text" placeholder="Введите имя..."/>
            <Input value={lastName} setValue={setLastname} type="text" placeholder="Введите фамилию..."/>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
            <button className="authorization__btn" onClick={() => registration(firstName, lastName, email, password)}>
                Зарегистрироваться</button>
        </div>
    );
};

export default Registration;
