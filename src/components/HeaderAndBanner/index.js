import React from "react";
import Header from "../Header";
import Banner from "../Banner";

export default function HeaderAndBanner() {
  return (
    <div>
      <Header />
      <div className="w-full m-0 h-20"></div>
      <Banner />
    </div>
  );
}
