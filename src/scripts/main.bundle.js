import React from 'react';
import { render } from 'react-dom';

import Router from './components/Router';
import '../fonts/stylesheet.css';
import '../styles/app.css';

render(<Router/>, document.querySelector('#root'));