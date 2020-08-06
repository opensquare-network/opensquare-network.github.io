import React from "react";
import SEO from "../components/seo";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Blocks from "../components/Blocks";
import Footer from "../components/Footer";
import Participator from "../components/Participator";
import CodeMoney from "../components/CodeMoney";
import Papers from "../components/Papers";

export default function Home() {
  return (
    <Layout>
      <SEO title={"OpenSquare Network"} />
      <Banner />
      <Blocks />
      <Participator />
      <CodeMoney />
      <Papers />
      <Footer />
    </Layout>
  );
}
