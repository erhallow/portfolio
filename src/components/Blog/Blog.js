import React, { Component } from 'react';
import articleOne from './article1.png';
import articleTwo from './article2.png';
import './Blog.css';

export class Blog extends Component {
  render() {
    return (
      <div className='bg-blog'>
        <div id='blog' className='pt-5'>
          <h1 className='text-center text-white p-3'>
            <a
              href='https://dev.to/erhallow24'
              target='_blank'
              rel='noopener noreferrer'
              className='text-decoration-none p-3'
            >
              <img
                src='https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg'
                alt="erhallow's DEV Profile"
                height='50'
                width='50'
                className='bg-white'
              />
              <span className='text-white p-2 title'>Dev Blog</span>
            </a>
          </h1>

          <div className='container'>
            <div className='blogGrid'>
              <div className='grid-item text-center'>
                <a
                  href='https://dev.to/erhallow24/my-review-of-the-responsive-web-design-certificate-from-free-code-camp-361g'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={articleOne}
                    className='shrinkimg shadow rounded'
                    alt='blog'
                  ></img>
                </a>
              </div>
              <div className='grid-item text-center'>
                <a
                  href='https://dev.to/erhallow24/three-number-sum-or-triplet-sum-1jl9'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={articleTwo}
                    className='shrinkimg shadow rounded'
                    alt='blog'
                  ></img>
                </a>
              </div>
            </div>

            <div className='blog-text text-white mt-3 pb-4'>
              {' '}
              <span>
                I enjoy{' '}
                <a
                  href='https://dev.to/erhallow24'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-decoration-none'
                >
                  blogging
                </a>{' '}
                about the construction of a new project and the technologies I
                utilize. I have learned so much from other bloggers, and this is
                my way of giving back to the community. I discuss the process of
                creating new projects: preparing the environment, outlining the
                scope of the project, and problem-solving bugs along the way.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
