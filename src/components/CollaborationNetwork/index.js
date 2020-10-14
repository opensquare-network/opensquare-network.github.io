import React from "react";
import styled from "styled-components";
import Network from "./network.png";

const StyledSection = styled.section`
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
`;

export const InnerSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 1.5;
    margin: 0;
    max-width: 440px;
  }

  img {
    @media screen and (min-width: 1080px) {
      width: 60%;
    }

    @media screen and (max-width: 1080px) {
      width: 80%;
    }

    @media screen and (max-width: 768px) {
      width: calc(100% - 40px);
    }
  }
`;

export default function () {
  return (
    <StyledSection>
      <InnerSection>
        <h2>Finally we build a trusted collaboration network</h2>
        <img src={Network} alt="" />
      </InnerSection>
    </StyledSection>
  );
}
