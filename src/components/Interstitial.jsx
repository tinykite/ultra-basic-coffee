import React, { useRef } from 'react';
import { multiThresholdArray } from '../helpers/animation';
import { useOnScreen } from '../hooks/useOnScreen';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from "motion/react"
import waveTop from '../img/waveTop.svg';
import waveBottom from '../img/waveBottom.svg';

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  margin: 0;
  padding: calc(8vh + 114px) 0;
  text-align: center;

  &::before {
    content: '';
    width: 100%;
    height: 114px;
    position: absolute;
    top: 0;
    background: ${({ $topWaveBg }) => $topWaveBg};
    -webkit-mask: url(${waveTop}) repeat-x 50% 50%;
    mask: url(${waveTop}) repeat-x 50% 50%;
    mask-type: alpha;
  }

  &::after {
    content: '';
    width: 100%;
    height: 114px;
    position: absolute;
    bottom: 0;
    background: ${({ $bottomWaveBg }) => $bottomWaveBg};
    -webkit-mask: url(${waveBottom}) repeat-x 50% 50%;
    mask: url(${waveBottom}) repeat-x 50% 50%;
    mask-type: alpha;
  }

  @media (min-width: 720px) {
    padding: calc(14vh + 114px) 0;
  }
`;

const Title = styled(motion.h2)`
  font-family: 'Knockout 68 A', 'Knockout 68 B';
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  margin-top: 1rem;

  @media (min-width: 720px) {
    font-size: 110px;
  }
`;

const Interstitial = ({ title, icon, topWaveBg, bottomWaveBg }) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, multiThresholdArray);
  const { getThreshold } = onScreen;

  const position = useMotionValue(0);
  position.set(getThreshold);

  const xRange = [0, 1];
  const driftRange = ['40%', '0%'];
  const driftUp = useTransform(position, xRange, driftRange, {
    clamp: false,
  });

  const InterstitialIcon = ({ icon }) => {
    switch (icon) {
      case 'Tools':
        return (
          <motion.svg
            width="68"
            height="88"
            viewBox="0 0 68 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: position, translateY: driftUp }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M68 0H0V88H68V0ZM60 46V32H26V80H35V46H60ZM43 54V80H60V54H43ZM18 80H8V8H60V24H18V80Z"
              fill="black"
            />
          </motion.svg>
        );
      case 'Tips':
        return (
          <motion.svg
            width="68"
            height="88"
            viewBox="0 0 68 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: position, translateY: driftUp }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M68 0H28H19H0V8V9V19V28V60V69V79V86V88H41H50H68V84V79V69V60V28V19V9V6V0ZM50 79H59V69H50V79ZM50 60V48H41V60H9V28H19V40H28V28H59V60H50ZM41 69V79H9V69H41ZM9 9H19V19H9V9ZM28 9V19H59V9H28Z"
              fill="black"
            />
          </motion.svg>
        );
      case 'Technique':
        return (
          <motion.svg
            width="68"
            height="88"
            viewBox="0 0 68 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: position, translateY: driftUp }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M68 0H3.54062e-06L0 7L3.54062e-06 9V79V88H9.00001H59H68V79V9V7V0ZM29 79H40L40 33L29 33V54V63L29 79ZM20 54V33L20 31L20 24L40 24V9H9L9.00001 54H20ZM9.00001 63L20 63V79H9.00001L9.00001 63ZM59 79H49L49 9H59L59 79Z"
              fill="black"
            />
          </motion.svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Main
        ref={ref}
        $topWaveBg={topWaveBg}
        $bottomWaveBg={bottomWaveBg}
      >
        <InterstitialIcon icon={icon} />
        <Title style={{ opacity: position, translateY: driftUp }}>
          {title}
        </Title>
      </Main>
    </>
  );
};

export default Interstitial;
