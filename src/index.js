import React from 'react'; //main React library
import ReactDOM from 'react-dom'; //
import App from './App';


ReactDOM.render(
  <App cat={5} txt="this is the prop value"/>,
  document.getElementById('root')
);
