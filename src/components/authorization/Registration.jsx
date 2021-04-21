import React, {useState} from 'react';
import './authorization.css'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")

    // TODO REPEAT PASSWORD FIELD AND MATCH IT
    return (
        <div className='authorization'>
            <div className="authorization__header">Регистрация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
            <Input value={firstname} setValue={setFirstname} type="text" placeholder="Введите имя..."/>
            <Input value={lastname} setValue={setLastname} type="text" placeholder="Введите фамилию..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
            <button className="authorization__btn" onClick={() => registration(email, password)}>Зарегистрироваться</button>
        </div>
    );
};

export default Registration;
