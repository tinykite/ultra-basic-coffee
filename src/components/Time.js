import React, { useRef } from 'react';
import styled from 'styled-components';
import { useOnScreen } from '../hooks/useOnScreen';
import { StyledScrollContainer } from './GlobalStyledComponents';
import { getScrollThresholds } from '../helpers/animation';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Main = styled(motion.div)`
  display: grid;
  margin: 0 auto;
  width: 80%;
  padding-top: 50px;
  text-align: center;
  grid-row-gap: 24px;

  @media (min-width: 720px) {
    grid-template-columns: 143px 1fr;
    align-items: center;
    justify-content: center;
    align-content: center;
    grid-column-gap: 45px;
    max-width: 800px;
    text-align: left;
    grid-row-gap: 0;
    width: 80%;
    padding-top: 20vh;
  }

  @media (min-width: 1000px) {
    width: 100%;
    grid-template-columns: 143px 550px;
    grid-column-gap: 60px;
  }
`;

const Illustration = styled(motion.div)`
  grid-column: 1 / -1;
  margin: 0 auto;

  @media (min-width: 720px) {
    height: 0;
    align-self: start;
    grid-column: 1 / 1;
    width: 100%;
  }
`;

const IllustrationItem = styled(motion.svg)``;

const Title = styled(motion.h2)`
  font-family: antique-olive-nord, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fff;
  font-weight: normal;
  font-size: 24px;
  grid-column: 1 / -1;
  order: -1;

  @media (min-width: 720px) {
    text-align: left;
    grid-column: 2 / -1;
    order: 0;
  }

  @media (min-width: 900px) {
    font-size: 36px;
  }
`;

const Story = styled(motion.article)`
  grid-column: 1 / -1;

  @media (min-width: 720px) {
    grid-column: 2 / -1;
    margin-top: 20px;
  }
`;

const StoryItem = styled(motion.p)`
  line-height: 1.6;
  font-size: 14px;
  color: #ffffff;
  font-weight: 200;

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

const Time = () => {
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
    <StyledScrollContainer background={'#394419'}>
      <Main ref={ref} style={{ opacity }}>
        <Illustration>
          <IllustrationItem
            xmlns="http://www.w3.org/2000/svg"
            width="143"
            height="230"
            style={{ overflow: 'hidden', translateY: driftUp }}
          >
            <motion.g
              fill="#FFF"
              fill-rule="evenodd"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.g data-group="one">
                <motion.rect
                  data-orientation="horizontal"
                  x="0"
                  y="54"
                  height="10"
                  width="57"
                  initial={{
                    scaleX: 4,
                    translateX: '-50%',
                    translateY: '-25%',
                  }}
                  animate={
                    isIntersecting && {
                      scaleX: 1,
                      translateX: 0,
                      translateY: 0,
                    }
                  }
                  transition={{
                    duration: 2,
                    delay: 1,
                  }}
                  style={{ originX: 1 }}
                />
                <motion.rect
                  data-orientation="horizontal"
                  initial={{
                    scaleX: 4,
                    translateX: '110%',
                    translateY: '-50%',
                  }}
                  animate={
                    isIntersecting && {
                      scaleX: 1,
                      translateX: 0,
                      translateY: 0,
                    }
                  }
                  transition={{
                    originX: 0,
                    duration: 1,
                    delay: 1,
                  }}
                  x="75"
                  y="54"
                  height="10"
                  width="57"
                />
                <motion.rect
                  data-orientation="vertical"
                  initial={{ translateY: '-50%', scaleY: 0 }}
                  animate={
                    isIntersecting && {
                      translateY: 0,
                      scaleY: 1,
                    }
                  }
                  transition={{ duration: 2 }}
                  style={{ originY: 0 }}
                  x="83"
                  y="0"
                  height="45"
                  width="10"
                />
                <motion.rect
                  data-orientation="vertical"
                  initial={{ translateY: '-100%', scaleY: 2 }}
                  animate={
                    isIntersecting && {
                      translateY: 0,
                      scaleY: 1,
                    }
                  }
                  transition={{ duration: 2 }}
                  x="65"
                  y="0"
                  height="120"
                  width="10"
                />
              </motion.g>

              <motion.rect
                data-orientation="vertical"
                initial={{ translateY: '-75%', scaleY: 1.5 }}
                animate={
                  isIntersecting && { translateY: 0, scaleY: 1 }
                }
                transition={{ duration: 1 }}
                x="133"
                y="75"
                width="10"
                height="45"
              />
              <motion.g>
                <motion.rect
                  data-orientation="vertical"
                  initial={{ translateY: '-75%', scaleY: 0 }}
                  animate={
                    isIntersecting && {
                      translateY: 0,
                      scaleY: 1,
                    }
                  }
                  transition={{ duration: 2 }}
                  x="100"
                  y="94"
                  width="10"
                  height="42"
                />
                <motion.rect
                  data-orientation="horizontal"
                  initial={{
                    scaleX: 3,
                    translateX: '75%',
                    translateY: '-50%',
                  }}
                  animate={
                    isIntersecting && {
                      scaleX: 1,
                      translateX: 0,
                      translateY: 0,
                    }
                  }
                  transition={{
                    duration: 1,
                    delay: 1.25,
                  }}
                  x="84"
                  y="110"
                  width="42"
                  height="10"
                />
              </motion.g>
              <motion.g>
                <motion.rect
                  data-orientation="vertical"
                  initial={{ translateY: '-100%' }}
                  animate={isIntersecting && { translateY: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1,
                  }}
                  x="115"
                  y="129"
                  width="10"
                  height="70"
                />
                <motion.rect
                  data-orientation="vertical"
                  initial={{ translateY: '-75%', scaleY: 0 }}
                  animate={
                    isIntersecting && {
                      translateY: 0,
                      scaleY: 1,
                    }
                  }
                  transition={{
                    duration: 1,
                    delay: 1,
                  }}
                  style={{ originY: 1 }}
                  x="133"
                  y="129"
                  width="10"
                  height="100"
                />
              </motion.g>
            </motion.g>
          </IllustrationItem>
        </Illustration>
        <Title>3. Time</Title>
        <Story>
          <StoryItem ref={illustrationRef}>
            Time is a key variable in coercing quality coffee flavor.
            And maybe not even as much as you think — a perfectly
            sweet cup of coffee might only contain 18-22% of the
            initial mass of the coffee grounds.
          </StoryItem>
          <StoryItem>
            <em>
              {' '}
              Nerd alert: this is typically referred to as TDS, or
              Total Dissolved Solids.
            </em>
          </StoryItem>
          <StoryItem>
            With a percolator, time is a pretty static constant. Brew
            too long and your coffee will be gross, yadda yadda! But
            if you're feeling adventurous, how you brew coffee — and
            at what time — can also become a key creative aspect of
            your coffee game.
          </StoryItem>
          <StoryItem>
            For inspiration, I love checking out the recipes on the
            World Aeropress Championship website — which catalogues
            the recipes of each of its top three contenders every
            year.
          </StoryItem>
        </Story>
      </Main>
    </StyledScrollContainer>
  );
};

export default Time;
