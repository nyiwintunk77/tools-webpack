import React from "react";
import s from 'styles/header.scss';


const header = () => {
    return (
        <header>
            <div className={ s('header-layout') }>
                <h2>ペイメント配信ツール</h2>
            </div>
        </header>
    )
}

export default header;