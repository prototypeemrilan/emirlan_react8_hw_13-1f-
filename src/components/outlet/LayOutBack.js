import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";



function LayOutBack(props) {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <Outlet/>
        </div>

    );
}

export default LayOutBack;