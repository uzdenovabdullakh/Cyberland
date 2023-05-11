//использовать компоненты modal и signin
import React,{useState} from "react";
import { Link } from "react-router-dom";
import Registration from "../components/Modal/Registration";
import SigIn from "../components/Modal/SignIn"
import Arrow from "../components/Arrow"
import ItcTabs from "../utils/js/ItcTabs"
import './SignInUp.css'
import {instance} from "../utils/axios/axios";



export default function SignInUp(){
    const [isClicked,setClicked]=React.useState(false);
    React.useEffect(() => {
        new ItcTabs('.tabs');
    });

    const [phone, setPhone] = useState('')//коллбэк функции
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        //регистрация
        if (isClicked){
            const userData = {
                phone,
                password
            }
            //const newUser = await instance.post(url,userData)
            console.log("registr")
        }
        //авторизация
        else {
            const userData = {
                phone,
                password
            }
            //const user = await instance.post(url,userData)
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
                        {isClicked ? <Registration setPhone={setPhone} setPassword={setPassword} setRepeatPassword={setRepeatPassword}/>:
                                    <SigIn setPhone={setPhone} setPassword={setPassword}/>}
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