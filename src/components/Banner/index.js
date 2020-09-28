import React from "react";
import styled from "styled-components";
import { BaseInner } from "../baseComponents";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10vh;
`;

const ImgWrapper = styled.div`
  margin-top: 3rem;
  position: relative;

  @media screen and (max-width: 1080px) {
    width: 80%;
    left: 10%;
  }

  @media screen and (min-width: 1080px) {
    width: 800px;
    left: calc(50% - 400px);
  }
`;

export const InnerSection = styled(BaseInner)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin: 0;
    width: 80%;
    text-align: center;
    color: #1d253c;
    line-height: 1.5;
  }
  h3 {
    margin-top: 10px;
    font-weight: normal;
    width: 40%;
    text-align: center;
    color: rgba(29, 37, 60, 0.64);
    line-height: 1.5;
  }
`;

export default function () {
  const data = useStaticQuery(graphql`
    query {
      mainImage: file(relativePath: { eq: "main.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div style={{ textAlign: "center" }}>
      <Wrapper>
        <StyledSection>
          <InnerSection>
            <h1>Empower Reputation Building with Blockchain </h1>
            <h3>
              Collaboration on bounties and your reputation score will be
              calculated from your daily activities
            </h3>
          </InnerSection>
        </StyledSection>
      </Wrapper>
      <ImgWrapper>
        <Img fluid={data.mainImage.childImageSharp.fluid} />
      </ImgWrapper>
    </div>
  );
}
