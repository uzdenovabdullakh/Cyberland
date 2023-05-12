//использовать компоненты modal и signin
import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Registration from "../components/Modal/Registration";
import SigIn from "../components/Modal/SignIn"
import Arrow from "../components/Arrow"
import ItcTabs from "../utils/js/ItcTabs"
import './SignInUp.css'
import {instance} from "../utils/axios/axios";
import { useDispatch } from "react-redux";
import { login } from "../utils/store/slice/auth";



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
    const navigate = useNavigate();
    const dispatch = useDispatch()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        //регистрация
        if (isClicked){
            const userData = {
                name,
                secondName,
                phone,
                email,
                password
            }
            //const newUser = await instance.post('/api/auth/registration',userData)
            navigate("/chooseyourdestiny")
           // console.log(newUser.data)
            
            console.log("registr")
        }
        //авторизация
        else {
            const userData = {
                email,
                password
            }
            const user = await instance.post('/api/auth/login',userData)
            dispatch(login(user.data))
            console.log(user.data)
            console.log("login")
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