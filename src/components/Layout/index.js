import React from "react";
import PropTypes from "prop-types";
import "./layout.css";
import Footer from "../Footer";
import styled from "styled-components";
import HeaderAndBanner from "../HeaderAndBanner";
import Header from "../Header";
import background from "../../images/bg-1.png";

const Main = styled.main`
  min-height: calc(100vh - 73px - 273px);
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background-image: url(${background});
  background-size: 2187px, 1460px;
  background-repeat: no-repeat;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper className="md:max-w-1400px md:mx-auto">
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
