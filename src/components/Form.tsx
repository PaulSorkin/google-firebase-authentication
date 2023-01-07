import {FC, useState} from "react";

interface FormProps {
    title: string;
    handleClick: (email: string, pass: string) => void;
}

const Form: FC<FormProps> = ({title, handleClick}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault();
            handleClick(email, pass)
        }}>
            <div className="form-control">
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="password"
                />
            </div>
            <div className="form-actions">
                <button onClick={() => handleClick(email, pass)}>
                    {title}
                </button>
            </div>
        </form>
    );
};


export {Form};