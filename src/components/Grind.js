import React, { useRef } from 'react';
import styled from 'styled-components';
import { getScrollThresholds } from '../helpers/animation';
import { StyledScrollContainer } from './GlobalStyledComponents';
import { useOnScreen } from '../hooks/useOnScreen';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Main = styled(motion.div)`
  display: grid;
  margin: 0 auto;
  width: 80%;
  padding-top: 50px;
  text-align: center;
  grid-row-gap: 24px;

  @media (min-width: 720px) {
    padding-top: 24px;
    grid-template-columns: 1fr 120px;
    align-items: center;
    justify-content: center;
    align-content: center;
    grid-column-gap: 45px;
    max-width: 800px;
    text-align: left;
    grid-row-gap: 0;
    width: 80%;
    padding: 15vh 0;
  }

  @media (min-width: 1000px) {
    width: 100%;
    grid-template-columns: 550px 135px;
    grid-column-gap: 60px;
  }
`;

const Illustration = styled(motion.div)`
  grid-column: 1 / -1;
  margin: 0 auto;

  @media (min-width: 720px) {
    height: 0;
    align-self: start;
    grid-column: 2 / -1;
    width: 100%;
    grid-row: 1;
  }
`;

const IllustrationItem = styled(motion.svg)``;

const Title = styled(motion.h2)`
  font-family: antique-olive-nord, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #394419;
  font-weight: normal;
  font-size: 24px;
  grid-column: 1 / -1;

  @media (min-width: 720px) {
    text-align: left;
    grid-column: 1 / 1;
  }

  @media (min-width: 900px) {
    font-size: 36px;
  }
`;

const Story = styled(motion.article)`
  grid-column: 1 / -1;

  @media (min-width: 720px) {
    grid-column: 1 / 1;
    margin-top: 20px;
  }
`;

const StoryItem = styled(motion.p)`
  line-height: 1.6;
  font-size: 14px;
  color: #394419;
  font-family: input-mono, monospace;
  font-weight: 300;

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

const Grind = () => {
  const ref = useRef();
  const illustrationRef = useRef();
  const thresholdOptions = getScrollThresholds(0.005);

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
    <StyledScrollContainer>
      <Main ref={ref}>
        <Title>2. Grind</Title>
        <Illustration>
          <IllustrationItem
            initial={{ opacity: 0 }}
            animate={isIntersecting && { opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{ translateY: driftUp }}
            xmlns="http://www.w3.org/2000/svg"
            width="136"
            height="222"
          >
            <defs>
              <mask id="halfMoonTop">
                <motion.rect
                  initial={{ translateY: 70 }}
                  animate={isIntersecting && { translateY: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  x="68"
                  y="0"
                  width="70"
                  height="65"
                  fill="white"
                />
              </mask>
              <mask id="halfMoonBottom">
                <motion.rect
                  initial={{
                    translateX: 150,
                  }}
                  animate={isIntersecting && { translateX: 0 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5,
                    originX: 0,
                    originY: 1,
                  }}
                  x="0"
                  y="57"
                  width="68"
                  height="70"
                  fill="white"
                />
              </mask>
            </defs>
            <g fill="#394419" fill-rule="evenodd">
              {/* <path
          fill="aqua"
          d="M68 63v63.999L0 127c1.176-35.18 30.569-63.418 66.875-63.991L68 63zM68 63V-.999L136-1c-1.176 35.18-30.569 63.418-66.875 63.991L68 63z"
        /> */}
              <circle
                cx="68"
                cy="-7"
                r="70"
                mask="url(#halfMoonTop)"
              />
              <circle
                cx="70"
                cy="133"
                r="70"
                mask="url(#halfMoonBottom)"
              />
              <g>
                <motion.rect
                  initial={{ scaleY: 0, translateY: '-100%' }}
                  animate={
                    isIntersecting && { scaleY: 1, translateY: 0 }
                  }
                  style={{ originY: 1 }}
                  transition={{ duration: 1.5 }}
                  x="0"
                  y="0"
                  width="9"
                  height="127"
                />
                <motion.rect
                  initial={{ scaleY: 0, translateY: '-50%' }}
                  animate={
                    isIntersecting && { scaleY: 1, translateY: 0 }
                  }
                  style={{ originY: 0 }}
                  transition={{ duration: 1.5 }}
                  x="16"
                  y="41"
                  width="9"
                  height="86"
                />
                <motion.rect
                  initial={{ scaleY: 0, translateY: '-50%' }}
                  animate={
                    isIntersecting && { scaleY: 1, translateY: 0 }
                  }
                  style={{ originY: 0 }}
                  transition={{ duration: 1.5 }}
                  x="32"
                  y="27"
                  width="9"
                  height="100"
                />
                <motion.rect
                  initial={{ scaleY: 0, translateY: '-50%' }}
                  animate={
                    isIntersecting && { scaleY: 1, translateY: 0 }
                  }
                  style={{ originY: 0 }}
                  transition={{ duration: 1.5 }}
                  x="49"
                  y="0"
                  width="9"
                  height="127"
                />
              </g>
              <g>
                <motion.rect
                  x="68"
                  initial={{ scaleX: 0, translateX: '25%' }}
                  animate={
                    isIntersecting && { scaleX: 1, translateX: 0 }
                  }
                  style={{ originX: 1 }}
                  transition={{ duration: 1.5 }}
                  y="77"
                  height="9"
                  width="68"
                />
                <motion.rect
                  x="68"
                  y="98"
                  height="9"
                  width="68"
                  initial={{ scaleX: 0, translateX: '25%' }}
                  animate={
                    isIntersecting && { scaleX: 1, translateX: 0 }
                  }
                  style={{ originX: 0 }}
                  transition={{ duration: 1.5, delay: 0.125 }}
                />
                <motion.rect
                  initial={{ scaleX: 0, translateX: '-50%' }}
                  animate={
                    isIntersecting && { scaleX: 1, translateX: 0 }
                  }
                  style={{ originX: 1 }}
                  transition={{ duration: 1.5 }}
                  x="68"
                  y="118"
                  height="9"
                  width="68"
                />
              </g>
              <g>
                <motion.rect
                  initial={{ scaleY: 0, translateY: '25%' }}
                  animate={
                    isIntersecting && { scaleY: 1, translateY: 0 }
                  }
                  style={{ originX: 0 }}
                  transition={{ duration: 1.5 }}
                  x="68"
                  y="127"
                  height="60"
                  width="9"
                />
                <motion.rect
                  initial={{ scaleY: 0, translateY: '0%' }}
                  animate={
                    isIntersecting && { scaleY: 1, translateY: 0 }
                  }
                  style={{ originX: 0 }}
                  transition={{ duration: 1.5, delay: 0.25 }}
                  x="84"
                  y="127"
                  height="94"
                  width="9"
                />
                <motion.rect
                  initial={{ scaleY: 0 }}
                  animate={isIntersecting && { scaleY: 1 }}
                  style={{ originX: 0 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  x="100"
                  y="127"
                  height="60"
                  width="9"
                />
              </g>
            </g>
          </IllustrationItem>
        </Illustration>
        <Story>
          <StoryItem>
            Many guides share the same seemingly immutable tips about
            how to grind coffee:
          </StoryItem>
          <StoryItem ref={illustrationRef}>
            Using a <em>whirly boi</em> (or blade grinder) on your
            beans is garbage. The Baratza Encore is lovely. You'll
            make more flavorful coffee if you avoid pre-ground beans —
            as well as coffee labeled without an obvious roast date.
          </StoryItem>
          <StoryItem>
            It's all great. It also feels like your nutritionist
            telling you that sugar is inflammatory.
          </StoryItem>
          <StoryItem>
            How do you improve upon bad coffee? According to Counter
            Culture, by making frequent and tiny adjustments to your
            grind based off of taste.
          </StoryItem>
          <StoryItem>
            <strong>
              If your mouth feels dry with an ashy aftertaste,
            </strong>{' '}
            you’re likely grinding too fine.
          </StoryItem>
          <StoryItem>
            <strong>
              If the coffee tastes weak, sour, or a little papery,
            </strong>{' '}
            you may be grinding too coarse.
          </StoryItem>
        </Story>
      </Main>
    </StyledScrollContainer>
  );
};

export default Grind;
