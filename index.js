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

const descriptions = [
  {
    name: "WealthMeta",
    close: "setWealthMeta",
    description1: "Angular2 and TypeScript to wire up front end on all calculators and wealth management tools",
    description2: "Illustrated data using Chart.js",
    description3: "Front end implementation of wireframes and designs with HTML, CSS, and Bootstrap",
    description4: "Assisted with Django for content management",
    description5: "Provided unit tests using Karma for all wealth calculator functions",
    description6: "Added various plugins to project as needed to enhance the UI (example: sleeker scrollbar)",
    description7: "Made site fully responsive across all browsers",
    description8: "Helped refine design, layout, and function of wealth management tools",
    id:1,
  },
  {
    name: "TualatinValley",
    close: "setTualatinValley",
    description1: "Used jQuery, HTML, and CSS to add responsive homepage carousel to existing website with specific client requests for slide transition, navigation, and lightbox behaviors",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    description6: "",
    description7: "",
    description8: "",
    id:2,
  },
  {
    name: "ChaliceWealthPartners",
    close: "setChaliceWealthPartners",
    description1: "Given Photoshop design files for desktop views, used HTML, SCSS, Bootstrap, and jQuery to create a pixel perfect UI",
    description2: "Expanded design themes for mobile views when provided with wireframes only to make a fully responsive site across browsers",
    description3: "Wired front end to content management system with Django",
    description4: "Worked with project manager, design team, and back end engineers to present to client prior to deadline and under budget",
    description5: "",
    description6: "",
    description7: "",
    description8: "",
    id:3,
  },
  {
    name: "Protalus",
    close: "setProtalus",
    description1: "Worked with a small development team to build out and maintain ecommerce site on custom Shopify theme",
    description2: "Built responsive, comp-perfect pages using JavaScript, Liquid, SCSS, HTML, JQuery, PhotoShop, and InVision",
    description3: "Worked with popular ecommerce site vendors such as RetentionScience, Optimize, Privy, and Gorgias",
    description4: "Built HTML emails for the email marketing team",
    description5: "Managed code across multiple development sites and themes through Git and Beanstalk",
    description6: "Wrote and edited copy as needed",
    description7: "",
    description8: "",
    id:4,
  },
  {
    name: "JTWLLC",
    close: "setJTWLLC",
    description1: "Rebranded existing WordPress site with complicated theme and provided solutions to UI and responsive behavior issues",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    description6: "",
    description7: "",
    description8: "",
    id:5,
  },
  {
    name: "CapBuilder",
    close: "setCapBuilder",
    description1: "Used Backpack for Laravel and MySQL to update the database and the content administration processes for a large retail site",
    description2: "Made front end updates using PHP, CSS, and HTML",
    description3: "Worked with designer to convert old sprite files to admin-able SVG files for better user experience",
    description4: "Worked to exceed client expectations and improve site performance within the proposed timeline",
    description5: "",
    description6: "",
    description7: "",
    description8: "",
    id:6,
  },
  {
    name: "HestonHomeDesign",
    close: "setHestonHomeDesign",
    description1: "Example WordPress site made with Tesseract theme",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    description6: "",
    description7: "",
    description8: "",
    id:7,
  },
];

ReactDOM.render(<App descriptionsList={descriptions} linksList={ links } experiencesList={ experiences } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
