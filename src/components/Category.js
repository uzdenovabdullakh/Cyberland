import React from "react";
import PropTypes from "prop-types";
import "./Category.css"


function Category(props){

    const handleChoose = (event) => {
       // console.log(event.currentTarget)
        props.onChoose(event.currentTarget.innerHTML) // callback-функция
    }

    const styles = {
        top: props.top,
        left: props.left,
        zIndex:props.zIndex
    }

    return(
        <div className="category__container" style={styles}>
            
            <div className="buttons__container">
                <ul className="buttons__list">
                    <li className="filter__button" role="button" onClick={handleChoose}>Веб-дизайн</li>
                    <li className="filter__button" role="button" onClick={handleChoose}>Backend</li>
                    <li className="filter__button" role="button" onClick={handleChoose}>Frontend</li>
                    <li className="filter__button" role="button" onClick={handleChoose}>SEO-специалист</li>
                    <li className="filter__button" role="button">Smm-специалист</li>
                    <li className="filter__button" role="button">Копирайт</li>
                    <li className="filter__button" role="button">Верстка</li>
                    <li className="filter__button" role="button">Модератор</li>
                </ul>
            </div>
        </div>
    );

}



Category.propTypes = {
    onChoose: PropTypes.func.isRequired,
}
export default Category;