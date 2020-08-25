import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap';

import './layout/style/main.css';
// import TestComp from './components/TestComponent/index.jsx';
import Message from './components/Message/index.jsx';

let container = document.getElementById('app')

ReactDom.render( < div > < Message / > <
        /div> , container);