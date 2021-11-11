import React from "react";
import ProductSlogan from "./ProductSlogan";
import Slogan from "./Slogan";
import Products from "./Products";
import Steps from "./Steps";

export default function Blocks() {
  return (
    <div className="lg:w-1080px mx-auto font-inter lg:max-w-none max-w-lg lg:py-80px py-10">
      <div className="lg:mb-20 mb-10 lg:px-0 px-4">
        <ProductSlogan />
        <Products />
      </div>

      <div className="lg:pt-80px pt-10">
        <Slogan />
        <Steps />
      </div>
    </div>
  );
}
