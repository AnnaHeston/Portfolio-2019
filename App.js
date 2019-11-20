import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ProfilePic from './profile_pic.JPG';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'








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
class Header extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activeItem: -1,
      items: ['Home', 'About', 'Portfolio', 'Contact'],
    }
  }

  handleItemClick(index) {
    this.setState({
      activeItem: index,
    })
  }
  render() {
    
    return (
        <div className="header">
          <Container className="sticky-nav">
            <Col xs={6} md={4} className="name-title">
              <h3 className="main-name">Anna Heston</h3>
              <p>Front End Developer</p>
            </Col>
            <Col xs={6} md={8} className="desktop-menu">
              <ul className='bread list-inline'>
                {this.state.items.map((item, index) =>
                  <li
                    
                    
                  ><a href={"#" + item}
                    key={index}
                    className={this.state.activeItem === index ? 'navigation--active' : ''}
                    onClick={this.handleItemClick.bind(this, index)}>
                    {item}
                    </a>
                  </li>
                )}
              </ul>
            </Col>
          </Container>
        </div>

    );
  }
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
  const [capBuilderModal, setCapBuilderModal] = React.useState(false);
  const [hestonHomeDesignModal, setHestonHomeDesignModal] = React.useState(false);

  return (
    <div className="App">
     
      <Header />
      <section className="portfolio-section-1 clearfix" id="Home">
        <div className="iframe-wrapper">
           <iframe src="https://player.vimeo.com/video/374335537?autoplay=1&muted=1&background=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
       
      </section>
      <section className="portfolio-section-2 clearfix" id="About">
        <div className="hero-container">
          <div className="image-side hero-half">
            <img className="portrait" src={ProfilePic} alt="Anna Heston Profile Pic"/>
          </div>
          <div className="text-side hero-half">
            <div className="about-container">
              <h1><strong>Anna Heston</strong></h1>
              <h3>I am a front end developer living in Portland, Oregon. I love creating clean design and user-friendly experiences. Check out some of my latest work <a href="#portfolio" className="anchor-tag">below</a>.</h3>
            </div>
            
          </div>
        </div>
      </section>
     
      <section className="portfolio-section-3" id="Portfolio">
         <div className="experiences-container">
         <Row>
          <Col xs={12} md={4} className={`experience block-1`} onClick={() => setWealthMetaModal(true)}>
            <div>
              <h2 className="experience-title">WealthMeta</h2>
              <div className="truncated-description">
                <p className="description-start">Angular2 and TypeScript to wire up front end on all calculators and wealth management&nbsp;tools...</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className={`experience block-2`} onClick={() => setTualatinValleyModal(true)}>
            <div>
              <h2 className="experience-title">Tualatin Valley</h2>
              <div className="truncated-description">
                <p className="description-star">Used jQuery, HTML, and CSS to add responsive homepage carousel to existing website&nbsp;with...</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className={`experience block-3`} onClick={() => setChaliceWealthPartnersModal(true)}>
            <div>
              <h2 className="experience-title">Chalice Wealth Partners</h2>
              <div className="truncated-description">
                <p className="description-start">Given Photoshop design files for desktop views, used HTML, SCSS, Bootstrap, and jQuery&nbsp;to...</p>
              </div>
            </div>
          </Col>

         </Row>
         <Row>
          <Col xs={12} md={4} className={`experience block-4`} onClick={() => setProtalusModal(true)}>
            <div>
              <h2 className="experience-title">Protalus</h2>
              <div className="truncated-description">
                <p className="description-start">Work with a small development team to build out and maintain ecommerce site on custom&nbsp;Shopify...</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className={`experience block-5`} onClick={() => setCapBuilderModal(true)}>
            <div>
              <h2 className="experience-title">CapBuilder</h2>
              <div className="truncated-description">
                <p className="description-start">Used Backpack for Laravel and MySQL to update the database and the content&nbsp;administration...</p>
              </div>

            </div>
          </Col>
          <Col xs={12} md={4} className={`experience block-6`} onClick={() => setHestonHomeDesignModal(true)}>
            <div>
              <h2 className="experience-title">Heston Home Design</h2>
              <div className="truncated-description">
                <p className="description-start">Example WordPress site made with Tesseract&nbsp;theme...</p>
              </div>
            </div>
          </Col>
         </Row>
          
         
      
        
          
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
     
      <div className="footer" id="Contact">

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