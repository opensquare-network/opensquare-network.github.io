import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import ArrowNext from "./arrow-next.png";

const Wrapper = styled.div`
  text-align: center;
  position: relative;

  a {
    position: absolute;
    display: inline-flex;
    align-items: center;

    font-weight: bold;
    font-size: 1.75rem;
    line-height: 1.5;
    color: #fff;

    text-decoration: none;
    left: calc(50%);
    top: calc(50% - 30px);

    img {
      margin-left: 1.5rem;
    }
  }
`;

export default function () {
  const data = useStaticQuery(graphql`
    query {
      paperBgImage: file(relativePath: { eq: "bg-paper.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Img fluid={data.paperBgImage.childImageSharp.fluid} />
      <a
        href="https://github.com/opensquare-network/papers"
        target="_blank"
        rel="noreferrer"
      >
        Check Our Papers
        <img src={ArrowNext} alt="" width={48} height={48} />
      </a>
    </Wrapper>
  );
}
