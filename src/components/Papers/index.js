import React from "react";
import styled from "styled-components";
import Go from "./go.svg";

const Wrapper = styled.div`
  margin-top: 100px;
  text-align: center;
  p {
    font-size: 1rem;
  }
`;

export default function () {
  return (
    <Wrapper>
      <p>
        Currently we have only draft paper written in simplified <b>Chinese</b>.
        Interested? Let's go.
      </p>
      <a
        href="https://github.com/opensquare-network/papers/blob/master/draft-cn.md"
        target="_blank"
        rel="noreferrer"
      >
        <Go width="50" height="50" />
      </a>
    </Wrapper>
  );
}
