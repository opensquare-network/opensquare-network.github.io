import React from "react";
import CoinAsk from "./coinAsk.png";
import Bounty from "./bounties.png";
import Collaboration from "./collaboration.png";
import Employ from "./employ.png";

export default function Products() {
  return (
    <div className="flex flex-wrap justify-center lg:w-1080px font-inter lg:mt-60px mt-10 lg:flex-row flex-col mx-auto">
      <div className="flex flex-wrap w-full justify-between lg:flex-row flex-col items-start">
        <div
          className="
          relative pt-9 pl-9
          "
        >
          <img
            alt=""
            src={CoinAsk}
            className="absolute w-72px left-0 top-0 shadow-lg bg-white p-4 z-10"
          />
          <div
            className="
            relative pt-6 pr-6 lg:pb-8 pb-6 pl-60px
            bg-white  shadow-lg lg:w-484px
            "
          >
            <p className="p-20-bold mb-2">Paid Q&A</p>
            <p className="text-dark-minor">
              Crypto currencies are paid for questions/topics, best answers got
              them.
            </p>
          </div>
        </div>

        <div
          className="
          relative pt-9 pl-9 lg:mt-80px mt-10
          "
        >
          <img
            alt=""
            src={Bounty}
            className="absolute w-72px left-0 top-0 shadow-lg bg-white p-4 z-10"
          />
          <div
            className="
            relative pt-6 pr-6 lg:pb-8 pb-6 pl-60px
            bg-white  shadow-lg lg:w-484px
            "
          >
            <p className="p-20-bold mb-2">Bounties</p>
            <p className="text-dark-minor">
              Task fund is secured and all processes are guaranteed by smart
              contracts or substrate pallets.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-full justify-between lg:flex-row flex-col items-start">
        <div
          className="
          relative pt-9 pl-9 lg:-mt-8 mt-10
          "
        >
          <img
            alt=""
            src={Employ}
            className="absolute w-72px left-0 top-0 shadow-lg bg-white p-4 z-10"
          />
          <div
            className="
            relative pt-6 pr-6 lg:pb-8 pb-6 pl-60px
            bg-white  shadow-lg lg:w-484px
            "
          >
            <p className="p-20-bold mb-2">Short-term Employment</p>
            <p className="text-dark-minor">
              Mitigate trust & payment worries by code and on-chain credit.
            </p>
          </div>
        </div>

        <div
          className="
          relative pt-9 pl-9 mt-10
          "
        >
          <img
            alt=""
            src={Collaboration}
            className="absolute w-72px left-0 top-0 shadow-lg bg-white p-4 z-10"
          />
          <div
            className="
            relative pt-6 pr-6 lg:pb-8 pb-6 pl-60px
            bg-white  shadow-lg lg:w-484px
            "
          >
            <p className="p-20-bold mb-2">Customized Collaboration</p>
            <p className="text-dark-minor">
              Compose the extracted atomic collaboration elements to serve your
              businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
