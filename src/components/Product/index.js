import React from "react";
import styled from "styled-components";
import Icon from "./icon.svg";
import ExternalLink from "./externalLink.svg";
import KusamaTreasury from "./kusamaTreasury.svg";

const Row = styled.div``;

export default function Product() {
  return (
    <div>
      <div className="sm:w-1080px m-auto">
        <h1 className="text-4xl font-bold text-center sm:text-left  pt-8 sm:pt-20">
          We build for <br className="sm:hidden" /> collaboration
        </h1>
      </div>

      <p
        className="
          sm:px-0
          sm:w-full
          text-lg text-gray-400 text-center sm:text-left px-20 sm:w-full m-auto pt-4 pb-80px border-b"
      >
        <span className="block sm:w-1080px mx-auto">
          Et, suspendisse ornare integer felis senectus ac viverra. Sed
          <br className="hidden sm:block" /> ullamcorper venenatis.
        </span>
      </p>

      <Row className="sm:flex sm:w-1080px sm:mx-auto sm:mt-20">
        <h2 className="w-280px text-2xl font-bold text-left pt-8 sm:pt-0 pb-20">
          Platform
        </h2>
        <div className=" sm:flex sm:flex-wrap">
          <div className="relative w-346px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg">
            <Icon className="absolute -top-12 -left-16 " />
            <p className="sm:w-full text-left sm:text-center sm:text-left text-lg font-semibold mb-2">
              CoinAsk
            </p>
            <p className="text-dark-minor font-normal text-left sm:text-center">
              Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
              euismod pulvinar nisl.
            </p>
            <a className="block text-right">
              <ExternalLink className="inline" />
            </a>
          </div>
        </div>
      </Row>

      <Row className="sm:flex sm:w-1080px sm:mx-auto sm:mt-20">
        <h2 className="w-280px text-2xl font-bold text-left pt-8 sm:pt-0 pb-20">
          Explorer
        </h2>
        <div className=" sm:flex sm:flex-wrap">
          <div className="relative w-346px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg">
            <Icon className="absolute -top-12 -left-16 " />
            <p className="sm:w-full text-left sm:text-center sm:text-left text-lg font-semibold mb-2">
              doTreasury
            </p>
            <p className="text-dark-minor font-normal text-left sm:text-center">
              Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
              euismod pulvinar nisl.
            </p>
            <a className="block text-right">
              <ExternalLink className="inline" />
            </a>
            <p className="border-t mt-3 pt-2">
              <a href="/">
                <KusamaTreasury />
              </a>
            </p>
          </div>

          <div className="relative w-346px sm:ml-76px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg">
            <Icon className="absolute -top-12 -left-16 " />
            <p className="sm:w-full text-left sm:text-center sm:text-left text-lg font-semibold mb-2">
              doTreasury
            </p>
            <p className="text-dark-minor font-normal text-left sm:text-center">
              Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
              euismod pulvinar nisl.
            </p>
            <a className="block text-right">
              <ExternalLink className="inline" />
            </a>
            <p className="border-t mt-3 pt-2">
              <a href="/">
                <KusamaTreasury />
              </a>
            </p>
          </div>
        </div>
      </Row>

      <Row className="sm:flex sm:w-1080px sm:mx-auto sm:mt-20">
        <h2 className="w-280px text-2xl font-bold text-left pt-8 sm:pt-0 pb-20">
          Collaboration
        </h2>
        <div className=" sm:flex sm:flex-wrap">
          <div className="relative w-346px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg">
            <Icon className="absolute -top-12 -left-16 " />
            <p className="sm:w-full text-left sm:text-center sm:text-left text-lg font-semibold mb-2">
              OpenSquare Bounties
            </p>
            <p className="text-dark-minor font-normal text-left sm:text-center">
              Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
              euismod pulvinar nisl.
            </p>
            <p className="mt-3 text-right">
              <span className="inline-block px-3 h-6 bg-blue-100 text-white font-bold">
                Coming Soon
              </span>
            </p>
          </div>

          <div className="relative w-346px sm:ml-76px m-auto pt-6 pr-7 pl-15 pb-6 shadow-lg">
            <Icon className="absolute -top-12 -left-16 " />
            <p className="sm:w-full text-left sm:text-center sm:text-left text-lg font-semibold mb-2">
              doTreasury
            </p>
            <p className="text-dark-minor font-normal text-left sm:text-center">
              Tortor etiam duis diam est, massa nullam. Mauris enim lorem arcu
              euismod pulvinar nisl.
            </p>
            <p className="mt-3 text-right">
              <span className="inline-block px-3 h-6 bg-blue-100 text-white font-bold">
                Coming Soon
              </span>
            </p>
          </div>
        </div>
      </Row>

      <div className="sm:w-1080px mx-auto mt-40">
        <div className="sm:float-right sm:ml-544px sm:mt-20 px-8">
          <h2
            className="

          sm:w-280px sm:w-full text-2xl sm:text-4xl font-bold text-center sm:text-left pt-8 mb-4 -mt-8 pb-1 sm:pt-0
          "
          >
            Building with OpenSquare
          </h2>
          <p className="mb-8 text-dark-minor font-normal text-center sm:text-left">
            In mauris mauris amet vitae curabitur. <br className="sm:hidden" />{" "}
            Convallis eu, et tincidunt laoreet morbi lectus volutpat. Sit lectus
            nisl arcu porttitor pulvinar id.
          </p>
        </div>

        <div className="sm:w-480px h-60 bg-blue-100 mx-4 mb-20"></div>
      </div>
    </div>
  );
}
