import React from 'react';
import './Navbar.css';
import DrawerToggleButton from '../Sidebar/DrawerToggleButton';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Navbar = (props) => (
  <div>
    <nav className='navbar navbar-default position-fixed bg-dark navbarZscore navbar'>
      <div className='container-fluid'>
        <div className='navbar-toggle'>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>

        <div className='navbar-logo'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h4>Eric Hallow</h4>
          </Link>
        </div>

        <div className='navbar-links'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <span className='p-2'>Home</span>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <span className='p-2'>About</span>
          </Link>

          <Link to='/projects' style={{ textDecoration: 'none' }}>
            <span className='p-2'>Projects</span>
          </Link>

          <Link to='/blog' style={{ textDecoration: 'none' }}>
            <span className='p-2'>Blog</span>
          </Link>

          <a
            href='https://twitter.com/EricHallow'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter p-2'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/eric-hallow/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin-in p-2'></i>
          </a>
          <a
            href='https://github.com/erhallow'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-github p-2'></i>
          </a>
          <a
            href='https://dev.to/erhallow24'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-dev p-2'></i>
          </a>
          <CopyToClipboard text='erhallow@gmail.com'>
            <button
              type='button'
              className='btn btn-dark copy-icon-wrap text-white'
            >
              <i className='far fa-envelope p-1'></i>
              <span className='copy-icon-description pt-1'>
                <strong>Copy</strong>
              </span>
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
