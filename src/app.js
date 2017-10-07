// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import 'script!jquery'

// Components
import Application from './components/Application';

// CSS
import './styles/style.scss';

ReactDOM.render(<Application />, document.getElementById('container'));
