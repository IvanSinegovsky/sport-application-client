import React from 'react';
import {useDispatch} from "react-redux";
import {deleteAvatar, uploadAvatar} from "../../actions/user";

const Profile = () => {
    const dispatch = useDispatch()

    function changeHandler(e) {
        const workout = e.target.workouts[0]
        dispatch(uploadAvatar(workout))
    }

    return (
        <div>
            <button onClick={() => dispatch(deleteAvatar())}>Удалить аватар</button>
            <input accept="image/*" onChange={e => changeHandler(e)} type="workout" placeholder="Загрузить аватар"/>
        </div>
    );
};

export default Profile;
