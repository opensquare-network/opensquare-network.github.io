import styled from "styled-components";
import React from "react";
import CodeMoney from "./code_money.svg";

const StyledSection = styled.section`
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  margin-bottom: 100px;

  @media screen and (max-width: 840px) {
    padding: 0 20px;
    justify-content: space-around;
  }
`;

export const InnerSection = styled.main`
  display: flex;

  ul {
    margin: 0 0 0 5rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 700px) {
      margin-left: 2rem;
    }

    li {
      font-size: 1.1rem;
      &:not(:first-of-type) {
        margin-top: 20px;
      }
    }
  }
`;

export default function () {
  return (
    <StyledSection>
      <InnerSection>
        <CodeMoney width={200} height={200} />
        <ul>
          <li>Money is managed by code</li>
          <li>Funder doesn't worry about money loss</li>
          <li>Hunter doesn't worry about payment</li>
        </ul>
      </InnerSection>
    </StyledSection>
  );
}
