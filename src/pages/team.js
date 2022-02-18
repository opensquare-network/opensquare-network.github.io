import React from "react";
import SEO from "../components/seo";
import { NormalLayout } from "../components/Layout";
import Team from "../components/Team";

export default function () {
  return (
    <NormalLayout bg={true}>
      <SEO title={"OpenSquare Network"} />
      <div className="w-full m-0 h-20"></div>
      <Team />
    </NormalLayout>
  );
}
