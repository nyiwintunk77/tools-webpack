import React, { useState, createElement } from 'react';
import {useNavigate} from 'react-router-dom';


const contentsFunc = () => {

    const navigate = useNavigate();

    const backClick = () => {
        navigate('/');
    }

    return (   
        <>
            <a href="#" onClick={backClick}>HOME&nbsp;&lt;&lt;</a>
        </>
    )
}

export default contentsFunc;