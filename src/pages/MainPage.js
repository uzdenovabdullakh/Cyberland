import React from "react";
import Category from "../components/Category"
import "./MainPage.css"
import ChoosedFilter from "../components/ChoosedFilter";
import Hamburger from "../components/Hamburger";
import { useNavigate } from "react-router-dom";


export default function MainPage(){
        const [isClicked,setClicked]=React.useState(false);//для открытия фильтров
        const [isDel, setDel] = React.useState(false) //коллбэк на нажатие удаления выбранного фильтра
        const [value, setValue] = React.useState('')//для получения текста выбранного фильтра
        const [isChoosed, setChoosed,] = React.useState(false) //коллбэк на нажатие на фильтр
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
        const [searchText, setSearchText] = React.useState('')
        const handleSearch = async (e) => {
            e.preventDefault();
            navigate('/search')
            console.log(searchText)
            console.log(value);
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
                            <input name="search_input" type="text" id="search_input" required placeholder="..." maxLength="40" onChange={(e)=>setSearchText(e.target.value)}/>
                            <div className="icon"></div>
                            <input type="button" className="category_filter" onClick={() => setClicked(!isClicked)}></input>
                            <button type="submit" id="search_button">Поиск</button>
                        </form>
                        {isChoosed && !isDel ? <ChoosedFilter val={value} onDel={handleDel}/> : false}
                    </div>
                    {isClicked ? <Category onChoose={handleChoose} /> : false}
                </div>
            </main>
        );
}