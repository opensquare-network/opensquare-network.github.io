import React from "react";
import styled from "styled-components";

import Bg from "./bg.png";
import Check from "./check.png";
import Fram from "./frame.png";

const StyledSection = styled.section`
  background-image: url(${Bg});
  height: 684px;
`;

const ImgFrame = styled.img`
  position: absolute;
  left: 440px;
  top: calc(50% + 20px);
  transform: translateY(-50%);
`;

export default function () {
  return (
    <StyledSection>
      <div className="lg:w-1080px mx-auto font-inter  ">
        <div className="py-144px relative">
          <div className="w-440px">
            <div className="h2-40-bold">In est mi commodo semper.</div>
            <div className="mt-4 p-18-normal text-dark-minor">
              Dolor ullamcorper massa elit mattis ac scelerisque. A consectetur
              pharetra maecenas amet.
            </div>
            <div className="mt-60px">
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
          <ImgFrame src={Fram} />
        </div>
      </div>
    </StyledSection>
  );
}
