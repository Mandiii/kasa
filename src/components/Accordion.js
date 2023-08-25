import React from 'react';
import Arrow from '../assets/accordion-arrow.svg'
import '../styles/components/_accordion.scss'

function Accordion(props) {

    const [opened, setOpened] = React.useState(false)

    function openAccordion() {
        setOpened(prevState => !prevState)
    }

    return (
      <div className="accordion--container">
        <div className="accordion--title" onClick={openAccordion}>
          <h2>{props.title}</h2>
          <img src={Arrow} alt="" className={opened? "accordion--arrow" : "accordion--arrow arrow--opened"}/>
        </div>
        <div className={opened? "accordion--content content--opened" : "accordion--content"}>
          <p>{props.text}</p>
        </div>
          
      </div>
    );
  }
  
  export default Accordion;
  