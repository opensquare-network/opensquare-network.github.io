import React from "react";
import Patract from "./patract.png";
import Phala from "./phala.png";
import Subsocial from "./subsocial.png";
import Litentry from "./litentry.png";
import PolkaBase from "./polkabase.png";
import Crust from "./crust.png";
import Merico from "./merico.png";
import ChainX from "./chainx.png";
import Darwinia from "./darwinia.png";
import Bifrost from "./bifrost.png";
import Stafi from "./stafi.png";
import DoraHacks from "./dorahacks.png";
import Divider from "./divider.svg";

export default function () {
  return (
    <div className="pt-120px pb-80px">
      <div className="text-center">
        <h2 className="h4-24-bold md:h3-36-bold mb-1 md:mb-4 text-dark-major">
          Meet our Partners
        </h2>
        <p className="text-dark-minor mb-8 md:mb-12 p-16-normal md:p-18-normal font-inter">
          We partner with each other to build the Web 3.0
        </p>
        <div>
          <div className="md:flex justify-center">
            <div className="flex  justify-center">
              <a
                className="mr-10"
                href="https://patract.io/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-150px md:w-240px " src={Patract} alt="" />
              </a>
              <a
                className="md:mr-10"
                href="https://phala.network/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-150px md:w-240px " src={Phala} alt="" />
              </a>
            </div>
            <div className="flex justify-center md:hidden">
              <Divider />
            </div>
            <div className="flex justify-center">
              <a
                className="mr-10"
                href="https://subsocial.network/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-150px md:w-240px " src={Subsocial} alt="" />
              </a>
              <a
                href="https://www.litentry.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-150px md:w-240px " src={Litentry} alt="" />
              </a>
            </div>
            <div className="flex justify-center md:hidden">
              <Divider />
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <Divider className="mr-246px" />
            <Divider className="mr-246px" />
            <Divider />
          </div>

          <div className="md:flex justify-center">
            <div className="flex  justify-center">
              <a
                className="mr-10"
                href="https://polkabase.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-150px md:w-240px " src={PolkaBase} alt="" />
              </a>
              <a
                className="md:mr-10"
                href="https://crust.network/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-150px md:w-240px " src={Crust} alt="" />
              </a>
            </div>
            <div className="flex justify-center md:hidden">
              <Divider />
            </div>
            <div className="flex justify-center">
              <a
                className="mr-10"
                href="https://meri.co/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-150px md:w-240px " src={Merico} alt="" />
              </a>
              <a href="https://chainx.org/" target="_blank" rel="noreferrer">
                <img className="w-150px md:w-240px " src={ChainX} alt="" />
              </a>
            </div>
            <div className="flex justify-center md:hidden">
              <Divider />
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <Divider className="mr-246px" />
            <Divider className="mr-246px" />
            <Divider />
          </div>

          <div className="md:flex justify-center">
            <div className="flex  justify-center">
              <a
                className="mr-10"
                href="https://darwinia.network/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-150px md:w-240px " src={Darwinia} alt="" />
              </a>
              <a
                className="md:mr-10"
                href="https://bifrost.finance"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-150px md:w-240px " src={Bifrost} alt="" />
              </a>
            </div>
            <div className="flex justify-center md:hidden">
              <Divider />
            </div>
            <div className="flex justify-center">
              <a
                className="mr-10"
                href="https://stafi.io/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-150px md:w-240px " src={Stafi} alt="" />
              </a>
              <a href="https://dorahacks.com/" target="_blank" rel="noreferrer">
                <img className="w-150px md:w-240px " src={DoraHacks} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
