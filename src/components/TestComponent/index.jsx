import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

let test = props => {
        let arr = ['React', 'Vue', 'JS'];
        let html = arr.map(name => {
            return ( <
                h1 > Test { name } < /h1>
            )
        })

        return ( < div > { html } < /div>)
        }

        export default test