import React from 'react';
import ReactDOM from 'react-dom/client';

function Intro(props){
    return<h1>Hi. My name is Ivan Chan</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Intro />);