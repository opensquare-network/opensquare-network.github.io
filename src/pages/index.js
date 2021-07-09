import React from "react";
import SEO from "../components/seo";
import Layout from "../components/Layout";
import Blocks from "../components/Blocks";
import Participator from "../components/Participator";
import Partners from "../components/Partners";
import PapersEnter from "../components/Papers/papersEnter";

export default function Home() {
  return (
    <Layout>
      <SEO title={"OpenSquare Network"} />
      <Blocks />
      <Participator />
      <Partners />
      <PapersEnter />
    </Layout>
  );
}
