import React from "react";
import styled from "styled-components";
import Bs from "./bs.svg";
import Gs from "./gs.svg";
import Fs from "./fs.svg";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
`;

const StyledSection = styled.section`
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;

  @media screen and (max-width: 840px) {
    padding: 0 20px;
    justify-content: space-around;
  }
`;

export const InnerSection = styled.main`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }

  @media screen and (min-width: 1080px) {
    width: 1080px;
  }

  @media screen and (min-width: 880px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (max-width: 880px) {
    flex-wrap: wrap;
  }
`;

const Item = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 268px;

  h3 {
    text-align: center;
    margin: 5px 0 0;
    font-size: 1.5rem;
  }
  p {
    text-align: center;
    font-size: 1rem;
    margin: 10px 0 0;
  }

  @media screen and (min-width: 880px) {
    &:not(:first-of-type) {
      margin-left: 20px;
    }
  }
`;

export default function () {
  return (
    <Wrapper>
      <h2>Reputation scores help you find best collaborators</h2>
      <StyledSection>
        <InnerSection>
          <Item>
            <Bs width={100} height={100} />
            <h3>Behavior Score</h3>
            <p>Reputation with users' behaviors, no scope limitation</p>
          </Item>
          <Item>
            <Gs width={100} height={100} />
            <h3>General Score</h3>
            <p>Normalization of total behavior reputation score, in (0, 100)</p>
          </Item>
          <Item>
            <Fs width={100} height={100} />
            <h3>Feature Scores</h3>
            <p>Reputation with customized behavior set</p>
          </Item>
        </InnerSection>
      </StyledSection>
    </Wrapper>
  );
}
