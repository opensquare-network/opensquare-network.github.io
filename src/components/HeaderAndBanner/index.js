import styled from "styled-components";
import React from "react";
import Header from "../Header";
import Banner from "../Banner";
import background from "./bg.png";

const Wrapper = styled.section`
  background-image: url(${background});
  /* background-size: 100%; */
`;

export default function HeaderAndBanner() {
  return (
    <Wrapper>
      <Header />
      <Banner />
    </Wrapper>
  );
}
