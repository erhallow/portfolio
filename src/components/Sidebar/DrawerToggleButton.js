import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = (props) => (
  <button className='toggle-button' onClick={props.click}>
    <span className='toggle-button__line' />
    <span className='toggle-button__line' />
    <span className='toggle-button__line' />
  </button>
);

export default DrawerToggleButton;
