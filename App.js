import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';







const Backer = () => {
  return (
    <div className="backer" id="click-target">
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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.line1}</p>
        <p>{props.line2}</p>
        <p>{props.line3}</p>
        <p>{props.line4}</p>
        <p>{props.line5}</p>
        <p>{props.line6}</p>
        <p>{props.line7}</p>
        <p>{props.line8}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


const Transparent = () => {
  


  return (
    <div className="transparent" id="remove">
          <div className="transparent-circle">
           <div className="dot"></div>
           <div className="dot3"></div> 
           <div className="dot5"></div>
          </div>
    </div>
  )
  
}

const Transparent2 = () => {
  
  const openClick = function() {
    const target2 = document.getElementById("remove2");
    target2.classList.add("gone");
    const target = document.getElementById("remove");
    target.classList.add("gone");
    const target3 = document.getElementById("click-target");
    target3.classList.add("open");
    
  }

  return (
    <div className="transparent2" id="remove2" onClick={openClick}>
      <div className="transparent-circle-2">
         <div className="dot2"></div>
         <div className="dot4"></div>
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
    <div>
      <a href="#" className={`experience ${props.style}`} >
        <h2 className="experience-title">{props.name}</h2>
      </a>

    </div>
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
      < Transparent />
      < Transparent2 />
      < Header />
      <div className="experiences-container" onClick={() => setWealthMetaModal(true)}>
        { props.experiencesList.map( experience => 
          < Experience 
            name= { experience.name } 
            style= { experience.style }
            key={ experience.id }
          /> 
        )}
        
          
        <MyVerticallyCenteredModal
          show={wealthMetaModal}
          onHide={() => setWealthMetaModal(false)}
          title= "WealthMeta"
          line1= "Hello"
          line2= "I" 
          line3= "Made"
          line4= "A"
          line5= "Modal"
          line6= "Work"
          line7= "yay"
          line8= "Me"
          key = "1"
        />
        
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