import React from "react";
import styled from "styled-components";

import Bg from "./bg.png";
import Check from "./check.png";
import Frame from "./frame.png";

const StyledSection = styled.section`
  background-image: url(${Bg});
  background-size: cover;
`;

const ImgFrame = styled.img`
  position: absolute;
  left: 480px;
  top: 50%;
  transform: translateY(-50%);
  height: 500px;
  width: 740px;
`;

const ImgFrameSmall = styled.img`
  margin-left: -32px;
  margin-right: -32px;
  max-width: 512px;
`;

export default function () {
  return (
    <StyledSection className="lg:h-740px">
      <div className="lg:w-1080px mx-auto font-inter max-w-lg lg:max-w-none ">
        <div className="lg:py-172px pt-60px pb-10 px-8 lg:px-0 relative">
          <div className="lg:w-440px">
            <div className="lg:h2-40-bold h4-24-bold">
              Collaboration network
            </div>
            <div className="mt-4 p-18-normal text-dark-minor">
              OpenSquare builds infrastructure and provides services to
              collaborators.
            </div>
            <div className="lg:mt-60px mt-10">
              <div className="flex items-start ">
                <img src={Check} className="mr-4 w-8 p-1" alt="" />
                <div className="p-18-normal">
                  Collaborators include projects, enterprises, developers,
                  designers, etc.
                </div>
              </div>
              <div className="flex items-start mt-6">
                <img src={Check} className="mr-4 w-8 p-1" alt="" />
                <div className="p-18-normal">
                  Collaborators’ profile will be stored in IPFS and recorded
                  on-chain.
                </div>
              </div>
              <div className="flex items-start mt-6">
                <img src={Check} className="mr-4 w-8 p-1" alt="" />
                <div className="p-18-normal">
                  History on-chain collaborations will verify their profile
                  items.
                </div>
              </div>
            </div>
          </div>
          <ImgFrame src={Frame} className="hidden lg:block" />
          <ImgFrameSmall src={Frame} className="w-screen mt-10 lg:hidden" />
        </div>
      </div>
    </StyledSection>
  );
}
