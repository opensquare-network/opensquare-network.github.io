import React from "react";
import Icon from "./group.png";
import IconY from "./blocksY.png";

export default function Steps() {
  return (
    <div className="w-full lg:w-1080px lg:m-auto lg:flex items-start">
      <div className="w-full mt-8 lg:mt-12 pt-4 lg:w-60 px-4 lg:px-0 flex justify-center lg:justify-between lg:flex-wrap   lg:mb-0  lg:mr-10">
        <img alt="" src={IconY} className="lg:hidden h-32" />
        <img alt="" src={Icon} className="hidden lg:block lg:mb-9 h-44px" />
        <div className="w-266px ml-10 lg:ml-0">
          <h3 className="text-xl font-bold mb-4">Task Releasing</h3>
          <p className="text-base font-normal text-dark-minor">
            Funder issues a request, hunters apply for it.
          </p>
        </div>
      </div>

      <div className="w-full  mt-8 lg:mt-12 pt-4 lg:w-60 px-4 lg:px-0 flex justify-center lg:justify-between lg:flex-wrap   lg:mb-0  lg:mr-10">
        <img alt="" src={IconY} height={128} className="lg:hidden h-32" />
        <img alt="" src={Icon} className="hidden lg:block lg:mb-9 h-44px" />
        <div className="w-266px ml-10 lg:ml-0">
          <h3 className="text-xl font-bold mb-4">Data Checking</h3>
          <p className="text-base font-normal text-dark-minor">
            Funder check candidates' profile, historic collaborations and
            credits to pick the best one.
          </p>
        </div>
      </div>

      <div className="w-full mt-8 lg:mt-12 pt-4  lg:w-60 px-4 lg:px-0 flex justify-center lg:justify-between lg:flex-wrap   lg:mb-0  lg:mr-10">
        <img alt="" src={IconY} height={128} className="lg:hidden h-32" />
        <img alt="" src={Icon} className="hidden lg:block lg:mb-9 h-44px" />
        <div className="w-266px ml-10 lg:ml-0">
          <h3 className="text-xl font-bold mb-4">Task Compeletion</h3>
          <p className="text-base font-normal text-dark-minor">
            Be assigned, hunters should deliver it on time and maybe report it
            in a timely manner.
          </p>
        </div>
      </div>

      <div className="w-full  mt-8 lg:mt-12 pt-4 lg:w-60 px-4 lg:px-0 flex justify-center lg:justify-between lg:flex-wrap   lg:mb-0  lg:mr-10">
        <img alt="" src={IconY} height={128} className="lg:hidden h-32" />
        <img alt="" src={Icon} className="hidden lg:block lg:mb-9 h-44px" />
        <div className="w-266px ml-10 lg:ml-0">
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
