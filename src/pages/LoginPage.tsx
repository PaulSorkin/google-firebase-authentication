import React from 'react';
import {Link} from "react-router-dom";
import {Login} from "../components/Login";

const LoginPage = () => {
    return (
        <div className="container">
            <h1>Sign in</h1>
            <Login />
            <p>
                Or <Link to="/register">Sign up</Link>
            </p>
        </div>
    );
};

export default LoginPage;