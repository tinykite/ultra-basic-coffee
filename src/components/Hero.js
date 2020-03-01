import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;

  @media (min-width: 450px) {
    padding: 8vh 0;
  }

  @media (min-width: 600px) {
    min-height: 80vh;
    padding: 0;
  }

  @media (min-width: 1000px) {
    min-height: 100vh;
  }
`;

const HeroTitle = styled.h1`
  font-family: 'Knockout 69 A', 'Knockout 69 B';
  font-style: normal;
  font-size: 60px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.82px;
  margin: 0;
  padding: 0;
  line-height: 1;
  text-align: center;

  @media (min-width: 700px) {
    font-size: 85px;
  }

  @media (min-width: 1000px) {
    font-size: 114px;
  }
`;

const HeroIllustrationContainer = styled.div`
  display: block;
  width: 280px;
  z-index: 100;
  background: green;
`;

const HeroIllustration = styled.svg`
  height: auto;
  margin-top: 30px;
  width: 370px;
  color: white;
  position: relative;
  fill: none;
  background: blue;

  @media (min-width: 1000px) {
    margin-top: 40px;
  }
`;

const Intro = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4vh 0;
  background: #ffffff;

  @media (min-width: 500px) {
    padding: 6vh 0;
  }

  @media (min-width: 720px) {
    padding: 8vh 0;
  }
`;

const IntroDescription = styled.p`
  text-align: center;
  font-size: 1rem;
  max-width: 75%;

  @media (min-width: 720px) {
    font-size: 1.25rem;
    max-width: 560px;
    line-height: 1.5;
  }
`;

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroTitle>
          Ultra Basic<span className="u-visuallyHidden">Coffee</span>
        </HeroTitle>
        <HeroIllustrationContainer>
          <HeroIllustration viewBox="0 0 370 220">
            <rect width="370" height="220" stroke-width="12" />
            <rect
              x="6"
              y="6"
              width="310"
              height="210"
              stroke-width="12"
              stroke="currentColor"
              fill="none"
            />
            <rect
              width="48"
              height="150"
              x="316"
              y="35"
              stroke="currentColor"
              stroke-width="12"
              fill="none"
            />
            <motion.rect
              initial={{ translateY: '100%' }}
              animate={{ translateY: 0 }}
              transition={{ duration: 8 }}
              x="0"
              y="0"
              width="316"
              height="220"
              fill="currentColor"
            />
          </HeroIllustration>
        </HeroIllustrationContainer>
      </HeroContainer>
      <Intro>
        <IntroDescription>
          An illustrated guide to the fundamentals of coffee
          extraction.
        </IntroDescription>
      </Intro>
    </>
  );
};

export default Hero;
