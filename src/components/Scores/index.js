import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Bs from "./bs.svg";
import Gs from "./gs.svg";
import Fs from "./fs.svg";
import Img from "gatsby-image";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;

  margin: 6rem 3rem 0;
`;

const StyledSection = styled.section`
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;

  @media screen and (max-width: 840px) {
    padding: 0 20px;
    justify-content: space-around;
    flex-wrap: wrap;

    & > div:last-of-type {
      margin-top: 60px;
    }
  }

  div.chart {
    margin-left: 1.5rem;
    h2 {
      margin: 0;
      max-width: 440px;
      font-weight: bold;
      font-size: 1.75rem;
      line-height: 1.5;
    }
  }
`;

const Scores = styled.section``;

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

const ScoreItem = styled.section`
  display: flex;
  &:not(:first-of-type) {
    margin-top: 2rem;
  }

  & > div {
    margin-left: 1.8rem;
    h4 {
      margin: 0;
      color: #1d253c;

      font-weight: 500;
      font-size: 1.25rem;
      line-height: 1.6;
    }

    p {
      margin: 0.25rem 0 0;
      font-weight: normal;
      font-size: 1rem;
      line-height: 1.5;
      color: rgba(29, 37, 60, 0.64);
      max-width: 300px;
    }
  }
`;

export default function () {
  const data = useStaticQuery(graphql`
    query {
      scoreImage: file(relativePath: { eq: "score.png" }) {
        childImageSharp {
          fixed(width: 420) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <StyledSection>
        <Scores>
          <ScoreItem>
            <Bs />
            <div>
              <h4>Behavior Score</h4>
              <p>Reputation with users' behaviors, no range limitation</p>
            </div>
          </ScoreItem>
          <ScoreItem>
            <Gs />
            <div>
              <h4>General Score</h4>
              <p>
                Normalization of total behavior reputation score, in (0, 100)
              </p>
            </div>
          </ScoreItem>
          <ScoreItem>
            <Fs />
            <div>
              <h4>Feature Score</h4>
              <p>Reputation with customized behavior set</p>
            </div>
          </ScoreItem>
        </Scores>
        <div className="chart">
          <h2>Reputation scores help you find best collaborators</h2>
          <Img fixed={data.scoreImage.childImageSharp.fixed} />
        </div>
      </StyledSection>
    </Wrapper>
  );
}
