import React, { useState } from "react";
import "./Login.css"

export default function Login({setToken}) {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    function handleUsername (e) {
        e.preventDefault()
        setUsername(e.target.value)
    }

    function handlePassword (e) {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const token = {
            username,
            password
        }
        setToken(token)
    }



    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={handleUsername}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={handlePassword}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}