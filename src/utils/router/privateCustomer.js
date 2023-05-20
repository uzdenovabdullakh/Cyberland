import React from "react";
import {Outlet} from "react-router-dom"
//import { useAuth } from "../hooks/useAuth";
const PrivateCustomer = () => {
    //const {isAuth} = useAuth();//если ложь то перенаправляет на страницу регистрации
    const isCustomer = !!sessionStorage.getItem('customerId');
   
    return isCustomer ? <Outlet /> : <div>Вы не авторизовались или вы не заказчик</div>;

    /*добавить сюда chooserole, чтобы только после регистрации можно было переходить на него */
};

export default PrivateCustomer;