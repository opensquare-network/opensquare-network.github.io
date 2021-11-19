import React from "react";
import styled from "styled-components";

import Img from "./img.jpg";
import Logo from "./logo.svg";

const Left = styled.div`
  flex-basis: 50%;
  overflow: hidden;
  > img {
    object-fit: cover;
    min-height: 100%;
  }
`;

const Right = styled.div`
  background: #191e27;
  flex-basis: 50%;
`;

export default function () {
  return (
    <section className="w-full lg:my-10 my-5 flex flex-row lg:h-472px">
      <Left className="flex-grow lg:block hidden lg:h-472px">
        <img
          src={Img}
          alt=""
          // className="absolute h-472px w-960px max-w-none right-0"
        />
      </Left>
      <Right className="flex-grow relative lg:h-472px">
        <Logo className="absolute right-0 top-4 z-0 hidden lg:block" />
        <div className="lg:absolute lg:py-86px py-10 px-8 lg:px-100px w-full h-full lg:max-w-none max-w-lg mx-auto">
          <div className="lg:max-w-440px lg:h2-40-bold text-white h4-24-bold">
            A trusted collaboration network
          </div>
          <div className="lg:max-w-440px p-16-normal text-light-minor lg:mt-60px mt-10">
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
