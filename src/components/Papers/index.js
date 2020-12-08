import React from "react";
import styled from "styled-components";
import ArrowNext from "./arrow-next.png";
import background from "./bg-paper.png";

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  height: 184px;

  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 0;
  }
`;

const InnerSection = styled.section`
  z-index: 2;
  a {
    display: inline-flex;
    align-items: center;

    font-weight: bold;
    font-size: 1.75rem;
    line-height: 1.5;
    color: #fff;

    text-decoration: none;
    img {
      margin-left: 1.5rem;
    }
  }

  @media screen and (min-width: 1130px) {
    width: 1128px;
  }
`;

export default function () {
  return (
    <Wrapper>
      <img src={background} alt="" height={184} />
      <InnerSection>
        <a
          href="https://github.com/opensquare-network/papers"
          target="_blank"
          rel="noreferrer"
        >
          Check Our Papers
          <img src={ArrowNext} alt="" width={48} height={48} />
        </a>
      </InnerSection>
    </Wrapper>
  );
}
