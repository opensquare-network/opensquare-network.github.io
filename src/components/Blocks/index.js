import React from "react";
import ProductSlogan from "./ProductSlogan";
import Slogan from "./Slogan";
import Products from "./Products";

export default function () {
  return (
    <div className="flex flex-col content-around items-center mt-12 px-5 py-0 md:px-0">
      <ProductSlogan />
      <Products />
      <Slogan />
    </div>
  );
}
