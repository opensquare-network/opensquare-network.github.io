import React from "react";
import styled from "styled-components";
import Dotreasury from "./dotreasury.png";
import CoinAsk from "./coinask.png";
import Odes from "./odes.png";
import StateScan from "./statescan.png";
import Bounty from "./bounties.png";
import Vote from "./votes.png";

import ExternalLink from "./externalLink.svg";
import KusamaTreasury from "./kusamaTreasury.svg";
import StateMintTreasury from "./statemintTreasury.svg";

const Row = styled.div``;

export default function Product() {
  return (
    <div className="font-inter md:mb-20">
      <div className="md:h-288px md:w-1080px md:mx-auto pt-20">
        <div className="md:w-1080px m-auto md:flex mb-4">
          <h1 className="h3-36-bold md:h2-48-bold text-center mb-3 md:mb-0">
            We build for
          </h1>
          <h1 className="h3-36-bold md:h2-48-bold text-center">
            collaboration
          </h1>
        </div>
        <p
          className="
          p-20-normal
          text-dark-minor
          md:px-0
          md:w-612px
          text-center md:text-left
          px-20
          m-auto md:ml-0
          pb-80px
          "
        >
          Et, suspendisse ornare integer felis senectus ac viverra. Sed
          ullamcorper venenatis.
        </p>
      </div>
      <div className="h-1px bg-grey-200 w-full"></div>

      <Row className="md:flex md:w-1080px md:mx-auto  mt-12 md:mt-20 ">
        <h2 className="w-280px mx-auto md:mx-0 text-center h4-24-bold md:text-left pt-8 md:pt-0 pb-68px md:pb-20">
          Collaboration
        </h2>
        <div className=" md:flex md:flex-wrap md:mt-9">
          <div className="relative bg-white w-346px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg mb-16 md:mb-0">
            <img
              src={Bounty}
              alt=""
              className="w-72px p-4 shadow bg-white absolute -top-9 -left-9 "
            />
            <p className="md:w-full text-left  md:text-left p-20-bold mb-2">
              OpenSquare Bounties
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
              euismod pulvinar nisl.
            </p>
            <p className="mt-3 text-right">
              <span
                className="inline-block px-3 h-6 bg-grey-300 text-white  p-12-bold"
                style={{ lineHeight: "24px" }}
              >
                Coming Soon
              </span>
            </p>
          </div>

          <div className="relative bg-white w-346px md:ml-76px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg">
            <img
              src={Vote}
              alt=""
              className="w-72px p-4 shadow bg-white absolute -top-9 -left-9 "
            />
            <p className="md:w-full text-left  md:text-left p-20-bold mb-2">
              doTreasury
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
              euismod pulvinar nisl.
            </p>
            <p className="mt-3 text-right">
              <span
                className="inline-block px-3 h-6 bg-grey-300 text-white  p-12-bold"
                style={{ lineHeight: "24px" }}
              >
                Coming Soon
              </span>
            </p>
          </div>
        </div>
      </Row>

      <Row className="md:flex md:w-1080px md:mx-auto md:mt-20">
        <h2 className="w-280px mx-auto md:mx-0 text-center h4-24-bold md:text-left pt-8 md:pt-0 pb-68px md:pb-20">
          Explorer
        </h2>
        <div className="md:flex md:flex-wrap md:mt-9">
          <div className="relative bg-white w-346px h-233px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg mb-16 md:mb-0">
            <img
              src={Dotreasury}
              alt=""
              className="w-72px p-4 shadow bg-white absolute -top-9 -left-9 "
            />
            <p className="md:w-full text-left  md:text-left p-20-bold mb-2">
              doTreasury
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
              euismod pulvinar nisl.
            </p>
            <a
              className="block text-right"
              href="https://www.dotreasury.com/"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="inline" />
            </a>
            <p className="border-t border-grey-200 mt-3 pt-2 flex">
              <a className="mr-6" href="/">
                <KusamaTreasury />
              </a>
              <a href="/">
                <StateMintTreasury />
              </a>
            </p>
          </div>

          <div className="relative bg-white w-346px  h-233px md:ml-76px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg">
            <img
              src={StateScan}
              alt=""
              className="absolute w-72px p-4 bg-white shadow -top-9 -left-9 "
            />
            <p className="md:w-full text-left  md:text-left p-20-bold mb-2">
              statescan
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
              euismod pulvinar nisl.
            </p>
            <a
              className="block text-right"
              href="https://www.statescan.io/"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="inline" />
            </a>
            <p className="border-t  border-grey-200  mt-3 pt-2">
              <a href="/">
                <KusamaTreasury />
              </a>
            </p>
          </div>
        </div>
      </Row>

      <Row className="md:flex md:w-1080px md:mx-auto md:mt-20">
        <h2 className="w-280px mx-auto md:mx-0 text-center h4-24-bold md:text-left pt-8 md:pt-0 pb-68px md:pb-20">
          Platform
        </h2>
        <div className="md:flex md:flex-wrap md:mt-9">
          <div className="relative bg-white w-346px h-192px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg">
            <img
              src={CoinAsk}
              alt=""
              className="w-72px p-4 shadow bg-white absolute -top-9 -left-9 "
            />
            <p className="md:w-full text-left  md:text-left p-20-bold mb-2">
              CoinAsk
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
              euismod pulvinar nisl.
            </p>
            <a
              className="block text-right cursor-pointer"
              href="https://www.coinask.io/"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="inline absolute bottom-7 right-7" />
            </a>
          </div>
        </div>

        <div className="md:flex md:flex-wrap md:mt-9">
          <div className="relative bg-white w-346px md:ml-76px h-192px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg">
            <img
              src={Odes}
              alt=""
              className="w-72px p-4 shadow bg-white absolute -top-9 -left-9 "
            />
            <p className="md:w-full text-left  md:text-left p-20-bold mb-2">
              Odes
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
              euismod pulvinar nisl.
            </p>
            <p className="mt-3 text-right">
              <span
                className="inline-block px-3 h-6 bg-grey-300 text-white p-12-bold"
                style={{ lineHeight: "24px" }}
              >
                Coming Soon
              </span>
            </p>
          </div>
        </div>
      </Row>

      <div className="hidden md:hidden md:w-1080px mx-auto mt-40">
        <div className="md:hidden">
          <div>
            <h2
              className="
                h4-24-bold md:h3-36-bold
                text-center  md:text-left
                whitespace-nowrap
                mb-1
              "
            >
              Building with OpenSquare
            </h2>
            <p className="px-8 mb-8 text-dark-minor p-16-normal text-center md:text-left md:w-512px">
              In mauris mauris amet vitae curabitur.{" "}
              <br className="md:hidden" /> Convallis eu, et tincidunt laoreet
              morbi lectus volutpat. Sit lectus nisl arcu porttitor pulvinar id.
            </p>
          </div>
        </div>

        <div className="md:w-480px h-60 bg-grey-200 mx-4 md:ml-0 md:mr-16 mb-20"></div>

        <div className="md:float-right hidden md:flex md:items-center md:w-560px md:h-240px">
          <div>
            <h2
              className="
                h4-24-bold md:h3-36-bold
                text-center  md:text-left
                whitespace-nowrap
                md:mb-4
              "
            >
              Building with OpenSquare
            </h2>
            <p className="text-dark-minor p-16-normal text-center md:text-left md:w-512px">
              In mauris mauris amet vitae curabitur.{" "}
              <br className="md:hidden" /> Convallis eu, et tincidunt laoreet
              morbi lectus volutpat. Sit lectus nisl arcu porttitor pulvinar id.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
