import React from "react";
import styled from "styled-components";
import Funders from "./funders.svg";
import Hunters from "./hunters.svg";
import Council from "./council-dot.svg";

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
  margin-top: 100px;

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
    <StyledSection>
      <InnerSection>
        <Item>
          <Funders width={100} height={100} />
          <h3>Funders</h3>
          <p>Fund bounties, review hunters' work</p>
        </Item>
        <Item>
          <Council width={100} height={100} />
          <h3>Council</h3>
          <p>Review bounties, judge disputes, governance</p>
        </Item>
        <Item>
          <Hunters width={100} height={100} />
          <h3>Hunters</h3>
          <p>Apply bounties, solve them</p>
          <p></p>
        </Item>
      </InnerSection>
    </StyledSection>
  );
}
