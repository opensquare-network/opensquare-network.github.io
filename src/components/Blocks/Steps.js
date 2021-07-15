import React from "react";
import Icon from "./group.png";
import IconY from "./blocksY.png";

export default function Steps() {
  return (
    <div className="w-full md:w-1080px md:m-auto md:flex items-start">
      <div className="w-full mt-8 md:mt-12 pt-4 md:w-60 px-4 md:px-0 flex justify-center md:justify-between md:flex-wrap   md:mb-0  md:mr-10">
        <img alt="" src={IconY} className="md:hidden h-32" />
        <img alt="" src={Icon} className="hidden md:block md:mb-9 h-44px" />
        <div className="w-266px ml-10 md:ml-0">
          <h3 className="text-xl font-bold mb-4">Task Releasing</h3>
          <p className="text-base font-normal text-dark-minor">
            Funder issues a request, hunters apply for it.
          </p>
        </div>
      </div>

      <div className="w-full  mt-8 md:mt-12 pt-4 md:w-60 px-4 md:px-0 flex justify-center md:justify-between md:flex-wrap   md:mb-0  md:mr-10">
        <img alt="" src={IconY} height={128} className="md:hidden h-32" />
        <img alt="" src={Icon} className="hidden md:block md:mb-9 h-44px" />
        <div className="w-266px ml-10 md:ml-0">
          <h3 className="text-xl font-bold mb-4">Data Checking</h3>
          <p className="text-base font-normal text-dark-minor">
            Funder check candidates' profile, historic collaborations and
            credits to pick the best one.
          </p>
        </div>
      </div>

      <div className="w-full mt-8 md:mt-12 pt-4  md:w-60 px-4 md:px-0 flex justify-center md:justify-between md:flex-wrap   md:mb-0  md:mr-10">
        <img alt="" src={IconY} height={128} className="md:hidden h-32" />
        <img alt="" src={Icon} className="hidden md:block md:mb-9 h-44px" />
        <div className="w-266px ml-10 md:ml-0">
          <h3 className="text-xl font-bold mb-4">Task Compeletion</h3>
          <p className="text-base font-normal text-dark-minor">
            Be assigned, hunters should deliver it on time and maybe report it
            in a timely manner.
          </p>
        </div>
      </div>

      <div className="w-full  mt-8 md:mt-12 pt-4 md:w-60 px-4 md:px-0 flex justify-center md:justify-between md:flex-wrap   md:mb-0  md:mr-10">
        <img alt="" src={IconY} height={128} className="md:hidden h-32" />
        <img alt="" src={Icon} className="hidden md:block md:mb-9 h-44px" />
        <div className="w-266px ml-10 md:ml-0">
          <h3 className="text-xl font-bold mb-4">Credit and Incentive</h3>
          <p className="text-base font-normal text-dark-minor">
            Credits built by the subjective comments and objective behaviors,
            incetivized with OpenSquare tokens.
          </p>
        </div>
      </div>
    </div>
  );
}
