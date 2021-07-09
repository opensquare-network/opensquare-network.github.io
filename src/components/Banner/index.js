import React from "react";
import styled from "styled-components";
import { BaseInner } from "../baseComponents";
import GotoIcon from "./goto.svg";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 500px;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ColorText = styled.span`
  background: linear-gradient(270deg, #04d2c5 2.06%, #6848ff 100%);
  -webkit-background-clip: text;
  color: transparent;
`;

export default function () {
  return (
    <Wrapper>
      <StyledSection>
        <div className="w-9/12">
          <h1 className="text-4xl leading-tight text-center md:text-left">
            Empower <br className="md:hidden" />
            <ColorText>Credit Building</ColorText>
            <br />
            with Blockchain
          </h1>
          <h3 className="mb-10 text-xl text-gray-300 text-center md:text-left">
            Collaboration on bounties and your credit score will be calculated
            from your daily activities.
          </h3>
          <button className="flex px-6 py-3 bg-black text-white m-auto md:ml-0 md:mr-auto">
            Check Our Product&nbsp;&nbsp;&nbsp;
            <GotoIcon />
          </button>
        </div>
      </StyledSection>
    </Wrapper>
  );
}
