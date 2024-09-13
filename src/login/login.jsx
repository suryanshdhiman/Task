// src/components/LoginPage.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/authSlice";
import "./login.css";
import Todo from "../Todo/todo";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === "admin@gmail.com" && password === "123456") {
            dispatch(login({ email, password }));
            setError(""); 
        } else {
            setError("Invalid email or password.");
        }
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="">
            {!isAuthenticated ? (
                <div className="login-container">
                <form className="login-form" onSubmit={handleLogin}>
                    <h2>Login</h2>
                    {error && <p className="error-message" style={{ color: "red" }}>{error}</p>}
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            placeholder='admin@gmail.com'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            placeholder='123456'
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" style={{ backgroundColor: "green" }}>Login</button>
                </form>
                </div>
            ) : (
                <Todo  handleLogout={handleLogout}/>
             
            )}
        </div>
    );
};

export default LoginPage;
