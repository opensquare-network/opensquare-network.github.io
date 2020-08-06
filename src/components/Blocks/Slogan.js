import React from "react";
import styled from "styled-components";

const InnerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 100px;

  h3,
  p {
    margin: 0;
  }

  @media screen and (min-width: 1080px) {
    width: 1080px;
  }
`;

const Title = styled.h3`
  text-align: center;
  min-width: 204px;
  font-weight: 600;
  font-size: 1.5rem;
  color: #000000;
  letter-spacing: 0.2px;
`;

const Detail = styled.p`
  font-size: 1rem;
  color: #000000;
  letter-spacing: 0.12px;
  text-align: center;
`;

export default function () {
  return (
    <InnerSection>
      <Title>Transparent & Credible</Title>
      <Detail>
        Provided by on-chain bounty collaboration and reputation calculation
      </Detail>
    </InnerSection>
  );
}
