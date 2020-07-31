import React, { Component } from 'react';
import PropTypes from 'prop-types';
import intro from './intro.jpg';
import './Home.css';

export class Home extends Component {
  static defaultProps = {
    title: 'Eric Hallow',
    heading: 'Full-Stack Developer from Chicago',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div id='home'>
        <header>
          <div className='toppadding'>
            <div className='removeimg pb-2 text-center '>
              <img
                src={intro}
                alt='about'
                className='img-thumbnail rounded-circle img-res-1'
              />
            </div>
            <div className='extramargin'>
              <h1 className='text-center'>{this.props.title}</h1>
              <h2 className='text-center'>{this.props.heading}</h2>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
