import React, { useRef } from 'react';
import { motion } from 'framer';
import { useOnScreen } from '../hooks/useOnScreen';
import styled from 'styled-components';

const WaveTop = styled(motion.svg)`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  background: white;
`;

const ScrollContainer = styled(motion.div)`
  background: #000000;
  margin: 0 auto;
  position: relative;
`;

const Main = styled(motion.div)`
  display: grid;
  margin: 0 auto;
  width: 80%;
  padding-top: 5px;
  text-align: center;
  grid-row-gap: 24px;

  @media (min-width: 500px) {
    padding-top: 100px;
  }

  @media (min-width: 720px) {
    padding-top: 150px;
    grid-template-columns: 100px 1fr;
    align-items: center;
    justify-content: center;
    align-content: center;
    grid-column-gap: 45px;
    max-width: 800px;
    text-align: left;
    grid-row-gap: 0;
    width: 80%;
  }

  @media (min-width: 1000px) {
    width: 100%;
    grid-template-columns: 135px 550px;
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

const TechniqueSection = ({ title, text, icon, theme, layout }) => {
  const ref = useRef();
  const illustrationOnScreen = useOnScreen(ref, 1);
  const { isIntersecting } = illustrationOnScreen;

  const opacityRef = useRef();
  let thresholdOptions = [];

  for (let step = 0; step <= 1; step = step + 0.005) {
    thresholdOptions.push(step);
  }

  const onScreen = useOnScreen(opacityRef, thresholdOptions);
  const { getThreshold } = onScreen;

  const position = useMotionValue(0);
  position.set(getThreshold);

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
          fill="#1"
          fillRule="evenodd"
          d="M0 0c187.992 0 165.992 58 353.984 58C541.98 58 541.98 0 729.978 0c188.006 0 188.006 58 376.011 58C1293.995 58 1251.995 0 1440 0v115H0V0z"
        ></path>
      </WaveTop>
      <Main ref={opacityRef} style={{ opacity: position }}>
        <Illustration>
          <IllustrationItem icon={icon} />
        </Illustration>
        <Title>{title}</Title>
        <Story>
          {
            (text.forEach = paragraph => {
              <StoryItem>{paragraph}</StoryItem>;
            })
          }
        </Story>
      </Main>
    </ScrollContainer>
  );
};

export default TechniqueSection;
