import React from "react";
import PropTypes from "prop-types";
import "./layout.css";
import Footer from "../Footer";
import styled from "styled-components";
// import HeaderAndBanner from "../HeaderAndBanner";
import Header from "../Header";
import background from "../../images/bg.png";

const Main = styled.main`
  min-height: calc(100vh - 73px - 273px);
  overflow-x: hidden;
  width: 100vw;
`;

const Wrapper = styled.div`
  background-image: url(${background});
  background-position-x: center;
  background-repeat: no-repeat;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper className="">
      <Main style={{}}>
        <main>{children}</main>
        <Footer />
      </Main>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export const NormalLayout = ({ children, bg = false }) => {
  if (bg) {
    return (
      <Wrapper>
        <Header />
        <Main style={{}}>
          <main>{children}</main>
        </Main>
        <Footer />
      </Wrapper>
    );
  }
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
