import React from "react";
import SEO from "../components/seo";
import Layout from "../components/Layout";
import Blocks from "../components/Blocks";
import Participator from "../components/Participator";
import Partners from "../components/Partners";
import PapersEnter from "../components/Papers/papersEnter";
import HeaderAndBanner from "../components/HeaderAndBanner";
import styled from "styled-components";
import background from "../images/bg-1.png";
const Wrapper = styled.div`
  background-image: url(${background});
  background-size: 2187px, 1460px;
  background-repeat: no-repeat;
`;

export default function Home() {
  return (
    <Layout>
      <SEO title={"OpenSquare Network"} />
      <Wrapper className="md:max-w-1400px md:mx-auto">
        <HeaderAndBanner />
        <Blocks />
      </Wrapper>
      <Participator />
      <Partners />
      <PapersEnter />
    </Layout>
  );
}
