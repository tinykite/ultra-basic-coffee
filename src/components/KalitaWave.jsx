import { useRef } from 'react';
import styled from 'styled-components';
import { useOnScreen } from '../hooks/useOnScreen';
import { ScrollContainer } from '../styles/GlobalStyledComponents';
import { multiThresholdArray } from '../helpers/animation';
import { motion, useMotionValue, useTransform } from "motion/react"

const Main = styled.article`
  width: 90%;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 100px 0;

  @media (min-width: 500px) {
    width: 80%;
  }

  @media (min-width: 720px) {
    padding: 0;
    grid-template-columns: 1fr 0.6fr;
    align-content: center; /* Important side effect utilized here: this property also prevent rows from stretching to fill available space! */
    height: 80vh;
    grid-auto-flow: dense;
    grid-column-gap: 30px;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 550px 1fr;
    max-width: 900px;
    grid-column-gap: 45px;
    padding-top: 150px;
  }
`;

const Title = styled(motion.h2)`
  font-family: 'Carmin 0.2';
  color: #19224f;
  letter-spacing: 0.44px;
  text-transform: uppercase;
  font-weight: normal;
  text-align: center;
  grid-column: 1 / 1;

  @media (min-width: 320px) {
    font-size: calc(45px + 16 * ((100vw - 320px) / 320));
  }

  @media (min-width: 720px) {
    text-align: left;
    font-size: 65px;
  }
`;

const Intro = styled.p`
  color: #19224f;
  font-family: 'Input Mono Lt It';
  font-display: swap;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  grid-column: 1 / 1;
  text-align: center;
  margin-top: 20px;

  @media (min-width: 720px) {
    text-align: left;
    font-size: 16px;
  }

  @media (min-width: 1000px) {
    font-size: 19px;
  }
`;

const Story = styled.p`
  color: #19224f;
  font-weight: 300;
  line-height: 1.6;
  font-size: 14px;
  grid-column: 1 / 1;
  text-align: center;
  margin-top: 12rem;

  @media (min-width: 350px) {
    margin-top: 16rem;
  }

  @media (max-width: 719px) {
    order: 1;
    grid-row: 3;
    align-self: end;
  }

  @media (min-width: 720px) {
    text-align: left;
    font-size: 16px;
    margin-top: 20px;
  }
`;

const Illustration = styled(motion.div)`
  width: 80%;
  position: relative;
  margin: 0 auto;
  grid-column: 1 / -1;

  @media (max-width: 719px) {
    grid-row: 3;
  }

  @media (min-width: 720px) {
    height: 0; /* We don't want this container to contribute to grid row height */
    grid-column: 2 / -1;
    width: 100%;
    max-width: 283px;
  }

  @media (min-width: 1010px) {
    transform: translateY(-2vw);
  }

  @media (min-width: 1100px) {
    transform: translateY(-8vh);
  }
`;

const IllustrationLayout = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: 720px) {
    margin: 0;
  }
`;

const Kalita = styled(motion.svg)`
  width: 100%;
  max-width: 283px;
  height: auto;
`;

const Mug = styled(motion.div)`
  border: 8px solid #1b234f;
  width: 115px;
  height: 99.2px;
  margin-left: -12px;
  margin-top: 5px;
  border-radius: 0px 0px 25% 25%;
  overflow: hidden;
  position: relative;
  display: none;

  @media (min-width: 720px) {
    display: block;
    margin-top: 30px;
    border: 10px solid #1b234f;
    margin-left: -16px;
  }

  @media (min-width: 1200px) {
    height: 124px;
    width: 144px;
    margin-left: -30px;
  }
`;

const Coffee = styled(motion.div)`
  height: 124px;
  width: 144px;
  background: #1b234f;
`;

const KalitaWave = () => {
  const ref = useRef();

  const illustrationOnScreen = useOnScreen(ref, 1);
  const { isIntersecting } = illustrationOnScreen;
  const onScreen = useOnScreen(ref, multiThresholdArray);

  const { getThreshold } = onScreen;

  const position = useMotionValue(0);
  position.set(getThreshold);
  const opacity = position;
  const xRange = [0, 1];
  const skewRange = ['0.7rad', '-0.6rad'];
  const skew = useTransform(position, xRange, skewRange);

  const brew = {
    play: { translateY: '25%' },
    pause: { translateY: '100%' },
  };

  return (
    <>
      <ScrollContainer
        ref={ref}
         $background="#fcf1f2"
        className="u-WaveAsymmetricalBlue"
      >
        <Main>
          <Title style={{ skew, opacity }}>Kalita Wave</Title>
          <Intro>
            A pourover device with a very flat bottom. Don't be weird.
            It's a good thing.
          </Intro>
          <Illustration>
            <IllustrationLayout>
              <Kalita
                xmlns="http://www.w3.org/2000/svg"
                width="283"
                height="214"
                style={{ opacity }}
              >
                <g fill="none" fillRule="evenodd">
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      flip: Infinity,
                      repeatDelay: 0.8,
                      ease: 'easeInOut',
                    }}
                    fill="#C4BBC8"
                    d="M141 125a5 5 0 015 5v40.485a4.78 4.78 0 01-5 4.509 4.77 4.77 0 01-5-4.51V130a5 5 0 015-4.999z"
                  />
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.25,
                      duration: 0.6,
                      flip: Infinity,
                      repeatDelay: 1,
                      ease: 'easeInOut',
                    }}
                    fill="#C4BBC8"
                    d="M111 141a5 5 0 015 5v40.485a4.78 4.78 0 01-5 4.509 4.77 4.77 0 01-5-4.51V146a5 5 0 015-4.999z"
                  />
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 1.5,
                      duration: 0.25,
                      flip: Infinity,
                      repeatDelay: 1.5,
                      ease: 'easeInOut',
                    }}
                    fill="#C4BBC8"
                    d="M131 132v77.485a4.78 4.78 0 01-5 4.509 4.77 4.77 0 01-5-4.51V132a5 5 0 0110 0z"
                  />
                  <rect
                    width="150"
                    height="10"
                    x="57"
                    y="149"
                    fill="#1B234F"
                    fillRule="nonzero"
                  />
                  <path
                    fill="#1B234F"
                    d="M251.328 0l-11.5 20.25L283 20.23 223.053 126h-43.332l-13.628 24h-78.04L0 0h251.328zm13.278 30.95h-30.733l-47.787 84.3h30.762l47.758-84.3z"
                  />
                </g>
              </Kalita>
              <Mug style={{ opacity }}>
                <Coffee
                  animate={isIntersecting && 'play'}
                  initial={'pause'}
                  transition={{
                    duration: 10,
                  }}
                  variants={brew}
                />
              </Mug>
            </IllustrationLayout>
          </Illustration>
          <Story>
            The Kalita Wave is an able workhorse for individuals who
            want to drink at least a few cups of coffee. Its iconic
            shape is a touch unconventional — but with good intentions
            at heart. The flat, simple silhouette makes it easier to
            more evenly extract your coffee.
          </Story>
        </Main>
      </ScrollContainer>
    </>
  );
};

export default KalitaWave;
