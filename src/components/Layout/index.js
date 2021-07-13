import React from "react";
import PropTypes from "prop-types";
import "./layout.css";
import Footer from "../Footer";
import styled from "styled-components";
import HeaderAndBanner from "../HeaderAndBanner";
import Header from "../Header";
import background from "../HeaderAndBanner/bg.png";

const Main = styled.main`
  min-height: calc(100vh - 73px - 273px);
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  //background-image: url(${background});
  background-size: 100%;
  background-repeat: no-repeat;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <HeaderAndBanner />
      <Main style={{}}>
        <main>{children}</main>
      </Main>
      <Footer />
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export const NormalLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main style={{}}>
        <main>{children}</main>
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
