import { useRef } from 'react';
import {
  ScrollContainer,
  TechniqueMain,
  TechniqueIllustrationContainer,
  TechniqueTitle,
  TechniqueTextItem,
} from '../styles/GlobalStyledComponents';
import { useOnScreen } from '../hooks/useOnScreen';
import { multiThresholdArray } from '../helpers/animation';
import { motion, useMotionValue, useTransform } from "motion/react"

const Strength = () => {
  const ref = useRef();
  const illustrationRef = useRef();

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
    <ScrollContainer background={'#000000'}>
      <TechniqueMain
        ref={ref}
        style={{ opacity, color: 'white' }}
        className="u-gridContainer-leftIllustration"
      >
        <TechniqueIllustrationContainer className="u-gridItem-1of2">
          <motion.svg
            ref={illustrationRef}
            width="128"
            height="204"
            viewbox="0 0 128 204"
            style={{ overflow: 'hidden', translateY: driftUp }}
          >
            <defs>
              <mask id="maskTriangleLeft">
                <rect
                  width="60"
                  height="100"
                  x="65"
                  y="0"
                  fill="white"
                />
              </mask>
              <mask id="maskTriangleRight">
                <rect
                  width="65"
                  height="100"
                  x="0"
                  y="0"
                  fill="white"
                />
              </mask>
            </defs>
            <motion.g fill="#FFF" fillRule="evenodd">
              <motion.polygon
                initial={{ opacity: 0, translateY: -40 }}
                animate={
                  isIntersecting && {
                    opacity: 1,
                    translateY: 0,
                  }
                }
                transition={{
                  duration: 0.5,
                  delay: 1,
                }}
                data-index="1"
                points="65.074 29 39 0 91.148 0"
              />
              <motion.polygon
                initial={{ opacity: 0, translateY: -100 }}
                animate={
                  isIntersecting && {
                    opacity: 1,
                    translateY: 0,
                  }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.75,
                  ease: 'easeOut',
                }}
                mask="url(#maskTriangleLeft)"
                data-index="2"
                points="64.593 75 5.926 9 26.01 9 65.185 51 103.354 9 123.259 9"
              />
              <motion.polygon
                mask="url(#maskTriangleRight)"
                initial={{ opacity: 0, translateY: -40 }}
                animate={
                  isIntersecting && {
                    opacity: 1,
                    translateY: 0.5,
                  }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: 'easeOut',
                }}
                data-index="2"
                points="64.593 75 5.926 9 26.01 9 65.185 51 103.354 9 123.259 9"
              />
              <motion.polygon
                initial={{ opacity: 0, translateY: -80 }}
                animate={
                  isIntersecting && {
                    opacity: 1,
                    translateY: 0,
                  }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                  ease: 'easeOut',
                }}
                data-index="3"
                points="58.667 110 0 44 20.084 44 59.259 86"
              />
              <motion.polygon
                initial={{ opacity: 0, translateY: -80 }}
                animate={
                  isIntersecting && { opacity: 1, translateY: 0 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0,
                  ease: 'easeOut',
                }}
                data-index="4"
                points="69.333 110 128 44 107.916 44 68.741 86"
              />
              <motion.polygon
                initial={{
                  opacity: 0,
                  translateY: -40,
                  translateX: -80,
                  scaleX: 1.5,
                }}
                animate={
                  isIntersecting && {
                    opacity: 1,
                    translateY: 0,
                    translateX: 0,
                    scaleX: 1,
                  }
                }
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: 'easeOut',
                }}
                data-index="5"
                points="21 124 108 124 108 134 21 134"
              />
              <motion.polygon
                initial={{ opacity: 0, translateY: -80, skewY: 50 }}
                animate={
                  isIntersecting && {
                    opacity: 1,
                    translateY: 0,
                    skewY: 0,
                  }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: 'easeOut',
                }}
                data-index="6"
                points="65.074 149 39 178 91.148 178"
              />
              <motion.polygon
                initial={{ opacity: 0, translateY: -80 }}
                animate={
                  isIntersecting && { opacity: 1, translateY: 0 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0,
                  ease: 'easeOut',
                }}
                data-index="7"
                points="65.5 187 50 204 81 204"
              />
            </motion.g>
          </motion.svg>
        </TechniqueIllustrationContainer>
        <TechniqueTitle className="u-gridItem-2of2">
          1. Strength
        </TechniqueTitle>
        <article className="u-gridItem-2of2">
          <TechniqueTextItem ref={ref}>
            In high school I thought that strong coffee was the kind
            of thing that punched you in the face and made you speak
            like a Hemingway novel.
          </TechniqueTextItem>
          <TechniqueTextItem>
            And to credit my heart-on-sleeve teenage self, it does
            heavily influence our perception of flavor. But the term
            doesn't accurately qualify how aggressively macho (or even
            how long) something was brewed.{' '}
          </TechniqueTextItem>
          <TechniqueTextItem>
            Strength is predominantly determined, before brewing, by
            the ratio of coffee to hot water that you use: and for
            adequately "strong" coffee, coffee educators typically
            recommend staying between 1:15 and 1:17.
          </TechniqueTextItem>
          <TechniqueTextItem>
            <em>
              For 8oz of coffee (using a 1:15 ratio), that means a
              dose of approximately ~15 grams of beans.
            </em>
          </TechniqueTextItem>
        </article>
      </TechniqueMain>
    </ScrollContainer>
  );
};

export default Strength;
