import React from "react";
import ProductSlogan from "./ProductSlogan";
import Slogan from "./Slogan";
import Products from "./Products";
import Steps from "./Steps";

export default function Blocks() {
  return (
    <div className="flex flex-col content-around items-center mt-12 md:mt-20 px-4 py-0 md:px-0 font-inter">
      <ProductSlogan />
      <Products />
      <Slogan />
      <Steps /> relative pt-6 pl-15 pr-6 mb-68px sm:ml-0 mr-8 sm:mr-0 w-346px
      sm:w-484px h-160px sm:h-136px shadow-lg sm:even:mt-78px bg-white
    </div>
  );
}
