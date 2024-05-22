import React, { useState } from 'react';
import  styles from './accordain.module.css';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionheader} onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className={styles.accordioncontent}>{children}</div>}
    </div>
  );
};

export default Accordion;