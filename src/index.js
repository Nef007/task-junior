import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const data = require('./data.json');


ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);
