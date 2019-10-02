import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const experiences = [
  {
    name: "WealthMeta",
    style: "block-1",
    id:1,
  },
  {
    name: "Tualatin Valley",
    description1: "Used jQuery, HTML, and CSS to add responsive homepage carousel to existing website with specific client requests for slide transition, navigation, and lightbox behaviors",
    style: "block-2",
    id:2,
  },
  {
    name: "Chalice Wealth Partners",
    style: "block-3",
    id:3,
  },
  {
    name: "Protalus",
    style: "block-4",
    id:4,
  },
  {
    name: "JTWLLC",
    style: "block-5",
    id:5,
  },
  {
    name: "CapBuilder",
    style: "block-6",
    id:6,
  },
  {
    name: "Heston Home Design",
    style: "block-7",
    id:7,
  },
];


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

ReactDOM.render(<App linksList={ links } experiencesList={ experiences } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
