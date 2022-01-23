import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/fonts.css';
import './styles/index.scss';
import {App} from './application/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
