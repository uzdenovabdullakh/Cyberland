import React from "react";
import Category from "../components/Category"
import "./MainPage.css"
import ChoosedFilter from "../components/ChoosedFilter";
import Hamburger from "../components/Hamburger";
import { Navigate, useNavigate } from "react-router-dom";
import {api} from '../utils/axios/interceptors'
import SearchComponent from "../components/SearchComponent";


export default function MainPage(){
        const [isClicked,setClicked]=React.useState(false);//для открытия фильтров
        const [isDel, setDel] = React.useState(false) //коллбэк на нажатие удаления выбранного фильтра
        const [value, setValue] = React.useState('')//для получения текста выбранного фильтра
        const [isChoosed, setChoosed,] = React.useState(false) //коллбэк на нажатие на фильтр
        const [searchText, setSearchText] = React.useState('')
        const navigate = useNavigate()

        const handleChoose = (value) => {
          setValue(value)//устанвлиаем текст
          setChoosed(true)//устанавливаем что фильтр выбран
          setClicked(false)//устанавливаем чтобы скрылась панель с фильтрами
          setDel(false)
        } 
        const handleDel = (value) => {
          setDel(value)
          setValue("")
          //setChoosed(false)
        }

        // тут отправка текста
        /*здесь передача текста из запроса на сервер и переход на страницу поиска, 
        текст должен передаться на страницу поиска 
        также должны передаваться выбранные фильтры
        */
        
        const handleSearch = (e) => {
            e.preventDefault();
            navigate('/search')
            sessionStorage.setItem('searchText',searchText)
            sessionStorage.setItem('type',value)
        }

        return(
            <main className="main_page">
                <Hamburger />
                <div className="wrapper">
                    <div className="container">
                        <h1>
                            <span>Найти</span> <br /> место в IT
                        </h1>
                        <form id="search_form" action="#" onSubmit={handleSearch}>
                            <SearchComponent setClicked={setClicked} isClicked={isClicked} setSearchText={setSearchText}></SearchComponent>
                        </form>
                        {isChoosed && !isDel ? <ChoosedFilter val={value} onDel={handleDel}/> : false}
                    </div>
                    {isClicked ? <Category onChoose={handleChoose} /> : false}
                </div>
            </main>
        );
}