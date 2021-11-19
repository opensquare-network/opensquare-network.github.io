import React from "react";

import ImgSrc from "./img.png";
import ImgSmallSrc from "./img-small.png";

export default function () {
  return (
    <section className="mx-auto font-inter">
      <div className="lg:pt-20 lg:pb-120px py-60px lg:max-w-none max-w-lg mx-auto lg:px-0 px-3">
        <div className="lg:h2-40-bold h4-24-bold text-center">
          Trading code, design and ideas
        </div>
        <div className="lg:p-18-normal p-16-normal text-dark-minor mt-4 text-center">
          Collaboration is another way of trading, instead of tokens, but work.
        </div>
        <img
          src={ImgSrc}
          className="mx-auto my-60px hidden lg:block max-w-1250px"
          alt=""
        />
        <img
          src={ImgSmallSrc}
          className="mx-auto my-5 lg:hidden w-full"
          alt=""
        />
        <div className="lg:p-18-normal p-16-normal text-dark-minor text-center max-w-720px mx-auto">
          Blockchain will make the work trading more transparent and payment
          secure. Objective collaboration rules can be enacted on-chain.
          Collaborators subjective remarks will be recorded on-chain. Either the
          objective behaviors or the subjective remarks will make the credit
          building possible.
        </div>
      </div>
    </section>
  );
}
