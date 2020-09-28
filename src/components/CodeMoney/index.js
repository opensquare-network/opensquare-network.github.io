import styled from "styled-components";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 4rem 0;
`;

const StyledSection = styled.section`
  background: #ffffff;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 840px) {
    padding: 0 20px;
    justify-content: space-around;
  }
`;

export const InnerSection = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3rem;

  h2 {
    color: #1d253c;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 1.5;
    margin: 0 0 1rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 700px) {
      margin-left: 2rem;
    }

    li {
      font-size: 1rem;
      color: rgba(29, 37, 60, 0.64);
      &:not(:first-of-type) {
        margin-top: 0.75rem;
      }
    }
  }
`;

export default function () {
  const data = useStaticQuery(graphql`
    query {
      safeImage: file(relativePath: { eq: "safe.png" }) {
        childImageSharp {
          fixed(width: 552) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <StyledSection>
        <Img fixed={data.safeImage.childImageSharp.fixed} />
        <InnerSection>
          <h2>Money is safe</h2>
          <ul>
            <li>Money is managed by code</li>
            <li>Funder doesn't worry about money loss</li>
            <li>Hunter doesn't worry about payment</li>
          </ul>
        </InnerSection>
      </StyledSection>
    </Wrapper>
  );
}
