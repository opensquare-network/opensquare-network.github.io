import React from "react";
import styled from "styled-components";
import { BaseInner } from "../baseComponents";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 500px;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const InnerSection = styled(BaseInner)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-size: 46px;
    font-weight: bold;
    margin: 0;
    width: 75%;
    text-align: center;
    color: #1d253c;
    line-height: 1.5;
  }
  h3 {
    margin-top: 10px;
    font-weight: normal;
    font-size: 16px;
    width: 50%;
    text-align: center;
    color: rgba(29, 37, 60, 0.64);
    line-height: 1.5;
  }
`;

export default function () {
  return (
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
  );
}
