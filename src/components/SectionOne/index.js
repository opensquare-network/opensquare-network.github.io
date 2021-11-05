import React from "react";
import styled from "styled-components";

import Img from "./img.png";
import Logo from "./logo.svg";

const Left = styled.div`
  background: linear-gradient(225deg, #04d2c5 0%, #6848ff 100%), #ffffff;
  flex-basis: 50%;
  height: 472px;
`;

const Right = styled.div`
  background: #191e27;
  flex-basis: 50%;
  height: 472px;
`;

export default function () {
  return (
    <section className="w-full my-10 flex flex-col xl:flex-row h-472px">
      <Left className="flex-grow relative hidden xl:block">
        <img
          src={Img}
          className="absolute h-472px w-960px max-w-none right-0"
        />
      </Left>
      <Right className="flex-grow relative">
        <Logo className="absolute right-0 top-4 z-0" />
        <div className="absolute pt-20 pl-100px">
          <div className="w-440px h2-44-bold text-white">
            A trusted collaboration network
          </div>
          <div className="w-440px h2-44-bold p-16-normal text-light-minor mt-60px">
            Our vision is to build a decentralized, trusted collaboration
            network. Collaboration data will be stored on blockchain, and
            personal credit will be built on it. This will empower the credible
            profiles and reduce the cost for collaborations.
          </div>
        </div>
      </Right>
    </section>
  );
}
