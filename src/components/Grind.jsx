import { useRef } from 'react';
import { multiThresholdArray } from '../helpers/animation';
import {
  ScrollContainer,
  TechniqueMain,
  TechniqueIllustrationContainer,
  TechniqueTextItem,
  TechniqueTitle,
} from '../styles/GlobalStyledComponents';
import { useOnScreen } from '../hooks/useOnScreen';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Grind = () => {
  const ref = useRef();

  const onScreen = useOnScreen(ref, multiThresholdArray);

  const { isIntersecting } = onScreen;
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
    <ScrollContainer background={'#F6EFDF'} className="u-WaveTop">
      <TechniqueMain
        style={{ opacity, color: '#394419' }}
        className="u-gridContainer-rightIllustration"
        ref={ref}
      >
        <TechniqueIllustrationContainer className="u-gridItem-2of2">
          <motion.svg
            initial={{ opacity: 0 }}
            animate={isIntersecting && { opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{ translateY: driftUp }}
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
            <g fill="#394419" filu-rule="evenodd">
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
          </motion.svg>
        </TechniqueIllustrationContainer>
        <TechniqueTitle className="u-gridItem-1of2">
          2. Grind
        </TechniqueTitle>
        <article className="u-gridItem-1of2">
          <TechniqueTextItem>
            Many guides share the same seemingly immutable tips about
            how to grind coffee:
          </TechniqueTextItem>
          <TechniqueTextItem>
            Using a <em>whirly boi</em> (or blade grinder) on your
            beans is garbage. The Baratza Encore is lovely. You'll
            make more flavorful coffee if you avoid pre-ground beans —
            as well as coffee labeled without an obvious roast date.
          </TechniqueTextItem>
          <TechniqueTextItem>
            It's all great. It also feels like your nutritionist
            telling you that sugar is inflammatory.
          </TechniqueTextItem>
          <TechniqueTextItem>
            How do you improve upon bad coffee? According to Counter
            Culture, by making frequent and tiny adjustments to your
            grind based off of taste.
          </TechniqueTextItem>
          <TechniqueTextItem>
            <strong>
              If your mouth feels dry with an ashy aftertaste,
            </strong>{' '}
            you’re likely grinding too fine.
          </TechniqueTextItem>
          <TechniqueTextItem>
            <strong>
              If the coffee tastes weak, sour, or a little papery,
            </strong>{' '}
            you may be grinding too coarse.
          </TechniqueTextItem>
        </article>
      </TechniqueMain>
    </ScrollContainer>
  );
};

export default Grind;
