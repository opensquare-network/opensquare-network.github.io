import React from "react";
import Partners from "./partners.png";
import PartnersY from "./partnersY.png";

export default function () {
  return (
    <div className="pt-120px pb-80px">
      <div className="text-center">
        <h2 className="h4-24-bold md:h3-36-bold mb-1 md:mb-4 text-dark-major">
          Meet our Partners
        </h2>
        <p className="text-dark-minor mb-8 p-16-normal md:p-18-normal font-inter">
          Molestie eget lacus nisi, aliquet tincidunt tristique turpis.
        </p>
        <img className="hidden md:block mx-auto" src={Partners} alt="" />
        <img className="md:hidden mx-auto" src={PartnersY} alt="" />
      </div>
    </div>
  );
}
