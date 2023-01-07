import React from 'react';
import {Link} from "react-router-dom";
import {SignUp} from "../components/SignUp";

const RegisterPage = () => {
    return (
        <div className="container">
            <h1>Sign up</h1>
            <SignUp />
            <p>
                Already have an account? <Link to="/login">Sign in</Link>
            </p>
        </div>

    );
};

export default RegisterPage;