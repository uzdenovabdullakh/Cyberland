import React from "react";
import PropTypes from "prop-types";

const del__filter = {
    background: 'red',
    borderRadius: '50%',
    color: '#fff',
    border: 'none',
    marginLeft: 10,
    paddingRight: 5,
    paddingLeft: 5,
    cursor: 'pointer',
}

const choosed__filter_main = {
    padding: 10,
    color: '#000000',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '1rem',
    marginTop: 20,
    marginLeft: 60,
    visibility: 'visible',
}


function ChoosedFilter(props){

    const handleDel = () => {
        props.onDel(true)
     }

    return (
       <div style={choosed__filter_main}>
            {props.val}
            <span role="button" style={del__filter} onClick={handleDel}>&times;</span>
        </div>
    );
    
}

ChoosedFilter.propTypes = {
    onDel: PropTypes.func.isRequired,
}

export default ChoosedFilter;