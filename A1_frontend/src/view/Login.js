import React from "react";

const Login = ({ usernamed, passwordd, onLogin, onChange }) => (
    <div>
        <h2>Login</h2>
        <div>
            <label>Username: </label>
            <input value={usernamed} onChange={ e => onChange("usernamed", e.target.value)} />
            <br />
            <label>Password: </label>
            <input value={passwordd} onChange={ e => onChange("passwordd", e.target.value)} />
            <br />
            <button onClick = {onLogin}>Login</button>
        </div>
    </div>
);

export default Login;