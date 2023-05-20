import React, { Fragment } from "react";

export default function SearchComponent(props){
    const {setClicked, isClicked, setSearchText}=props
    return(
        <Fragment>
        <input name="search_input" type="text" id="search_input" required placeholder="..." maxLength="40" onChange={(e)=>setSearchText(e.target.value)}/>
        <div className="icon"></div>
        <input type="button" className="category_filter" onClick={() => setClicked(!isClicked)}></input>
        <button type="submit" id="search_button">Поиск</button>
        </Fragment>
    );
}