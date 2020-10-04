import React from 'react';
import ReactDom from 'react-dom';

import Sdata from './Sdata';

function Cards(props){
    return <h1>{props.abc}</h1>;
}

ReactDom.render(
    <>
    <Cards abc='@@@@@@@@@@@@' />
    <p>Hello World!!! {Sdata.sname}</p>
    </>
    ,document.getElementById('root')
)
