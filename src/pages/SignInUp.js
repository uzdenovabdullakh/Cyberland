//использовать компоненты modal и signin
import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Registration from "../components/Modal/Registration";
import SigIn from "../components/Modal/SignIn"
import Arrow from "../components/Arrow"
import ItcTabs from "../utils/js/ItcTabs"
import './SignInUp.css'
import {instance} from "../utils/axios/axios";
//import { useDispatch } from "react-redux";
import {api} from "../utils/axios/interceptors";
//import {setUser} from '../utils/store/slices/userSlice'
import { AppErrors } from "../utils/errors";



export default function SignInUp(){
    const [isClicked,setClicked]=React.useState(false);
    React.useEffect(() => {
        new ItcTabs('.tabs');
    });

    const [email, setEmail] = useState('')//коллбэк функции
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [secondName, setSecondName] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()
    //const dispatch = useDispatch()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        //регистрация
        if (isClicked){
            if (password===repeatPassword){
                try {
                    const userData = {
                        email,
                        password,
                        name,
                        secondName,
                        phone,
                    }   
                    const newUser = await instance.post('/api/auth/registration',userData)
                    sessionStorage.setItem('id',newUser.data.id)
                    sessionStorage.setItem('email', userData.email)
                    sessionStorage.setItem('name', userData.name)
                    sessionStorage.setItem('secondName', userData.secondName)
                    sessionStorage.setItem('phone', userData.phone)
                    navigate("/chooseyourdestiny")
                    //await dispatch(setUser())
                    /*await dispatch(setUser({
                        email: userData.email,
                        id: newUser.data.id,
                        name:userData.name,
                        secondName: userData.secondName,
                        phone: userData.phone,
                    }
                    ))*/
                } catch(e){
                    console.log(e.message)
                    return e
                }
            }
            else {
                throw new Error(AppErrors.PasswordDoNotMatch)
            }
        }
        //авторизация
        else {
            try {
                const userData = {
                    email,
                    password
                }
                const user = await instance.post('/api/auth/login',userData)
                sessionStorage.setItem('token',user.data.access)
                const allUsers = await api.get('api/users/')//сюда должен прйти еще кастомер или экзекьютор айди нужно будет сделать запрос на api/customers или екзекюторс
                const ourUser = allUsers.data.filter((user) => user.email===`${userData.email}`);
                sessionStorage.setItem('id',ourUser[0].id)
                sessionStorage.setItem('email', userData.email)
                sessionStorage.setItem('name', ourUser[0].name)
                sessionStorage.setItem('secondName', ourUser[0].secondName)
                sessionStorage.setItem('phone', ourUser[0].phone)

                const cust = ourUser[0].customer;
                const exec = ourUser[0].executor;
                if (cust){
                    sessionStorage.setItem('customerId',cust.id)
                    sessionStorage.setItem('employment',cust.employment)
                }
                else {
                    sessionStorage.setItem('executorId',exec.id)
                    sessionStorage.setItem('technologies',exec.technologies)
                    sessionStorage.setItem('experience',exec.experience)
                    sessionStorage.setItem('cv',exec.cv)
                }
                navigate('/')
                /*await dispatch(setUser({
                    email: userData.email,
                    token: user.data.access,
                    id: ourUser[0].id,
                    name: ourUser[0].name,
                    secondName: ourUser[0].secondName,
                    phone: ourUser[0].phone,
                }
                ))*/
            } catch(e){
                console.log(e.message)
                return e
            }
        }
    }


    return (
        <main className="signinup_main">
            <div className="wrapper__sign">
            <div className='modal'>
                <div className="tabs">
                    <button className="return"><Link to="/"><Arrow /></Link></button>
                    <nav className="tabs__nav">
                        <div className="tabs__btn regis_tab" role="button" onClick={() => setClicked(true)}>
                            <li>Регистрация</li>
                        </div>
                        <div className="tabs__btn signin_tab tabs__btn_active" role="button" onClick={() => setClicked(false)}>
                            <li>Вход</li>
                        </div>
                    </nav>
                </div>
                <div className='modal-body'>
                    <form action="#" onSubmit={handleSubmit}>
                        {isClicked ? <Registration setSecondName={setSecondName} setName={setName} setPhone={setPhone} setEmail={setEmail}  setPassword={setPassword} setRepeatPassword={setRepeatPassword}/>:
                                     <SigIn setEmail={setEmail} setPassword={setPassword}/>}
                     </form>
                </div>
            </div> 
            </div>
        </main>
    );
    
}


/*
class ItcTabs {
        constructor(target, config) {
            const defaultConfig = {};
            this._config = Object.assign(defaultConfig, config);
            this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
            this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
            this._eventShow = new Event('tab.itc.change');
            this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
            this._events();
            this._init();
        }
        _init() {
            this._elTabs.setAttribute('role', 'tablist');
            this._elButtons.forEach((el, index) => {
            el.dataset.index = index;
            el.setAttribute('role', 'tab');
            });
        }
        show(elLinkTarget) {
            const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
            if (elLinkTarget === elLinkActive) {
                return;
            }
            if (elLinkActive) elLinkActive.classList.remove('tabs__btn_active')
            else return null;
            elLinkTarget.classList.add('tabs__btn_active');
            this._elTabs.dispatchEvent(this._eventShow);
            elLinkTarget.focus();
        }
        showByIndex(index) {
            const elLinkTarget = this._elButtons[index];
            if (elLinkTarget) this.show(elLinkTarget)
            else return null;
        };
        _events() {
            this._elTabs.addEventListener('click', (e) => {
            const target = e.target.closest('.tabs__btn');
            if (target) {
              e.preventDefault();
              this.show(target);
            }
            });
        }
    }


*/