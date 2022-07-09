import { Outlet } from "react-router-dom";
import Header from "../header/Header";

import React from 'react';

function LayOut() {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}

export default LayOut;