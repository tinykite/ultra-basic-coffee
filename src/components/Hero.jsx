import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;

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
  font-size: 70px;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.82px;
  margin: 0;
  padding: 0;
  line-height: 1;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 100px;
  }

  @media (min-width: 1000px) {
    font-size: 114px;
  }
`;

const HeroIllustration = styled.svg`
  height: auto;
  width: 240px;
  margin-top: 20px;
  color: white;
  position: relative;
  fill: none;

  @media (min-width: 720px) {
    width: 370px;
    margin-top: 20px;
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
    line-height: 1.6;
  }
`;

const Hero = () => {
  return (
    <>
      <HeroContainer className="c-coffeeText">
        <HeroTitle>
          Ultra Basic<span className="u-visuallyHidden">Coffee</span>
        </HeroTitle>
        <HeroIllustration viewBox="0 0 370 220">
          <rect width="370" height="220" strokeWidth="12" />
          <rect
            x="6"
            y="6"
            width="310"
            height="210"
            strokeWidth="12"
            stroke="currentColor"
            fill="none"
          />
          <rect
            width="48"
            height="150"
            x="316"
            y="35"
            stroke="currentColor"
            strokeWidth="12"
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
          <path
            fill="#000000"
            d="M71.912 155C61.6277 155 55 147.928 55 138.916C55 128.194 64.713 120.437 64.713 107.548C64.713 102.414 63.2274 98.308 63.2274 92.6046C63.2274 80.3992 69.9694 68.5361 84.8245 68.5361C95.9087 68.5361 100.822 75.038 100.822 82.4525C100.822 91.5779 91.4522 96.2548 90.6523 104.81L89.8524 104.924C88.0241 97.8517 92.9377 92.2624 92.9377 85.6464C92.9377 78.8023 89.1668 75.7224 84.1389 75.7224C76.597 75.7224 72.3691 81.7681 71.912 89.4106C71.5692 95.3422 73.2832 101.958 73.2832 107.662C73.2832 120.779 64.0273 127.281 64.0273 137.548C64.0273 143.023 67.684 146.901 73.0547 146.901C78.7682 146.901 82.6534 143.251 84.8245 138.802C87.1099 134.125 87.2242 127.852 93.509 125.456L94.1946 126.369C89.0525 130.247 91.5664 138.916 87.7955 145.989C84.7102 151.806 78.1968 155 71.912 155ZM112.592 154.772C103.793 154.772 97.0514 149.183 97.0514 141.54C97.0514 133.327 105.05 128.536 105.279 117.357C105.279 113.707 104.25 110.513 104.365 106.521C104.479 96.9392 109.621 88.0418 121.048 88.0418C129.618 88.0418 134.303 93.1749 134.303 100.361C134.303 108.118 128.933 114.848 128.933 124.772C128.933 128.194 129.618 131.616 129.618 135.38C129.39 146.901 122.991 154.772 112.592 154.772ZM112.821 147.7C119.448 147.7 121.734 140.399 121.848 133.669C121.962 130.475 121.734 127.395 121.734 124.658C121.734 112.909 126.647 107.776 126.647 101.73C126.647 97.6236 124.362 95.1141 120.362 95.1141C114.878 95.1141 112.592 99.9049 112.592 106.407C112.592 110.057 113.163 114.049 113.163 117.243C113.163 128.65 105.736 132.757 105.622 139.715C105.622 143.935 108.25 147.7 112.821 147.7ZM135.103 153.745L134.532 153.061C138.074 150.209 141.045 146.103 142.531 141.084C148.473 123.859 137.846 111.426 150.53 98.0798C146.873 98.1939 142.531 99.2205 139.674 100.817L139.103 100.133C143.217 97.2814 144.473 90.3232 152.358 91.0076C155.101 85.9886 152.815 81.5399 153.958 75.6084C154.986 70.2472 158.414 65.6844 164.928 65.6844C168.813 65.6844 172.127 67.6236 174.298 70.5894L173.612 71.3878C170.413 68.1939 164.128 70.4753 162.528 76.5209C161.157 81.5399 163.557 87.5855 159.329 91.4639L159.443 91.5779C166.185 89.1825 173.155 94.6578 177.383 90.6654C181.268 87.0152 178.412 80.7414 179.44 74.8099C180.469 69.4487 183.782 65 190.296 65C194.181 65 197.723 66.597 200.58 69.2205L200.009 70.3612C196.009 67.7376 189.61 69.6768 188.01 75.7224C186.639 80.7414 188.925 87.5855 184.697 91.4639L184.811 91.5779C190.296 89.6388 193.267 93.289 199.666 90.8935L200.237 91.5779C197.266 93.6312 196.009 98.6502 189.496 98.6502C187.325 98.6502 184.697 98.0798 182.868 98.0798C182.868 106.293 179.44 107.205 177.269 114.962C173.041 129.563 182.64 142.224 172.698 149.753C168.013 153.403 164.242 151.35 160.471 153.745L159.9 153.061C163.442 150.209 166.413 146.103 167.899 141.084C170.756 132.871 166.185 125.456 168.584 115.989C170.413 108.688 174.869 106.407 176.241 97.2814C174.412 98.6502 173.612 99.3346 170.184 99.3346C167.67 99.3346 165.613 98.0798 163.1 98.0798C158.186 98.0798 154.758 100.932 153.272 107.205C150.416 119.183 156.586 138.574 149.844 147.015C144.131 154.202 138.874 151.35 135.103 153.745ZM199.209 154.544C191.553 154.544 186.639 149.525 186.639 142.224C186.639 133.555 193.267 128.536 193.267 118.042C193.267 113.593 192.467 111.198 192.467 106.179C192.467 94.5437 198.98 88.6122 207.436 88.6122C212.693 88.6122 215.207 91.0076 220.12 91.0076C223.548 91.0076 225.034 89.981 226.862 88.27L227.434 88.9544C221.492 96.4829 220.12 103.213 220.12 110.171C220.12 115.076 220.92 120.894 216.806 125.114C212.921 129.106 205.722 129.905 198.98 127.395C197.838 132.3 194.638 135.152 194.638 140.285C194.638 144.049 196.695 147.129 201.609 147.129C209.265 147.129 209.379 139.259 216.578 136.179L217.035 137.091C212.464 139.487 212.464 154.544 199.209 154.544ZM200.237 123.745C205.722 124.087 209.15 123.517 211.093 119.753C212.693 116.559 212.236 113.251 212.236 109.943C212.236 101.274 215.664 97.1673 219.777 94.6578L219.435 93.9734C212.578 96.2548 210.522 94.3156 206.522 96.0266C203.208 97.5095 200.352 100.703 200.352 105.951C200.352 109.259 201.38 111.768 201.38 116.103C201.38 118.84 200.923 121.692 200.237 123.745ZM235.775 154.544C228.119 154.544 223.206 149.525 223.206 142.224C223.206 133.555 229.833 128.536 229.833 118.042C229.833 113.593 229.033 111.198 229.033 106.179C229.033 94.5437 235.547 88.6122 244.003 88.6122C249.259 88.6122 251.773 91.0076 256.687 91.0076C260.115 91.0076 261.6 89.981 263.429 88.27L264 88.9544C258.058 96.4829 256.687 103.213 256.687 110.171C256.687 115.076 257.487 120.894 253.373 125.114C249.488 129.106 242.289 129.905 235.547 127.395C234.404 132.3 231.204 135.152 231.204 140.285C231.204 144.049 233.261 147.129 238.175 147.129C245.831 147.129 245.945 139.259 253.144 136.179L253.601 137.091C249.031 139.487 249.031 154.544 235.775 154.544ZM236.804 123.745C242.289 124.087 245.717 123.517 247.659 119.753C249.259 116.559 248.802 113.251 248.802 109.943C248.802 101.274 252.23 97.1673 256.344 94.6578L256.001 93.9734C249.145 96.2548 247.088 94.3156 243.089 96.0266C239.775 97.5095 236.918 100.703 236.918 105.951C236.918 109.259 237.946 111.768 237.946 116.103C237.946 118.84 237.489 121.692 236.804 123.745Z"
          />
        </HeroIllustration>
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