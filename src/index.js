import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import Application from './components/Application';
import './styles/style.scss';

const render  = () => ReactDOM.render(<Application />, document.getElementById('container'));

render()
store.subscribe(render)


