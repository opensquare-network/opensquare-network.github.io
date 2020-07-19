import React from "react";
import SEO from "../components/seo";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Blocks from "../components/Blocks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <SEO title={"OpenSquare Network"} />
      <Banner />
      <Blocks />
      <Footer />
    </Layout>
  );
}
