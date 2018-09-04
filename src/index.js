import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import App from './App';

// 注意, 因为用了react-scripts， 所有index.html 会自动查找index.js


ReactDOM.render((
    <BrowserRouter>
      <App/>
    </BrowserRouter>
), document.getElementById('root'));


