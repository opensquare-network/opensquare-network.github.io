import styled from "styled-components";
import React from "react";
import Header from "../Header";
import Banner from "../Banner";

const Wrapper = styled.section``;

export default function HeaderAndBanner() {
  return (
    <Wrapper>
      <Header />
      <Banner />
    </Wrapper>
  );
}
