import React from "react";
import styled from "styled-components";
import { BaseInner } from "./baseComponents";

const StyledSection = styled.section`
  height: calc(100vh - 73px);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const InnerSection = styled(BaseInner)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-size: 3rem;
    font-weight: 300;
    margin: 0;
    width: 80%;
  }
  h3 {
    font-weight: 700;
    width: 80%;
  }
`;

export default function () {
  return (
    <StyledSection>
      <InnerSection>
        <h1>Empower Reputation Building with Blockchain </h1>
        <h3>
          Collaboration on bounties and your reputation score will be calculated
          from your daily activities
        </h3>
      </InnerSection>
    </StyledSection>
  );
}
