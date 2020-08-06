import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Slogan from "./Slogan";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export default function () {
  const data = useStaticQuery(graphql`
    query {
      blocksImage: file(relativePath: { eq: "blocks.png" }) {
        childImageSharp {
          fixed(width: 428) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <StyledSection>
      <Img fixed={data.blocksImage.childImageSharp.fixed} />
      <Slogan />
    </StyledSection>
  );
}
