import React, { useRef } from 'react';
import styled from 'styled-components';
import { useOnScreen } from './hooks/useOnScreen';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const WaveTop = styled(motion.svg)`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1px;
  background: #ffffff 1440px 50px no-repeat;
`;

const BottomWave = styled(motion.svg)`
  background: #ffffff;
  width: 100%;
  height: auto;
  margin-top: 24px;
`;

const ScrollContainer = styled(motion.div)`
  background: #2b3257;
  margin: 0 auto;
  position: relative;
`;

const Main = styled(motion.article)`
  width: 80%;
  padding-top: 50px;
  text-align: center;
  position: relative;

  @media (min-width: 720px) {
    max-width: 555px;
    text-align: left;
    width: 80%;
    padding-top: 20vh;
    margin: 0 auto;
  }
`;

const Tip = styled.div`
  ::before {
    content: '';
    display: block;
    position: absolute;
    left: -40px;
    height: 24px;
    width: 24px;
    background: url('/images/cross.svg');
    background-size: cover;
  }

  :hover {
    transform: translateY(-5px);
    transition: transform 1s ease-in-out;
  }

  :hover::before {
    transform: rotate(45deg);
    transition: transform 0.25s ease-in-out;
  }

  :not(:first-child) {
    margin-top: 3rem;
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
  }
`;

const TipHeading = styled(motion.h2)`
  font-family: input-mono, monospace;
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 26.1px;
`;

const TipBody = styled(motion.p)`
  line-height: 1.6;
  font-size: 14px;
  color: #ffffff;
  font-weight: 200;
  margin-top: 1rem;

  a:link,
  a:active,
  a:hover,
  a:visited {
    color: inherit;
    text-decoration: none;
    padding-bottom: 5px;
    border-bottom: 1px solid #ffffff;
  }

  & + & {
    margin-top: 20px;
  }

  @media (min-width: 720px) {
    text-align: left;
    font-size: 16px;
  }
`;

const Tips = () => {
  const ref = useRef();
  const illustrationRef = useRef();
  let thresholdOptions = [];

  for (let step = 0; step <= 1; step = step + 0.005) {
    thresholdOptions.push(step);
  }

  const onScreen = useOnScreen(ref, thresholdOptions);
  const illustrationOnScreen = useOnScreen(illustrationRef, 1);

  const { isIntersecting } = illustrationOnScreen;
  const { getThreshold } = onScreen;

  const position = useMotionValue(0);
  position.set(getThreshold);
  const opacity = position;

  const parallax = useTransform(position, latest => latest * 1.25);

  const xRange = [0, 1];
  const driftRange = ['0%', '-15%'];
  const driftUp = useTransform(parallax, xRange, driftRange, {
    clamp: false,
  });

  return (
    <ScrollContainer>
      <WaveTop
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 115"
      >
        <path
          fill="#2B3257"
          fillRule="evenodd"
          d="M0 0c187.992 0 165.992 58 353.984 58C541.98 58 541.98 0 729.978 0c188.006 0 188.006 58 376.011 58C1293.995 58 1251.995 0 1440 0v115H0V0z"
        ></path>
      </WaveTop>
      <Main ref={ref} style={{ opacity }}>
        <Tip>
          {' '}
          <a href="#">
            <TipHeading>Coffee Basics: Brewing Methods</TipHeading>
            <TipBody>
              Tips from the kind folks at Durham, North Carolina's
              Counter Culture.
            </TipBody>
          </a>
        </Tip>
        <Tip>
          <a href="#">
            <TipHeading>Coffee Basics: Brewing Methods</TipHeading>
            <TipBody>
              Tips from the kind folks at Durham, North Carolina's
              Counter Culture.
            </TipBody>
          </a>
        </Tip>
        <Tip>
          <a href="#">
            <TipHeading>Coffee Basics: Brewing Methods</TipHeading>
            <TipBody>
              Tips from the kind folks at Durham, North Carolina's
              Counter Culture.
            </TipBody>
          </a>
        </Tip>
      </Main>
      <BottomWave
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="115"
        viewBox="0 0 1440 115"
      >
        <path
          fill="#2B3257"
          fillRule="evenodd"
          stroke="none"
          strokeWidth="1"
          d="M1440 0v114.084C1289.964 106.687 1277.001 57 1102.99 57c-188.006 0-188.006 58-376.012 58-187.998 0-187.998-58-375.994-58C171.722 57 163.385 109.738 0 114.636V0h1440z"
        ></path>
      </BottomWave>
    </ScrollContainer>
  );
};

export default Tips;
