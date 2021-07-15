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
        <p className="text-dark-minor mb-8 md:mb-12 p-16-normal md:p-18-normal font-inter">
          we partner with each other to build web 3.0.
        </p>
        <img
          className="hidden md:block mx-auto w-1080px "
          src={Partners}
          alt=""
        />
        <img className="md:hidden mx-auto" src={PartnersY} alt="" />
      </div>
    </div>
  );
}
