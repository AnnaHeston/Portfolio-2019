import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ProfilePic from './profile_pic.JPG';







const Backer = () => {
  const openClick = function() {
    
    const target = document.getElementById("click-target");
    target.classList.add("open");
    
  }


  return (
    <div className="backer" id="click-target" onClick={openClick}>
      <div className="center-circle">
         <div className="text-container">
          <h2 className="welcome-text">Anna Heston</h2>
           <p className="enter">Enter</p>
         </div>

      </div>
    </div>
  )
}

function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modal-header" onClose={e => {this.onClose(e);}} closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <p>{props.line1}</p>
        <p>{props.line2}</p>
        <p>{props.line3}</p>
        <p>{props.line4}</p>
        <p>{props.line5}</p>
        <p>{props.line6}</p>
        <p>{props.line7}</p>
        <p>{props.line8}</p>
        <a href={props.link}>Visit Page</a>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
  
  
}


const Footer = (props) => {
  return (
      <a href={props.url} className="footer-link">{props.name}</a>
  )
}

const App = (props) => {
  
  const [wealthMetaModal, setWealthMetaModal] = React.useState(false);
  const [tualatinValleyModal, setTualatinValleyModal] = React.useState(false);
  const [chaliceWealthPartnersModal, setChaliceWealthPartnersModal] = React.useState(false);
  const [protalusModal, setProtalusModal] = React.useState(false);
  const [jTWLLCModal, setJTWLLCModal] = React.useState(false);
  const [capBuilderModal, setCapBuilderModal] = React.useState(false);
  const [hestonHomeDesignModal, setHestonHomeDesignModal] = React.useState(false);

  return (
    <div className="App">
      < Backer />
      
     
      <section className="portfolio-section-1">
        <div className="hero-container">
          <div className="image-side hero-half">
            <img className="portrait" src={ProfilePic} />
          </div>
          <div className="text-side hero-half">
            <div className="about-container">
              <h1><strong>Anna Heston</strong></h1>
              <h3>I am a front end developer living in Portland, Oregon. I love creating clean design and user-friendly experiences. Check out some of my latest work <a href="#portfolio" className="anchor-tag">below</a>.</h3>
            </div>
            
          </div>
        </div>
      </section>
      <section className="portfolio-section-2" id="portfolio">
         <div className="experiences-container">
      
          <a href="#" className={`experience block-1`} onClick={() => setWealthMetaModal(true)}>
            <h2 className="experience-title">WealthMeta</h2>
          </a>
          <a href="#" className={`experience block-2`} onClick={() => setTualatinValleyModal(true)}>
            <h2 className="experience-title">Tualatin Valley</h2>
          </a>
          <a href="#" className={`experience block-3`} onClick={() => setChaliceWealthPartnersModal(true)}>
            <h2 className="experience-title">Chalice Wealth Partners</h2>
          </a>
          <a href="#" className={`experience block-4`} onClick={() => setProtalusModal(true)}>
            <h2 className="experience-title">Protalus</h2>
          </a>
         
          <a href="#" className={`experience block-5`} onClick={() => setCapBuilderModal(true)}>
            <h2 className="experience-title">CapBuilder</h2>
          </a>
          <a href="#" className={`experience block-6`} onClick={() => setHestonHomeDesignModal(true)}>
            <h2 className="experience-title">Heston Home Design</h2>
          </a>
         
      
        
          
        <MyVerticallyCenteredModal
          show={wealthMetaModal}
          onHide={() => setWealthMetaModal(false)}
          title= "WealthMeta"
          line1= "&bull; Angular2 and TypeScript to wire up front end on all calculators and wealth management tools"
          line2= "&bull; Illustrated data using Chart.js" 
          line3= "&bull; Front end implementation of wireframes and designs with HTML, CSS, and Bootstrap"
          line4= "&bull; Assisted with Django for content management"
          line5= "&bull; Provided unit tests using Karma for all wealth calculator functions"
          line6= "&bull; Added various plugins to project as needed to enhance the UI (example: sleeker scrollbar)"
          line7= "&bull; Made site fully responsive across all browsers"
          line8= "&bull; Helped refine design, layout, and function of wealth management tools"
          link="https://www.wealthmeta.com/"
          key = "1"
        />
        <MyVerticallyCenteredModal
          show={tualatinValleyModal}
          onHide={() => setTualatinValleyModal(false)}
          title= "Tualatin Valley"
          line1= "&bull; Used jQuery, HTML, and CSS to add responsive homepage carousel to existing website with specific client requests for slide transition, navigation, and lightbox behaviors"
          link="https://tualatinvalley.org/"
         
          key = "2"
        />
        <MyVerticallyCenteredModal
          show={chaliceWealthPartnersModal}
          onHide={() => setChaliceWealthPartnersModal(false)}
          title= "&bull; Chalice Wealth Partners"
          line1= "&bull; Given Photoshop design files for desktop views, used HTML, SCSS, Bootstrap, and jQuery to create a pixel perfect UI"
          line2= "&bull; Expanded design themes for mobile views when provided with wireframes only to make a fully responsive site across browsers" 
          line3= "&bull; Wired front end to content management system with Django"
          line4= "&bull; Worked with project manager, design team, and back end engineers to present to client prior to deadline and under budget"
          link="https://www.chalicefn.com/"
          key = "3"
        />
        <MyVerticallyCenteredModal
          show={protalusModal}
          onHide={() => setProtalusModal(false)}
          title= "Protalus - Current Employer"
          line1= "&bull; Work with a small development team to build out and maintain ecommerce site on custom Shopify theme"
          line2= "&bull; Build responsive, comp-perfect pages using JavaScript, Liquid, SCSS, HTML, JQuery, PhotoShop, and InVision" 
          line3= "&bull; Work with popular ecommerce site vendors such as Retention Science, Optimize, Privy, and Gorgias"
          line4= "&bull; Build HTML emails for the email marketing team"
          line5= "&bull; Manage code across multiple development sites and themes through Git and Beanstalk"
          line6= "&bull; Write and edit ad copy as needed"
          line7= "&bull; Direct the American portion of the Protalus outreach program based in Nepal"
          link="https://www.protalus.com/"
          key = "4"
        />
        <MyVerticallyCenteredModal
          show={jTWLLCModal}
          onHide={() => setJTWLLCModal(false)}
          title= "JTWLLC"
          line1= "&bull; Rebranded existing WordPress site with complicated theme and provided solutions to UI and responsive behavior issues"
          link="http://jtwllc.com/"
          key = "5"
        />
        <MyVerticallyCenteredModal
          show={capBuilderModal}
          onHide={() => setCapBuilderModal(false)}
          title= "CapBuilder"
          line1= "&bull; Used Backpack for Laravel and MySQL to update the database and the content administration processes for a large retail site"
          line2= "&bull; Made front end updates using PHP, CSS, and HTML" 
          line3= "&bull; Worked with designer to convert old sprite files to admin-able SVG files for better user experience"
          line4= "&bull; Worked to exceed client expectations and improve site performance within the proposed timeline"
          link="https://www.capbuilder.net/"
          key = "6"
        />
        <MyVerticallyCenteredModal
          show={hestonHomeDesignModal}
          onHide={() => setHestonHomeDesignModal(false)}
          title= "Heston Home Design"
          line1= "&bull; Example WordPress site made with Tesseract theme"
          link="http://hestonhomedesign.com/"
          key = "7"
        />
 
      </div>
      </section>
     
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