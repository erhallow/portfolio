import React, { Component } from 'react';
import './About.css';
import frisbee from './frisbee.jpg';
import walk from './walk.jpg';
import bears from './bears.jpg';
import poker from './poker.jpg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class About extends Component {
  static defaultProps = {
    javascriptIcon: 'fab fa-js-square large-icon',
    reactIcon: 'fab fa-react large-icon',
    pythonIcon: 'fab fa-python large-icon',
    nodejsIcon: 'fab fa-node large-icon',
    htmlIcon: 'fab fa-html5 large-icon',
    cssIcon: 'fab fa-css3-alt large-icon',
    bootstrapIcon: 'fab fa-bootstrap large-icon',
    gitIcon: 'fab fa-git large-icon',
  };

  static propTypes = {
    javascriptIcon: PropTypes.string.isRequired,
    reactIcon: PropTypes.string.isRequired,
    pythonIcon: PropTypes.string.isRequired,
    nodejsIcon: PropTypes.string.isRequired,
    htmlIcon: PropTypes.string.isRequired,
    cssIcon: PropTypes.string.isRequired,
    bootstrapIcon: PropTypes.string.isRequired,
    gitIcon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className='d-block bg-about text-white'>
        <h1 id='about' className='text-center extra-pad pb-2'>
          About Me
        </h1>

        <div className='container paragraphtext'>
          <p>
            I am a Full-Stack developer specializing in JavaScript and React. I
            love building effective and functional projects with clean user
            interface designs.{' '}
          </p>
          <p>
            Previous to software development, I earned my MBA and played poker
            professionally for 8 years. When I decided I was ready to take the
            next step in my career, software development was a smooth
            transition. After listening to nearly every episode of the
            <a
              href='https://www.indiehackers.com/podcast
'
              target='_blank'
              rel='noopener noreferrer'
              className='text-decoration-none'
            >
              {' '}
              Indie Hackers Podcast
            </a>
            , I was inspired to learn how to code and build products. My
            experience in poker equipped me with the problem-solving skills that
            I utilize every day. Once I got started with JavaScript, I never
            looked back. Some examples of my work are in the{' '}
            <Link to='/projects' style={{ textDecoration: 'none' }}>
              Projects{' '}
            </Link>
            section.{' '}
          </p>
          <p>
            When I’m not coding, you can find me playing on my Ultimate Frisbee
            team, watching the Bears, or hiking with my wife.
          </p>
        </div>

        <div className='container mb-3'>
          <div className='about-grid text-center'>
            <div className='grid-item'>
              <img
                src={walk}
                alt='la'
                className='smallimg shadow rounded border border-light'
              ></img>
            </div>
            <div className='grid-item'>
              <img
                src={poker}
                alt='poker'
                className='smallimg shadow rounded border border-light'
              ></img>
            </div>
            <div className='grid-item'>
              <img
                src={bears}
                alt='la'
                className='smallimg shadow rounded border border-light'
              ></img>
            </div>
            <div className='grid-item'>
              <img
                src={frisbee}
                alt='frisbee'
                className='smallimg shadow rounded border border-light'
              ></img>
            </div>
          </div>
        </div>

        <div className='container pb-5' id='technology'>
          <h3 className='text-center'>Technology</h3>
          <div className='about-grid'>
            <div className='grid-item text-center icon-wrap'>
              <i className={this.props.javascriptIcon}></i>
              <span className='icon-description p-3'>JavaScript</span>
            </div>
            <div className='grid-item text-center icon-wrap'>
              <i className={this.props.reactIcon}></i>
              <span className='icon-description p-3'>React</span>
            </div>
            <div className='grid-item text-center icon-wrap'>
              <i className={this.props.pythonIcon}></i>
              <span className='icon-description p-3'>Python</span>
            </div>
            <div className='grid-item text-center icon-wrap'>
              <i className={this.props.nodejsIcon}></i>
              <span className='icon-description p-3'>Node JS</span>
            </div>
            <div className='grid-item text-center icon-wrap'>
              <i className={this.props.htmlIcon}></i>
              <span className='icon-description p-3'>HTML</span>
            </div>
            <div className='grid-item text-center icon-wrap'>
              <i className={this.props.cssIcon}></i>
              <span className='icon-description p-3'>CSS</span>
            </div>
            <div className='grid-item text-center icon-wrap'>
              <i className={this.props.bootstrapIcon}></i>
              <span className='icon-description p-3'>Bootstrap</span>
            </div>
            <div className='grid-item text-center icon-wrap'>
              <i className={this.props.gitIcon}></i>
              <span className='icon-description p-3'>Git</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
