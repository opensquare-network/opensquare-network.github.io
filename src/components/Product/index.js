import React from "react";
import styled from "styled-components";
import Dotreasury from "./icons-prodcut-dotreasury.svg";
import CoinAsk from "./icons-prodcut-coinask.svg";
import StateScan from "./icons-prodcut-statescan.svg";
import Bounty from "./icons-prodcut-bounties.svg";
import Vote from "./icons-prodcut-votes.svg";
import Subsquare from "./icons-prodcut-subsquare.svg";
import PaidQA from "./icons-prodcut-paid-qa.svg";

import ExternalLink from "./externalLink.svg";
import KusamaTreasury from "./kusamaTreasury.svg";
import EdgTreasury from "./edgtreasury.svg";
import StateMintTreasury from "./statemintTreasury.svg";

const Row = styled.div`
  img,
  svg {
    background-color: white;
  }
`;

export default function Product() {
  return (
    <div className="font-inter lg:mb-20">
      <div className="w-full bg-white">
        <div className="lg:h-236px lg:w-1080px lg:mx-auto pt-20 bg-white">
          <div className="lg:w-1080px m-auto lg:flex mb-4">
            <h1 className="h4-24-bold lg:h3-36-bold  text-center mb-3 lg:mb-0">
              We build for collaborations
            </h1>
          </div>
          <p
            className="
          p-20-normal
          text-dark-minor
          pl-5
          lg:pl-0
          lg:w-612px
          text-center
          lg:text-left
          m-auto lg:ml-0
          pb-80px
          "
          >
            The collaboration upon users' credit.
          </p>
        </div>
      </div>
      <div className="h-1px bg-grey-200 w-full"></div>

      <Row className="lg:w-1080px lg:mx-auto  mt-12 lg:mt-20">
        <h2 className="mx-auto lg:mx-0 h4-24-bold text-left pt-8 lg:pt-0 pb-68px lg:pb-10 ml-5 lg:ml-0">
          Governance platforms
        </h2>
        <div className="lg:flex lg:flex-wrap lg:mt-9 lg:ml-9">
          <div className="relative bg-white w-286px sm:w-484px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg mb-16 lg:mb-0 border border-grey-200">
            <div className="bg-white w72px p-4 shadow bg-white absolute -top-9 -left-9 border border-grey-200">
              <Subsquare />
            </div>
            <p className="lg:w-full text-left  lg:text-left p-20-medium mb-2">
              SubSquare
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              A governance platform for substrate based chains.
            </p>
            <a
              className="block text-right"
              href="https://www.subsquare.io/"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="inline" />
            </a>
          </div>

          <div className="border border-grey-200 relative bg-white w-286px sm:w-484px lg:ml-76px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg">
            <div className="bg-white w72px p-4 shadow bg-white absolute -top-9 -left-9 border border-grey-200">
              <Vote />
            </div>
            <p className="lg:w-full text-left  lg:text-left p-20-medium mb-2">
              OpenSquare Votes
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              An off-chain voting system for Polkadot ecosystem.
            </p>
            <a
              className="block text-right"
              href="https://www.opensquare.io/"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="inline" />
            </a>
          </div>
        </div>
      </Row>

      <Row className="lg:w-1080px lg:mx-auto lg:mt-20">
        <h2 className="mx-auto lg:mx-0 h4-24-bold text-left pt-8 lg:pt-0 pb-68px lg:pb-10 ml-5 lg:ml-0">
          Explorers
        </h2>
        <div className="lg:flex lg:flex-wrap lg:mt-9 lg:ml-9">
          <div className="border border-grey-200 relative bg-white w-286px sm:w-484px h-193px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg mb-16 lg:mb-0">
            <div className="bg-white w72px p-4 shadow bg-whiCte absolute -top-9 -left-9 border border-grey-200">
              <Dotreasury />
            </div>
            <p className="lg:w-full text-left  lg:text-left p-20-medium mb-2">
              doTreasury
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              A retrospect mechanism to KSM&DOT treasury.
            </p>
            <a
              className="block text-right"
              href="https://www.dotreasury.com/"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="inline" />
            </a>
            <p className="border-t border-grey-200 mt-3 pt-4 flex flex-wrap">
              <span className="mr-6">
                <KusamaTreasury />
              </span>
              <span className="mr-6">
                <StateMintTreasury />
              </span>
              <span>
                <EdgTreasury />
              </span>
            </p>
          </div>

          <div className="border border-grey-200 relative bg-white w-286px sm:w-484px  h-193px lg:ml-76px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg">
            <div className="absolute bg-white w72px p-4 bg-white shadow -top-9 -left-9 border border-grey-200">
              <StateScan />
            </div>
            <p className="lg:w-full text-left  lg:text-left p-20-medium mb-2">
              Statescan
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              An set of explorers for Polkadot statemint chains.
            </p>
            <a
              className="block text-right"
              href="https://www.statescan.io/"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="inline" />
            </a>
            <p className="border-t  border-grey-200  mt-3 pt-4">
              <span>
                <KusamaTreasury />
              </span>
            </p>
          </div>
        </div>
      </Row>

      <Row className="lg:w-1080px lg:mx-auto lg:mt-20 mb-10 lg:mb-0">
        <h2 className="mx-auto lg:mx-0 h4-24-bold text-left pt-8 lg:pt-0 pb-68px lg:pb-10 ml-5 lg:ml-0">
          Collaboration platforms
        </h2>
        <div className="lg:flex lg:flex-wrap lg:mt-9 lg:ml-9">
          <div className="border border-grey-200 relative bg-white w-286px sm:w-484px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg mb-16 lg:mb-0">
            <div className="bg-white w72px p-4 shadow bg-white absolute -top-9 -left-9 border border-grey-200">
              <PaidQA />
            </div>
            <p className="lg:w-full text-left  lg:text-left p-20-medium mb-2">
              OpenSquare Paid QA
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              A decentralized paid QA platform.
            </p>
            <p className="mt-3 text-right">
              <span
                className="inline-block px-3 h-6 bg-grey-300 text-white p-12-bold"
                style={{ lineHeight: "24px" }}
              >
                TBD
              </span>
            </p>
          </div>

          <div className="border border-grey-200 relative bg-white w-286px sm:w-484px lg:ml-76px  m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg  mb-16 lg:mb-0">
            <div className="bg-white w72px p-4 shadow bg-white absolute -top-9 -left-9 border border-grey-200">
              <Bounty />
            </div>
            <p className="lg:w-full text-left  lg:text-left p-20-medium mb-2">
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
                TBD
              </span>
            </p>
          </div>

          <div className="lg:ml-0 border border-grey-200 relative bg-white w-286px sm:w-484px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg mt-76px">
            <div className="bg-white w72px p-4 shadow bg-white absolute -top-9 -left-9 border border-grey-200">
              <CoinAsk />
            </div>
            <p className="lg:w-full text-left  lg:text-left p-20-medium mb-2">
              CoinAsk
            </p>
            <p className="text-dark-minor p-16-normal text-left">
              Paid Q&A forum for Chinese Blockchain Community.
            </p>
            <a
              className="block text-right"
              href="https://www.coinask.io/"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className="inline" />
            </a>
          </div>
        </div>
      </Row>
    </div>
  );
}
