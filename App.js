import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




const descriptions = [
  {
    name: "WealthMeta.com",
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
    name: "TualatinValley.org",
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
    name: "ChaliceWealthPartners.com",
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
    name: "Protalus.com",
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
    name: "JTWLLC.com",
    description1: "Rebranded existing WordPress site with complicated theme and provided solutions to UI and responsive behavior issues",
    id:5,
  },
  {
    name: "CapBuilder.net",
    description1: "Used Backpack for Laravel and MySQL to update the database and the content administration processes for a large retail site",
    description2: "Made front end updates using PHP, CSS, and HTML",
    description3: "Worked with designer to convert old sprite files to admin-able SVG files for better user experience",
    description4: "Worked to exceed client expectations and improve site performance within the proposed timeline",
    id:6,
  },
  {
    name: "HestonHomeDesign.com",
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

const Backer = () => {
  return (
    <div className="backer" id="click-target">
      <div className="center-circle">
         <div className="text-container">
          <h2 className="welcome-text">Enter</h2>
         </div>
      </div>
    </div>
  )
}

const Transparent = () => {
  
  const openClick = function() {
    const target2 = document.getElementById("remove");
    target2.classList.add("gone");
    const target = document.getElementById("click-target");
    target.classList.add("open");
    
  }

  return (
    <div className="transparent" id="remove" onClick={openClick}>
          <div className="transparent-circle">
           <div className="dot"></div>
          </div>
    </div>
  )
  
}

const Header = () => {
  return (
    <div className="header">
      <h1>Anna Heston</h1>
    </div>
  )
}

const Experience = (props) => {
  return (
    <a href="#" className={`experience ${props.style}`} >
      <h2 className="experience-title">{props.name}</h2>
    </a>
  ); 
}

const Footer = (props) => {
  return (
      <a href={props.url} className="footer-link">{props.name}</a>
  )
}

const App = (props) => {
  return (
    <div className="App">
      < Backer />
      < Transparent />
      < Header />
      <div className="experiences-container">
        { props.experiencesList.map( experience => 
          < Experience 
            name= { experience.name } 
            style= { experience.style }
            key={ experience.id }
          /> 
        )}
      </div>
      <div className="footer">

        { props.linksList.map( link =>
          < Footer 
            name= { link.name }
            url= { link.url }
            key= { link.id }
          />
        )}
      </div>
    </div>
  );
}

export default App;