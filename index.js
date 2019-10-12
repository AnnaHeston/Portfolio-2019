import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';




const links = [
  {
    name: "EMAIL",
    url: "mailto:amheston@gmail.com",
    id:1,
  },
  {
    name: "CODEPEN",
    url: "https://codepen.io/amheston",
    id:2,
  },
  {
    name: "GITHUB",
    url: "https://github.com/AnnaHeston",
    id:3,
  },
  
];



ReactDOM.render(<App linksList={ links } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
