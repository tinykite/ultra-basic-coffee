import styled from 'styled-components';
import { motion } from "motion/react"

export const ScrollContainer = styled.div`
  background: ${({ $background }) => $background};
  margin: 0 auto;
  position: relative;
`;

export const TechniqueMain = styled(motion.div)`
  display: grid;
  margin: 0 auto;
  width: 80%;
  padding: 50px 0;
  text-align: center;
  grid-row-gap: 24px;

  @media (min-width: 720px) {
    padding-top: 24px;
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
    grid-column-gap: 60px;
  }
`;

export const TechniqueIllustrationContainer = styled(motion.div)`
  margin: 0 auto;

  @media (min-width: 720px) {
    height: 0;
    align-self: start;

    width: 100%;
    grid-row: 1;
  }
`;

export const TechniqueTitle = styled(motion.h2)`
  font-family: antique-olive-nord, sans-serif;
  font-weight: 400;
  font-weight: normal;
  font-size: 24px;
  grid-row: 1;

  @media (min-width: 720px) {
    text-align: left;
  }

  @media (min-width: 900px) {
    font-size: 36px;
  }
`;

export const TechniqueTextItem = styled(motion.p)`
  line-height: 1.6;
  font-size: 14px;
  font-weight: 300;

  em {
    font-family: 'Input Mono Lt It';
    font-display: swap;
    font-style: normal;
    font-weight: normal;
  }

  strong {
    font-family: 'Input Mono Bd';
    font-display: swap;
    font-style: normal;
    font-weight: normal;
  }

  @media (min-width: 720px) {
    margin-top: 1.6rem;
  }

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
