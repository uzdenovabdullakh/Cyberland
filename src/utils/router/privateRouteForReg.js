import React from "react";
import {Navigate, Outlet} from "react-router-dom"
//import { useAuth } from "../hooks/useAuth";
const PrivateRouteForReg = () => {
    //const {isAuth} = useAuth();//если ложь то перенаправляет на страницу регистрации
    const isRegged = !!sessionStorage.getItem('id');
   
    return isRegged ? <Outlet /> : <Navigate to="/signinup" />;

    /*добавить сюда chooserole, чтобы только после регистрации можно было переходить на него */
};

export default PrivateRouteForReg;