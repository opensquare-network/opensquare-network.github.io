import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <Layout>
      <SEO title={"OpenSquare Network"} />
      <Banner />
    </Layout>
  );
}
