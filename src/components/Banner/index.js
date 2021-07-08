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
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export default function () {
  return (
    <Wrapper>
      <StyledSection>
        <div className="w-9/12">
          <h1 className="text-6xl leading-tight">
            Empower <ColorText>Reputation Building</ColorText> <br /> with
            Blockchain{" "}
          </h1>
          <h3 className="mb-10 text-xl text-gray-300">
            Collaboration on bounties and your reputation score
            <br />
            will be calculated from your daily activities.
          </h3>
          <button className="flex px-6 py-3 bg-black text-white mr-auto">
            Check Our Product&nbsp;&nbsp;&nbsp;
            <GotoIcon />
          </button>
        </div>
      </StyledSection>
    </Wrapper>
  );
}
