import React from 'react'
import Header from 'components/header.jsx';
import ContentsFunc from 'container/contentsFunc.jsx';
import Description from 'components/description.jsx';
import BackFunc from 'components/backFunc.jsx';
import s from 'styles/homepage.scss';

const homepage = () => {
    return (
        <>
            <div className={s('back')}>
                <BackFunc/>
            </div>
            <div className={s('home')}>
                <Header/>
                <ContentsFunc/>
            </div>
            <div className={ s('howTo') }>
                <Description/>
            </div>
        </>
    )
}

export default homepage;