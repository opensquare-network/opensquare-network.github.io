import React from "react";
import Icon1 from "./group-1.png";
import Icon2 from "./group-2.png";
import Icon3 from "./group-3.png";
import Icon4 from "./group-4.png";
import IconY from "./blocksY.png";

export default function Steps() {
  return (
    <div className="w-full lg:w-1080px lg:m-auto lg:flex items-start pb-20">
      <div className="w-full mt-8 lg:mt-60px pt-4 lg:w-60 px-4 lg:px-0 flex justify-center lg:justify-between lg:flex-wrap   lg:mb-0  lg:mr-10">
        <img alt="" src={IconY} className="lg:hidden h-32" />
        <img alt="" src={Icon1} className="hidden lg:block lg:mb-8 h-44px" />
        <div className="w-266px ml-10 lg:ml-0">
          <h3 className="p-20-bold mb-4">Task Releasing</h3>
          <p className="text-base font-normal text-dark-minor">
            Funder issues a request, hunters apply for it.
          </p>
        </div>
      </div>

      <div className="w-full  mt-8 lg:mt-60px pt-4 lg:w-60 px-4 lg:px-0 flex justify-center lg:justify-between lg:flex-wrap   lg:mb-0  lg:mr-10">
        <img alt="" src={IconY} height={128} className="lg:hidden h-32" />
        <img alt="" src={Icon2} className="hidden lg:block lg:mb-8 h-44px" />
        <div className="w-266px ml-10 lg:ml-0">
          <h3 className="p-20-bold mb-4">Data Checking</h3>
          <p className="text-base font-normal text-dark-minor">
            Funder check candidates' profile, historic collaborations and
            credits to pick the best one.
          </p>
        </div>
      </div>

      <div className="w-full mt-8 lg:mt-60px pt-4  lg:w-60 px-4 lg:px-0 flex justify-center lg:justify-between lg:flex-wrap   lg:mb-0  lg:mr-10">
        <img alt="" src={IconY} height={128} className="lg:hidden h-32" />
        <img alt="" src={Icon3} className="hidden lg:block lg:mb-8 h-44px" />
        <div className="w-266px ml-10 lg:ml-0">
          <h3 className="p-20-bold mb-4">Task Compeletion</h3>
          <p className="text-base font-normal text-dark-minor">
            Be assigned, hunters should deliver it on time and maybe report it
            in a timely manner.
          </p>
        </div>
      </div>

      <div className="w-full  mt-8 lg:mt-60px pt-4 lg:w-60 px-4 lg:px-0 flex justify-center lg:justify-between lg:flex-wrap   lg:mb-0  lg:mr-10">
        <img alt="" src={IconY} height={128} className="lg:hidden h-32" />
        <img alt="" src={Icon4} className="hidden lg:block lg:mb-8 h-44px" />
        <div className="w-266px ml-10 lg:ml-0">
          <h3 className="p-20-bold mb-4">Credit and Incentive</h3>
          <p className="text-base font-normal text-dark-minor">
            Credits built by the subjective comments and objective behaviors,
            incetivized with OpenSquare tokens.
          </p>
        </div>
      </div>
    </div>
  );
}
