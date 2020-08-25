import React from 'react';
import ReactDom from 'react-dom';

import './style.css';
import Button from '../Button/index.jsx';


let listenerBtn() => {
    let btn = document.getElementById('btn').addEventListener('click', () => {
        console.log('Нажал кнопку');
    });
    // let msgArr = [];
    // let msgText
    return ( <
        div >
        <
        h1 > Как дела ? < /h1> <
        Button / >
        <
        /div>
    )
}

export default listenerBtn