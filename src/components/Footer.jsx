import styled from 'styled-components';

const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: calc(4vh + 114px) 0 4vh;
  background: #ffffff;
  position: relative;

  @media (min-width: 500px) {
    padding: calc(6vh + 114px) 0 6vh;
  }

  @media (min-width: 720px) {
    padding: calc(8vh + 114px) 0 8vh;
  }

  &::before {
    content: '';
    width: 100%;
    height: 114px;
    position: absolute;
    top: 0;
    background: ${props => props.topWaveBg};
    -webkit-mask: url('/img/waveTop.svg') repeat-x 50% 50%;
    mask: url('/img/waveTop.svg') repeat-x 50% 50%;
    mask-type: alpha;
  }
`;

const FooterBody = styled.p`
  font-size: 1rem;
  text-align: center;
  max-width: 75%;
  line-height: 1.6;
  margin-top: 2rem;

  @media (min-width: 720px) {
    max-width: 700px;
  }

  &:first-child::after {
    padding-bottom: 2rem;
    content: '';
    width: 75%;
    margin: 0 auto;
    display: block;
    border-bottom: 1px solid #000;
  }
`;

const FooterColophon = styled(FooterBody)`
  text-transform: uppercase;

  a:link,
  a:active,
  a:hover,
  a:visited {
    color: inherit;
    text-decoration: underline;
  }
`;

const Footer = ({ topWaveBg }) => {
  return (
    <FooterContainer $topWaveBg={topWaveBg}>
      <FooterBody>
        Ultra Basic Coffee was created as a silly excuse to mix
        minimalist illustration and maximalist typography.
      </FooterBody>
      <FooterColophon>
        BUILT BY <a href="https://github.com/tinykite">TINY KITE</a>
      </FooterColophon>
    </FooterContainer>
  );
};

export default Footer;