//import React from 'react';
import {Navigate} from "react-router-dom";
import {useAuth} from "../hooks/use-auth";
import {removeUser} from "../store/slices/userSlice";
import {useAppDispatch} from "../hooks/redux-hooks";

const HomePage = () => {
    const {isAuth, email} = useAuth();
    const dispatch = useAppDispatch();

    return isAuth ? (
        <div className="container">
            <h1>Welcome</h1>

            <div className="form-actions"   >
                <button
                    onClick={() => dispatch(removeUser())}
                >Log out from {email}</button>
            </div>
        </div>
    ) : (
        <Navigate to="/login" />
    );
};

export default HomePage;