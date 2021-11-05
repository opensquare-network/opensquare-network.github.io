import React from "react";
import SEO from "../components/seo";
import Layout from "../components/Layout";
import Blocks from "../components/Blocks";
import Partners from "../components/Partners";
import PapersEnter from "../components/Papers/papersEnter";
import HeaderAndBanner from "../components/HeaderAndBanner";
import SectionOne from "../components/SectionOne";

export default function Home() {
  return (
    <Layout>
      <SEO title={"OpenSquare Network"} />
      <HeaderAndBanner />
      <Blocks />
      <SectionOne />
      <Partners />
      <PapersEnter />
    </Layout>
  );
}
