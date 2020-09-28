import styled from "styled-components";
import React from "react";
import ArrowNext from "./arrow-next.svg";

const InnerSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;

  & > span {
    color: #1d253c;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
  }

  svg {
    margin: 0 2rem;
  }
`;

export default function () {
  return (
    <InnerSection>
      <span>Bounty Created</span>
      <ArrowNext />
      <span>Bounty Collaboration</span>
      <ArrowNext />
      <span>Reputation Grow</span>
    </InnerSection>
  );
}
