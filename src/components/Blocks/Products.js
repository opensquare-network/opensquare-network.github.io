import React from "react";
import CoinAsk from "./coinAsk.png";
import Bounty from "./bounties.png";
import Collaboration from "./collaboration.png";
import Employ from "./employ.png";

export default function Products() {
  return (
    <div className="flex flex-wrap pl-9 justify-center w-full lg:w-1080px font-inter  mt-12 pt-9 break-all">
      <div className="flex flex-wrap justify-center md:mx-auto">
        <div
          className="
          relative pt-6 pl-15 pr-6
          sm:ml-0 mr-0 lg:mr-76px mb-68px lg:mb-0
          w-286px smsm:w-346px sm:w-484px
          h-200px sm:h-136px
          bg-white  shadow-lg
          "
        >
          <img
            alt=""
            src={CoinAsk}
            className="absolute w-56px sm:w-72px p-4 bg-white -top-7 sm:-top-9 -left-7 sm:-left-9 shadow-lg"
          />
          <p className="p-20-bold mb-2"> Paid Q&A</p>
          <p className="text-dark-minor">
            Crypto currencies are paid for questions/topics, best answers got
            them.
          </p>
        </div>

        <div
          className="
          relative pt-6 pl-15 pr-6
          sm:ml-0 mr-0 mb-68px lg:mb-0 lg:mt-76px
          w-286px smsm:w-346px sm:w-484px
          h-200px sm:h-136px
          bg-white  shadow-lg
          "
        >
          <img
            alt=""
            src={Bounty}
            className="absolute w-56px sm:w-72px p-4 bg-white  -top-7 sm:-top-9 -left-7 sm:-left-9 shadow-lg"
          />
          <p className="p-20-bold mb-2">Bounties</p>
          <p className="text-dark-minor">
            Task fund is secured and all processes are guaranteed by smart
            contracts or substrate pallets.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        <div
          className="
          relative pt-6 pl-15 pr-6
          sm:ml-0 mr-0 lg:mr-76px mb-68px lg:mb-0
          w-286px smsm:w-346px sm:w-484px
          h-200px sm:h-136px
          bg-white  shadow-lg
          "
        >
          <img
            alt=""
            src={Employ}
            className="absolute w-56px sm:w-72px p-4 bg-white  -top-7 sm:-top-9 -left-7 sm:-left-9 shadow-lg"
          />
          <p className="p-20-bold mb-2">Short-term Employment</p>
          <p className="text-dark-minor">
            Mitigate trust & payment worries by code and on-chain credit.
          </p>
        </div>
        <div
          className="
          relative pt-6 pl-15 pr-6
          sm:ml-0 mr-0  sm:mr-0 mb-68px md:mb-0 lg:mt-76px
          w-286px smsm:w-346px sm:w-484px
          h-200px sm:h-136px
          bg-white  shadow-lg
          "
        >
          <img
            alt=""
            src={Collaboration}
            className="absolute w-56px sm:w-72px p-4 bg-white  -top-7 sm:-top-9 -left-7 sm:-left-9 shadow-lg"
          />
          <p className="p-20-bold mb-2">Customized Collaboration</p>
          <p className="text-dark-minor">
            Compose the extracted atomic collaboration elements to serve your
            businesses.
          </p>
        </div>
      </div>
    </div>
  );
}
