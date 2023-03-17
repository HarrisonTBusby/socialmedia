import './togglecomponent.css';
import '../../App.css';


import React from 'react';

const Switch = ({ isOn, handleToggle }) => {
  
  function darkMode(){
    document.body.classList.toggle('dark-mode');
  }

  return (
    <>
    <h5 className='font2 mr'>Dark Mode</h5>
      <input
        checked={isOn}
        onChange={handleToggle}
        onClick={darkMode}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      
      <label
        style={{ background: isOn && '#808080' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
