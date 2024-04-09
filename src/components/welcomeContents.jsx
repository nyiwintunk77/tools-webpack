import React, { useRef, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import s from 'styles/contents.scss';
import {useNavigate} from 'react-router-dom';

const welcomeContents = () => {
    const navigate = useNavigate();

    const handleClickToDoList = () => {
        navigate('/todolist');
    }

    const handleClickStylingTools = () => {
        navigate('/styling-tools');
    }

    const handleClick = () => {
        navigate('/styling-tools');
    }

    return (
        <>
            {/* <AppBar position="relative">
                <Toolbar>
                <CameraIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    Album layout
                </Typography>
                </Toolbar>
            </AppBar> */}
            <div className={ s('frame') }>
                <div className={ s('frame-title') }>
                    <div className={ s('icon') }>
                        <listIcon />
                    </div>
                    <span className={ s('primary') }>All list tools</span>
                    <article>
                        <dl>
                            <dt className={ s('list') } onClick={handleClickToDoList}>TodoLists Tool</dt>
                            <dd>Help individuals and teams manage tasks and projects effectively</dd>
                            <dt className={ s('list') } onClick={handleClickStylingTools}>Solve Styles Tool</dt>
                            <dd>Go to Styling-Tool Page for deleting styles</dd>
                            <dt className={ s('list') } onClick={handleClick}>Solve Links Tool</dt>
                            <dd>Go to Styling-Tool Page for adjusting links</dd>
                        </dl>
                    </article>
                </div>
            </div>
            <div className={ s('footer') }>
                <div className={ s('darkmode-switch') }>
                    <span>LIGHT</span>
                    <label className={ s('switch') }>
                        <input type='checkbox' className={ s('toggle-darkmode') }></input>
                        <div></div>
                    </label>
                    <span>DARK</span>
                </div>
                <div className={ s('container') }>
                    <div>
                        <h4>Links</h4>
                        <a href="https://www.google.com/" rel="noopener" target="_blank">Home</a>
                        <a href="https://www.google.com/" rel="noopener" target="_blank">OS Documentation</a>
                    </div>
                    <div>
                        <h4>Platforms</h4>
                        <a href="https://www.google.com/" rel="noopener" target="_blank">Docker</a>
                    </div>
                    <div>
                        <h4>Development</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

const listIcon = () => {
    return <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M1.5 25C1.5 12.0214 12.0213 1.5 25 1.5C37.9787 1.5 48.5 12.0214 48.5 25C48.5 37.9787 37.9787 48.5 25 48.5C12.0213 48.5 1.5 37.9787 1.5 25Z" stroke="#BF0000" strokeWidth="3"/>
	<path d="M20.4972 38.5787L18.5645 36.6461L29.8569 25.3542L30.2105 25.0007L29.857 24.6471L18.5645 13.3541L20.4972 11.4215L34.0757 25.0007L20.4972 38.5787Z" fill="#BF0000" stroke="#BF0000"/>
	</svg>
}

export default welcomeContents;