import React from "react";
import ProductSlogan from "./ProductSlogan";
import Slogan from "./Slogan";
import Products from "./Products";
import Steps from "./Steps";

export default function Blocks() {
  return (
    <div className="md:w-1080px mx-auto mt-12 md:mt-20 px-4 py-0 md:px-0 font-inter  overflow-hidden">
      <div className="mb-20 overflow-hidden">
        <ProductSlogan />
        <Products />
      </div>

      <div className="mb-120px md:pt-80px overflow-hidden">
        <Slogan />
        <Steps />
      </div>
    </div>
  );
}
