import React from 'react';
import {Link} from "react-router-dom";

const RegisterPage = () => {
    return (
        <div>
            <h1>Sign up</h1>

            <p>
                Already have an account? <Link to="/login">Sign in</Link>
            </p>
        </div>

    );
};

export default RegisterPage;