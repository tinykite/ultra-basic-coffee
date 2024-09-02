import { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import {
  ScrollContainer,
  TechniqueMain,
  TechniqueTextItem,
  TechniqueTitle,
  TechniqueIllustrationContainer,
} from '../styles/GlobalStyledComponents';
import { multiThresholdArray } from '../helpers/animation';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Time = () => {
  const ref = useRef();
  const illustrationRef = useRef();

  const onScreen = useOnScreen(ref, multiThresholdArray);
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
    <ScrollContainer
      background={'#394419'}
      className="u-WaveTopBeige"
    >
      <TechniqueMain
        ref={ref}
        style={{ opacity, color: 'white' }}
        className="u-gridContainer-leftIllustration"
      >
        <TechniqueIllustrationContainer>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="143"
            height="230"
            style={{ overflow: 'hidden', translateY: driftUp }}
          >
            <motion.g
              fill="#FFF"
              fillRule="evenodd"
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
          </motion.svg>
        </TechniqueIllustrationContainer>
        <TechniqueTitle className="u-gridItem-2of2">
          3. Time
        </TechniqueTitle>
        <article className="u-gridItem-2of2">
          <TechniqueTextItem ref={illustrationRef}>
            Time is a key variable in coercing quality coffee flavor.
            And maybe not even as much as you think — a perfectly
            sweet cup of coffee might only contain 18-22% of the
            initial mass of the coffee grounds.
          </TechniqueTextItem>
          <TechniqueTextItem>
            <em>
              {' '}
              Nerd alert: this is typically referred to as TDS, or
              Total Dissolved Solids.
            </em>
          </TechniqueTextItem>
          <TechniqueTextItem>
            With a percolator, time is a pretty static constant. Brew
            too long and your coffee will be gross, yadda yadda! But
            if you're feeling adventurous, how you brew coffee — and
            at what time — can also become a key creative aspect of
            your coffee game.
          </TechniqueTextItem>
          <TechniqueTextItem>
            For inspiration, I love checking out the recipes on the{' '}
            <a href="https://www.worldaeropresschampionship.com/">
              World Aeropress Championship website.
            </a>
          </TechniqueTextItem>
        </article>
      </TechniqueMain>
    </ScrollContainer>
  );
};

export default Time;
