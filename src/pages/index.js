import React from "react";
import SEO from "../components/seo";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Blocks from "../components/Blocks";
import Participator from "../components/Participator";
import CodeMoney from "../components/CodeMoney";
import Scores from "../components/Scores";
import Papers from "../components/Papers";
import CollaborationNetwork from "../components/CollaborationNetwork";
import Friends from "../components/Friends";

export default function Home() {
  return (
    <Layout>
      <SEO title={"OpenSquare Network"} />
      <Banner />
      <Blocks />
      <Participator />
      <CodeMoney />
      <Scores />
      <CollaborationNetwork />
      <Friends />
      <Papers />
    </Layout>
  );
}
