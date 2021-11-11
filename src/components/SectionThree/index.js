import React from "react";
import styled from "styled-components";

import Bg from "./bg.png";
import Check from "./check.png";
import Frame from "./frame.png";

const StyledSection = styled.section`
  background-image: url(${Bg});
  background-size: auto 100%;
`;

const ImgFrame = styled.img`
  position: absolute;
  left: 440px;
  top: calc(50% + 20px);
  transform: translateY(-50%);
`;

const ImgFrameSmall = styled.img`
  margin-left: -32px;
  margin-right: -32px;
  max-width: 512px;
`;

export default function () {
  return (
    <StyledSection className="lg:h-684px">
      <div className="lg:w-1080px mx-auto font-inter max-w-lg lg:max-w-none ">
        <div className="lg:py-144px pt-60px pb-10 px-8 lg:px-0 relative">
          <div className="lg:w-440px">
            <div className="lg:h2-40-bold h4-24-bold">
              In est mi commodo semper.
            </div>
            <div className="mt-4 p-18-normal text-dark-minor">
              Dolor ullamcorper massa elit mattis ac scelerisque. A consectetur
              pharetra maecenas amet.
            </div>
            <div className="lg:mt-60px mt-10">
              <div className="flex items-start ">
                <img src={Check} className="mr-4" />
                <div className="p-18-normal">
                  Collaborators include projects, enterprises, developers,
                  designers, etc.
                </div>
              </div>
              <div className="flex items-start mt-6">
                <img src={Check} className="mr-4" />
                <div className="p-18-normal">
                  Collaborators’ profile will be uploaded and stored in public
                  and permanently.
                </div>
              </div>
              <div className="flex items-start mt-6">
                <img src={Check} className="mr-4" />
                <div className="p-18-normal">
                  History onchain collaborations will verify their profile
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
