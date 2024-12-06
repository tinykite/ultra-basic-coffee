import styled from 'styled-components';
import { ScrollContainer } from '../styles/GlobalStyledComponents';

const Main = styled.article`
  width: 80%;
  padding: 0 0 50px;
  text-align: center;
  position: relative;
  margin: 0 auto;

  @media (min-width: 720px) {
    max-width: 555px;
    text-align: left;
    width: 80%;
    padding: 100px 0;
  }
`;

const Tip = styled.div`
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
  }

  & + & {
    margin-block-start: 3rem;
  }
`;

const TipHeading = styled.h2`
  font-size: 18px;
  color: #ffffff;
  line-height: 1.6;
  font-family: 'Input Mono Bd';
  font-display: swap;
  font-style: normal;
  font-weight: normal;
`;

const TipBody = styled.p`
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

  em {
    font-family: 'Input Mono Lt It';
    font-display: swap;
    font-style: normal;
    font-weight: normal;
  }

  & + & {
    margin-top: 20px;
  }

  @media (min-width: 720px) {
    text-align: left;
    font-size: 16px;
  }
`;

const Tips = () => {
  return (
    <ScrollContainer $background='#19224F'>
      <Main>
        <Tip className="u-Cross">
          <a href="https://www.chefsteps.com/activities/how-to-buy-coffee">
            <TipHeading>How to Buy Coffee</TipHeading>
            <TipBody>
              Quick tips from <em>Chef Steps</em> about how to buy
              better coffee beans.
            </TipBody>
          </a>
        </Tip>
        <Tip className="u-Cross">
          <a href="https://counterculturecoffee.com/blog/coffee-basics-brewing-methods">
            <TipHeading>
              Coffee Basics: Brewing Methods – Which Way is Best for
              You?
            </TipHeading>
            <TipBody>
              The kind folks at Durham, North Carolina's Counter
              Culture explain how to choose a brew method.
            </TipBody>
          </a>
        </Tip>
        <Tip className="u-Cross">
          <a href="https://www.youtube.com/watch?v=l-VYhaS8w0A&list=PLYop5Qrli10Em9xxKRlufkImNsuRfVhAN&index=2">
            <TipHeading>One Minute Coffee Tutorials</TipHeading>
            <TipBody>
              Chris Baca of Cat and Cloud demonstrates how to quickly
              make Aeropress, French press, Kalita Wave, and Clever
              coffee.
            </TipBody>
          </a>
        </Tip>
      </Main>
    </ScrollContainer>
  );
};

export default Tips;
