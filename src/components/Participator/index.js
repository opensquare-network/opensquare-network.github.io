import React from "react";
import styled from "styled-components";
import Council from "./council.svg";
import Funder from "./funder.svg";
import Hunter from "./hunter.svg";
import Line from "./line.svg";
import Square from "./square-bg.svg";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  background: #1d253c;

  margin-top: 4rem;
  padding: 3.3rem 0;

  overflow: hidden;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media screen and (max-width: 840px) {
    padding: 0 20px;
    justify-content: space-around;
    box-sizing: border-box;

    h2 {
      text-align: center;
    }
  }

  @media screen and (min-width: 880px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1080px) {
    width: 1080px;
  }

  h2 {
    font-size: 1.75rem;
    line-height: 1.5;
    color: #fff;
    margin: 0;
    &:last-of-type {
      margin: 0 0 2rem;
    }
  }
`;

export const InnerSection = styled.main`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
  }

  @media screen and (min-width: 1080px) {
    width: 1080px;
  }

  @media screen and (max-width: 880px) {
    flex-wrap: wrap;
    svg:nth-of-type(2) {
      display: none;
    }
  }
`;

export const Item = styled.section`
  & > div {
    display: flex;
    align-items: center;

    & > svg:last-of-type {
      margin: 0 3rem;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 2rem;
    color: #fff;
    margin: 0.75rem 0 0.25rem;
  }

  p {
    color: rgba(255, 255, 255, 0.48);
    font-size: 1rem;
    line-height: 1.75rem;
    margin: 0;
    max-width: 14rem;
  }

  @media screen and (max-width: 880px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    &:not(:first-of-type) {
      margin-top: 20px;
    }
    & > div {
      justify-content: center;
    }
    p {
      text-align: center;
    }
  }
`;

export default function () {
  return (
    <Wrapper>
      <StyledSection>
        <h2>Collaborations keep the</h2>
        <h2>network active</h2>
        <InnerSection>
          <Item>
            <div>
              <Funder />
              <Line />
            </div>
            <h3>Funders</h3>
            <p>Fund bounties, Review hunters' work</p>
          </Item>
          <Item>
            <div>
              <Council />
              <Line />
            </div>
            <h3>Council</h3>
            <p>Review bounties, judge disputes, governance</p>
          </Item>
          <Item>
            <Hunter />
            <h3>Hunters</h3>
            <p>Apply bounties, Solve them</p>
          </Item>
          <Square style={{ position: "absolute", right: "-19rem", top: 0 }} />
        </InnerSection>
      </StyledSection>
    </Wrapper>
  );
}
