import React from "react";
import styled from "styled-components";
// import { BaseInner } from "../baseComponents";
import GotoIcon from "./goto.svg";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
      <StyledSection className="h-476px sm:h-576px">
        <div className="lg:w-1080px">
          <div className="block sm:flex">
            <h1 className="h3-36-bold md:h1-60-bold text-center text-dark-major">
              {/*pb-5 sm:pb-6 text-4xl leading-tight text-center sm:text-left text-mark-major font-bold*/}
              Empower &nbsp;
            </h1>
            <h1 className="h3-36-bold md:h1-60-bold text-center  mt-3 sm:mt-0  whitespace-nowrap">
              <ColorText>Credit Building</ColorText>
            </h1>
          </div>
          <h1 className="h3-36-bold md:h1-60-bold text-center sm:text-left mt-3 sm:mt-4 text-dark-major">
            with Blockchain
          </h1>
          <p className="p-20-normal w-346px sm:w-full mx-auto sm:text-left mt-4 sm:mt-6 mb-12 sm:mb-16 text-dark-minor text-center sm:text-left">
            Collaboration on OpenSquare and your credit{" "}
            <br className="hidden sm:inline" /> will be calculated from your
            on-chain activities.
          </p>
          <a
            href="/products"
            className="p-16-medium flex px-6 py-3 bg-grey-900 text-white w-242px m-auto sm:ml-0 sm:mr-auto whitespace-nowrap"
            style={{ backgroundColor: "#191E27" }}
          >
            Check Our Products&nbsp;&nbsp;&nbsp;
            <GotoIcon />
          </a>
        </div>
      </StyledSection>
    </Wrapper>
  );
}
