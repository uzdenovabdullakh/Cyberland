import React from "react";
import {Navigate, Outlet} from "react-router-dom"
const PrivateRoute = () => {
    const auth = true;//если ложь то перенаправляет на страницу регистрации
    return auth ? <Outlet /> : <Navigate to="/signinup" />;
};

export default PrivateRoute;