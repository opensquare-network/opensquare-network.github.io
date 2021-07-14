import React from "react";
import SEO from "../components/seo";
import { NormalLayout } from "../components/Layout";
import Team from "../components/Team";

export default function () {
  return (
    <NormalLayout>
      <SEO title={"OpenSquare Network"} />
      <Team />
    </NormalLayout>
  );
}
