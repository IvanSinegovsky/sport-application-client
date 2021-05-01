import axios from 'axios'
import {setUser} from "../reducers/userReducer";
import {API_URL} from "../config";

export const registration = async (firstName, lastName, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/api/v1/auth/registration`, {
            firstName,
            lastName,
            email,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login =  (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/v1/auth/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.token))// setUser -> setToken (токен мы отдаем такую переменную на бэкенде в респонсэнтити)
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}/api/v1/auth/auth`,
                {headers:{authorization:`${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.token))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}
