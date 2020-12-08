import styled from "styled-components";
import React from "react";
import Header from "../Header";
import Banner from "../Banner";
import background from "./background.png";

const Wrapper = styled.section`
  padding-top: 16px;
  background-image: url(${background});
  background-size: 100%;
`;

export default function HeaderAndBanner() {
  return (
    <Wrapper>
      <Header />
      <Banner />
    </Wrapper>
  );
}
