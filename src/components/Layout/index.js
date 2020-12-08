import React from "react";
import PropTypes from "prop-types";
import "./layout.css";
import Footer from "../Footer";
import styled from "styled-components";
import HeaderAndBanner from "../HeaderAndBanner";

const Main = styled.main`
  min-height: calc(100vh - 73px - 273px);
  overflow-x: hidden;
`;

const Layout = ({ children }) => {
  return (
    <>
      <HeaderAndBanner />
      <Main style={{}}>
        <main>{children}</main>
      </Main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
