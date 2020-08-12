import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { BaseInner } from "./baseComponents";
import Typed from "typed.js";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 73px);

  h2 {
    font-weight: normal;
    text-align: center;
  }
`;

const StyledSection = styled.section`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const InnerSection = styled(BaseInner)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-size: 3rem;
    font-weight: 300;
    margin: 0;
    width: 80%;
    text-align: center;
  }
  h3 {
    margin-top: 10px;
    font-weight: 700;
    width: 80%;
    text-align: center;
  }
`;

export default function () {
  const buildingRef = useRef(null);
  const options = {
    strings: [
      "",
      'We are building <b><i style="color: #4688F1;">crowdsourcing</i></b>',
      'We are building <b><i style="color: #E8453C;">collaboration</i></b>',
      'We are building <b><i style="color: #3AA757;">reputation</i></b>',
      'We are building <b style="font-size: 36px">web3!</b>',
    ],
    typeSpeed: 40,
    showCursor: false,
  };

  useEffect(() => {
    let typed;
    if (buildingRef.current) {
      typed = new Typed(buildingRef.current, options);
    }

    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, [buildingRef, options]);

  return (
    <Wrapper>
      <h2 ref={buildingRef}>We are building</h2>
      <StyledSection>
        <InnerSection>
          <h1>Empower Reputation Building with Blockchain </h1>
          <h3>
            Collaboration on bounties and your reputation score will be
            calculated from your daily activities
          </h3>
        </InnerSection>
      </StyledSection>
    </Wrapper>
  );
}
