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
        localStorage.setItem('token', response.data.token)
    } catch (e) {
        localStorage.removeItem('token')
        alert('some exception in registration() method')
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
            localStorage.setItem('token', response.data.token)
            dispatch(setUser(response.data.token))
        } catch (e) {
            alert('some exception in login() method')
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
