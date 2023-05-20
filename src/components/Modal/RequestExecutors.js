import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import "./Modal.css"

function RequestExecutors(props){
    const {setIsClose,name} = props

    return (
        <div className='modal-req'>
            <div className="modal-body-req">
                <span onClick={()=>(setIsClose(false))} role="button" className="close_modal">&times;</span>
                <h1 className="modal-body-req-h1">Отклики</h1>
                <div className="req_list">
                    <Link to='/id=exec' className="executor_name_link">{name}</Link>
                </div>
            </div>
        </div>
    );
}

RequestExecutors.propTypes = {
    setIsClose: PropTypes.func.isRequired,
}


export default RequestExecutors;