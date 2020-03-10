import React, { useRef } from 'react';
import styled from 'styled-components';
import { useOnScreen } from '../hooks/useOnScreen';
import { multiThresholdArray } from '../helpers/animation';
import { ScrollContainer } from './GlobalStyledComponents';
import { motion, useMotionValue } from 'framer-motion';

const Main = styled(motion.article)`
  width: 80%;
  padding: 0 0 50px;
  text-align: center;
  position: relative;
  margin: 0 auto;

  @media (min-width: 720px) {
    max-width: 555px;
    text-align: left;
    width: 80%;
    padding: 100px 0;
  }
`;

const Tip = styled.div`
  :hover {
    transform: translateY(-5px);
    transition: transform 1s ease-in-out;
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
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 26.1px;
  font-family: 'Input Mono Bd';
  font-display: swap;
  font-style: normal;
  font-weight: normal;
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

  const onScreen = useOnScreen(ref, multiThresholdArray);

  const { getThreshold } = onScreen;

  const position = useMotionValue(0);
  position.set(getThreshold);
  const opacity = position;

  return (
    <ScrollContainer background={'#19224F'}>
      <Main ref={ref} style={{ opacity }}>
        <Tip className="u-Cross">
          {' '}
          <a href="#">
            <TipHeading>Coffee Basics: Brewing Methods</TipHeading>
            <TipBody>
              Tips from the kind folks at Durham, North Carolina's
              Counter Culture.
            </TipBody>
          </a>
        </Tip>
        <Tip className="u-Cross">
          <a href="#">
            <TipHeading>Coffee Basics: Brewing Methods</TipHeading>
            <TipBody>
              Tips from the kind folks at Durham, North Carolina's
              Counter Culture.
            </TipBody>
          </a>
        </Tip>
        <Tip className="u-Cross">
          <a href="#">
            <TipHeading>Coffee Basics: Brewing Methods</TipHeading>
            <TipBody>
              Tips from the kind folks at Durham, North Carolina's
              Counter Culture.
            </TipBody>
          </a>
        </Tip>
      </Main>
    </ScrollContainer>
  );
};

export default Tips;
