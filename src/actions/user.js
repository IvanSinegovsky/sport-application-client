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
        alert('registration passed');
    } catch (e) {
        alert(e)
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}/api/v1/auth/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            alert('login successfully passed')
        } catch (e) {
            alert('login had some error')
            alert(e)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}api/v1/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}

export const uploadAvatar =  (workout) => {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('workout', workout)
            const response = await axios.post(`${API_URL}api/workouts/avatar`, formData,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const deleteAvatar =  () => {
    return async dispatch => {
        try {
            const response = await axios.delete(`${API_URL}api/workouts/avatar`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}
