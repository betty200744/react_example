import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 注意, 因为用了react-scripts， 所有index.html 会自动查找index.js

ReactDOM.render(<App name="betty" age="12" />, document.getElementById('root'));
