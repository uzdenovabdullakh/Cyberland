import React from "react";
import {Navigate, Outlet} from "react-router-dom"
const PrivateRoute = () => {
    const auth = true;//если ложь то перенаправляет на страницу регистрации
    return auth ? <Outlet /> : <Navigate to="/signinup" />;

    {/*добавить сюда chooserole, чтобы только после регистрации можно было переходить на него */}
};

export default PrivateRoute;