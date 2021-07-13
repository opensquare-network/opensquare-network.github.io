import React from "react";
import ProductSlogan from "./ProductSlogan";
import Slogan from "./Slogan";
import Products from "./Products";
import Steps from "./Steps";

export default function Blocks() {
  return (
    <div className="flex flex-col content-around items-center mt-12 px-4 py-0 md:px-0 font-inter">
      <ProductSlogan />
      <Products />
      <Slogan />
      <Steps />
    </div>
  );
}
