import React from 'react';
import {useNavigate} from "react-router-dom";

function LoginPage(props) {
    const navigate = useNavigate()

    const loginUser = () => {
        setTimeout(()=> {
            navigate("/blogs", {replace: true, state: "hello"})
        }, 3000)
    }

    return (
        <div className="container">
            <input type="text" placeholder="login"/>
            <input type="text" placeholder="pass"/>
            <button onClick={loginUser}>login</button>
        </div>
    );
}

export default LoginPage;