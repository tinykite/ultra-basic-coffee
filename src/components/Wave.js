import React from 'react';
import styled from 'styled-components';

const WaveTop = styled.div`
  height: 115px;
  width: 100vw;
  background: ${props => props.backgroundColor};
  position: relative;
  overflow: hidden;

  :before {
    content: '';
    display: block;
    height: 115px;
    width: 100vw;
    top: 0;
    left: 0;
    position: absolute;
    background: ${props => props.foregroundColor};
    clip-path: url(#top);
  }
`;

const WaveBottom = styled.div`
  height: 150px;
  width: 100vw;
  background: ${props => props.backgroundColor};
  position: relative;
  overflow: hidden;

  :before {
    content: '';
    display: block;
    height: 100px;
    width: 100vw;
    top: 0;
    left: 0;
    position: absolute;
    background: ${props => props.foregroundColor};
    clip-path: url(#bottom);
  }
`;

const Wave = ({ type, ...props }) => {
  switch (type) {
    case 'top':
      return (
        <>
          <WaveTop {...props}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 115"
            >
              <defs>
                <clipPath id="top">
                  <path
                    fillRule="evenodd"
                    d="M0 115c187.992 0 165.992-58 353.984-58 187.996 0 187.996 58 375.994 58 188.006 0 188.006-58 376.011-58 188.006 0 146.006 58 334.011 58V0H0v115z"
                  />
                </clipPath>
              </defs>
            </svg>
          </WaveTop>
        </>
      );
    case 'bottom':
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            width="0"
            height="0"
          >
            <defs>
              <clipPath id="bottom">
                <path d="M1440,0V57s-62.75-15.58-106.14-18.15c-67.39-3.81-103.72,11.82-157.69,27.2-63.44,18.07-159.77,40.24-231.88,32.29C824.18,85.09,822.67,7.17,726,7.17,617,7.17,620.74,86,493.71,98.34c-70.08,6.79-166.87-13.78-231.88-32.29-54-15.38-90.29-31-157.69-27.2C63.82,41.24,7.63,55.2,0,57V0Z" />
              </clipPath>
            </defs>
          </svg>
          <WaveBottom {...props} />
        </>
      );
    default:
      return;
  }
};

export default Wave;
