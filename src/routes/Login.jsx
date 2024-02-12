import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        navigate("/");
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input name="email" onChange={e => setEmail(e.target.value)} placeholder="Email" value={email} />
                <input type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="Password" value={password} />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login;
