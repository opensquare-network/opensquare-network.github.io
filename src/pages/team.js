import React from "react";
import SEO from "../components/seo";
import Layout from "../components/Layout";
import Team from "../components/Team";

export default function () {
  return (
    <Layout>
      <SEO title={"OpenSquare Network"} />
      <Team />
    </Layout>
  );
}
