import React from "react";
import SEO from "../components/seo";
import { NormalLayout } from "../components/Layout";
import Product from "../components/Product";

export default function () {
  return (
    <NormalLayout>
      <SEO title={"OpenSquare Network"} />
      <Product />
    </NormalLayout>
  );
}
