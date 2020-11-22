import React from "react";
import styled from "styled-components";
import useOutsideClick from "../../hooks/useClickOutside";

const { useRef } = require("react");

const Wrapper = styled.section`
  position: absolute;
  top: 36px;
  left: -40px;
  box-shadow: 0px 4px 24px rgba(29, 37, 60, 0.08);
  background: #ffffff;
  padding: 16px;
  ol {
    padding: 0;
    li {
      a {
        line-height: 24px;
        font-size: 14px;
        color: rgba(29, 37, 60, 0.64);
        &:hover {
          color: #1d253c;
        }
      }
    }
  }
`;

export default function Menu({ close }) {
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    close();
  });

  return (
    <Wrapper ref={ref}>
      <ol>
        <li>
          <a
            href="https://og.opensquare.network/"
            target="_blank"
            rel="noreferrer"
          >
            OpenGenerator
          </a>
        </li>
        <li>
          <a
            href="http://dotbounties.com/"
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            dotBounties
          </a>
        </li>
      </ol>
    </Wrapper>
  );
}
