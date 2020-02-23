import React, { useRef } from 'react';
import styled from 'styled-components';
import { useOnScreen } from '../hooks/useOnScreen';
import { getScrollThresholds } from '../helpers/animation';
import { StyledScrollContainer } from './GlobalStyledComponents';
import { motion, useMotionValue, useTransform } from 'framer-motion';

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
  const thresholdOptions = getScrollThresholds(0.005);

  const onScreen = useOnScreen(ref, thresholdOptions);
  const illustrationOnScreen = useOnScreen(illustrationRef, 1);

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
    <StyledScrollContainer background={'#2b3257'}>
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
    </StyledScrollContainer>
  );
};

export default Tips;
