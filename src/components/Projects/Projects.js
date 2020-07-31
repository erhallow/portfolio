import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sudoku from './sudoku.png';
import crypto from './top10crypto.png';
import './Projects.css';

export class Projects extends Component {
  static defaultProps = {
    title: 'Eric Hallow',
    heading: 'React Developer',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div id='projects' className='container vh-200'>
        <h1 className='text-center projects-text extra-pad-proj pb-3'>
          Projects
        </h1>

        <div className='grid pb-5'>
          <div
            id='top10crypto'
            className='card border border-dark
                '
          >
            <img className='card-img-top' src={crypto} alt='1'></img>
            <div className='card-body projects-text'>
              <h5 className='text-center'>
                <a
                  href='https://github.com/erhallow/top10crypto'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='projects-text'
                >
                  Top 10 Crypto
                </a>
              </h5>
              <div className='card-text'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item text-center projects-text'>
                    Pull from CryptoCompare API and sort data
                  </li>
                  <li className='list-group-item text-center removeIcon'>
                    <i className='fab fa-html5 p-3 sizeIcon'></i>
                    <i className='fab fa-css3-alt p-3 sizeIcon'></i>
                    <i className='fab fa-bootstrap p-3 sizeIcon'></i>
                    <i className='fab fa-js-square p-3 sizeIcon'></i>
                    <i className='fab fa-react p-3 sizeIcon'></i>
                  </li>
                  <li className='list-group-item'>
                    <a
                      href='https://github.com/erhallow/top10crypto'
                      alt='github'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='projects-text'
                    >
                      Github
                    </a>
                    <a
                      href='https://top10cryptovol.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='float-right projects-text'
                    >
                      Live Site
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id='sudoku' className='card border border-dark'>
            <img className='card-img-top' src={sudoku} alt='sudoku'></img>

            <div className='card-body projects-text'>
              <h5 className='card-title text-center'>
                <a
                  href='https://github.com/erhallow/sudoku'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='projects-text'
                >
                  Sudoku
                </a>
              </h5>
              <div className='card-text'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item text-center projects-text'>
                    <strong>Work in progress - Coming Soon!</strong>
                  </li>
                  <li className='list-group-item text-center removeIcon'>
                    <i className='fab fa-html5 p-3 sizeIcon'></i>
                    <i className='fab fa-css3-alt p-3 sizeIcon'></i>
                    <i className='fab fa-bootstrap p-3 sizeIcon'></i>
                    <i className='fab fa-js-square p-3 sizeIcon'></i>
                    <i className='fab fa-react p-3 sizeIcon'></i>
                  </li>
                  <li className='list-group-item'>
                    <a
                      href='https://github.com/erhallow/sudoku'
                      alt='github'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='projects-text'
                    >
                      Code
                    </a>
                    <a
                      href='https://dev.to/erhallow24'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='float-right projects-text'
                    >
                      Follow
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
