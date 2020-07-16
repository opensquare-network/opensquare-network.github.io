import React from "react";
import PropTypes from "prop-types";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{}}>
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
