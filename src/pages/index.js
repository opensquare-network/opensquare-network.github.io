import React from "react";
import SEO from "../components/seo";
import Layout from "../components/Layout";
import Blocks from "../components/Blocks";
import PapersEnter from "../components/Papers/papersEnter";
import HeaderAndBanner from "../components/HeaderAndBanner";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";

export default function Home() {
  return (
    <Layout>
      <SEO title={"OpenSquare Network"} />
      <HeaderAndBanner />
      <Blocks />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <PapersEnter />
    </Layout>
  );
}
