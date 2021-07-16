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
    <div className="font-inter lg:mb-20">
      <div className="w-full bg-white">
        <div className="lg:h-288px lg:w-1080px lg:mx-auto pt-20 bg-white">
          <div className="lg:w-1080px m-auto lg:flex mb-4">
            <h1 className="h3-36-bold lg:h2-48-bold text-center mb-3 lg:mb-0">
              We build for
            </h1>
            <h1 className="h3-36-bold lg:h2-48-bold text-center">
              &nbsp;collaborations
            </h1>
          </div>
          <p
            className="
          p-20-normal
          text-dark-minor
          lg:px-0
          lg:w-612px
          text-center lg:text-left
          px-20
          m-auto lg:ml-0
          pb-80px
          "
          >
            The collaboration upon users' credit.
          </p>
        </div>
      </div>
      <div className="h-1px bg-grey-200 w-full"></div>

      <Row className="lg:flex lg:w-1080px lg:mx-auto  mt-12 lg:mt-20 ">
        <h2 className="w-280px mx-auto lg:mx-0 text-center h4-24-bold lg:text-left pt-8 lg:pt-0 pb-68px lg:pb-20">
          Collaboration
        </h2>
        <div className=" lg:flex lg:flex-wrap lg:mt-9">
          <div className="relative bg-white w-286px sm:w-346px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg mb-16 lg:mb-0">
            <img
              src={Bounty}
              alt=""
              className="w-72px p-4 shadow bg-white absolute -top-9 -left-9 "
            />
            <p className="lg:w-full text-left  lg:text-left p-20-bold mb-2">
              OpenSquare Bounties
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              A decentralized bounty collaboration platform.
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

          <div className="relative bg-white w-286px sm:w-346px lg:ml-76px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg">
            <img
              src={Vote}
              alt=""
              className="w-72px p-4 shadow bg-white absolute -top-9 -left-9 "
            />
            <p className="lg:w-full text-left  lg:text-left p-20-bold mb-2">
              OpenSquare Votes
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              An off-chain voting system for Polkadot ecosystem.
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

      <Row className="lg:flex lg:w-1080px lg:mx-auto lg:mt-20">
        <h2 className="w-280px mx-auto lg:mx-0 text-center h4-24-bold lg:text-left pt-8 lg:pt-0 pb-68px lg:pb-20">
          Explorer
        </h2>
        <div className="lg:flex lg:flex-wrap lg:mt-9">
          <div className="relative bg-white w-286px sm:w-346px h-233px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg mb-16 lg:mb-0">
            <img
              src={Dotreasury}
              alt=""
              className="w-72px p-4 shadow bg-white absolute -top-9 -left-9 "
            />
            <p className="lg:w-full text-left  lg:text-left p-20-bold mb-2">
              doTreasury
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              Aims to introduce a retrospect mechanism to Kusama | Polkadot
              treasury.
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
              <span className="mr-6">
                <KusamaTreasury />
              </span>
              <span>
                <StateMintTreasury />
              </span>
            </p>
          </div>

          <div className="relative bg-white w-286px sm:w-346px  h-233px lg:ml-76px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg">
            <img
              src={StateScan}
              alt=""
              className="absolute w-72px p-4 bg-white shadow -top-9 -left-9 "
            />
            <p className="lg:w-full text-left  lg:text-left p-20-bold mb-2">
              Statescan
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              An set of explorers for Polkadot statemint chains.
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              <br />
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
              <span>
                <KusamaTreasury />
              </span>
            </p>
          </div>
        </div>
      </Row>

      <Row className="lg:flex lg:w-1080px lg:mx-auto lg:mt-20">
        <h2 className="w-280px mx-auto lg:mx-0 text-center h4-24-bold lg:text-left pt-8 lg:pt-0 pb-68px lg:pb-20">
          Platform
        </h2>
        <div className="lg:flex lg:flex-wrap lg:mt-9">
          <div className="relative bg-white w-286px sm:w-346px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg mb-16 lg:mb-0">
            <img
              src={CoinAsk}
              alt=""
              className="w-72px p-4 shadow bg-white absolute -top-9 -left-9 "
            />
            <p className="lg:w-full text-left  lg:text-left p-20-bold mb-2">
              CoinAsk
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              Paid Q&A platform for chinese Blockchain Community
            </p>
            <a
              className="block text-right cursor-pointer mt-3"
              href="https://www.coinask.io/"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="inline" />
            </a>
          </div>
        </div>

        <div className="lg:flex lg:flex-wrap lg:mt-9">
          <div className="relative bg-white w-286px sm:w-346px lg:ml-76px  m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg  mb-16 lg:mb-0">
            <img
              src={Odes}
              alt=""
              className="w-72px p-4 shadow bg-white absolute -top-9 -left-9 "
            />
            <p className="lg:w-full text-left  lg:text-left p-20-bold mb-2">
              Odes
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              Paid Q&A platform for English blockchain community.
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

      <div className="hidden lg:hidden lg:w-1080px mx-auto mt-40">
        <div className="lg:hidden">
          <div>
            <h2
              className="
                h4-24-bold lg:h3-36-bold
                text-center  lg:text-left
                whitespace-nowrap
                mb-1
              "
            >
              Building with OpenSquare
            </h2>
            <p className="px-8 mb-8 text-dark-minor p-16-normal text-center lg:text-left lg:w-512px">
              In mauris mauris amet vitae curabitur.{" "}
              <br className="lg:hidden" /> Convallis eu, et tincidunt laoreet
              morbi lectus volutpat. Sit lectus nisl arcu porttitor pulvinar id.
            </p>
          </div>
        </div>

        <div className="lg:w-480px h-60 bg-grey-200 mx-4 lg:ml-0 lg:mr-16 mb-20"></div>

        <div className="lg:float-right hidden lg:flex lg:items-center lg:w-560px lg:h-240px">
          <div>
            <h2
              className="
                h4-24-bold lg:h3-36-bold
                text-center  lg:text-left
                whitespace-nowrap
                lg:mb-4
              "
            >
              Building with OpenSquare
            </h2>
            <p className="text-dark-minor p-16-normal text-center lg:text-left lg:w-512px">
              In mauris mauris amet vitae curabitur.{" "}
              <br className="lg:hidden" /> Convallis eu, et tincidunt laoreet
              morbi lectus volutpat. Sit lectus nisl arcu porttitor pulvinar id.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
