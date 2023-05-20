import { useSelector } from "react-redux"

export const useAuth = () => {
    const {email, token, id} = useSelector((state)=>state.user)
    //console.log(isLogged)
    return {
        isAuth: !!sessionStorage.getItem('token'),
        email,
        token,
        id,
    };
}