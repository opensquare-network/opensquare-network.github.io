import React from "react";
import styled from "styled-components";
import Slogan from "./Slogan";
import Products from "./Steps";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export default function () {
  return (
    <StyledSection>
      <Slogan />
      <Products />
    </StyledSection>
  );
}
