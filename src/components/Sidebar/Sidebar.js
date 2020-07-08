import React from 'react';
import './Sidebar.css';
import intro from './intro.jpg';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Sidebar = (props) => {
  let drawerClasses = ['sidebar bg-dark'];

  if (props.show) {
    drawerClasses = ['sidebar bg-dark open'];
  }

  return (
    <nav className={drawerClasses}>
      <div className='text-center p-3' id='info-bar'>
        <img
          src={intro}
          alt='test'
          className='img-thumbnail img50 rounded-circle'
        />
      </div>

      {/* Page Links */}
      <div className='text-center'>
        <div className='btn-group-vertical'>
          <button type='button' className='btn btn-default btn-block bg-dark'>
            <Link to='/'>
              <div> Home</div>
            </Link>
          </button>

          <button type='button' className='btn btn-default btn-block bg-dark'>
            <Link to='/about'>
              <div>About</div>
            </Link>
          </button>

          <button type='button' className='btn btn-default btn-block bg-dark'>
            <Link to='/projects'>
              <div>Projects</div>
            </Link>
          </button>
          <button type='button' className='btn btn-default btn-block bg-dark'>
            <Link to='/blog'>
              <div>Blog</div>
            </Link>
          </button>
        </div>
      </div>

      {/* Social Icons  */}

      <div className='text-center p-1'>
        <a
          href='https://twitter.com/EricHallow'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-twitter p-2 resizeIcon'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/eric-hallow/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-linkedin-in p-2 resizeIcon'></i>
        </a>
        <a
          href='https://github.com/erhallow'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-github p-2 resizeIcon'></i>
        </a>
        <a
          href='https://dev.to/erhallow24'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fab fa-dev p-2 resizeIcon'></i>
        </a>
      </div>

      {/* Contact Info */}
      <div className='text-center pt-2'>
        <CopyToClipboard text='erhallow@gmail.com'>
          <button type='button' className='btn btn-dark copy-wrap text-white'>
            <i className='far fa-envelope p-1'></i>erhallow@gmail.com
            <span className='copy-description pt-1'>
              <strong>Click to Copy</strong>
            </span>
          </button>
        </CopyToClipboard>
      </div>
    </nav>
  );
};

export default Sidebar;
