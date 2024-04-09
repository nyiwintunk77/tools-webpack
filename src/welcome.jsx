import React from 'react'
import s from 'styles/homepage.scss';
import Header from 'components/header.jsx';
import WelcomeFunc from 'container/welcomeFunc.jsx';


const welcome = () => {

    return (
        <>
        <div className={s('home')}>
            <Header/>
            <WelcomeFunc/>
        </div>
    </>
    )
}

export default welcome;