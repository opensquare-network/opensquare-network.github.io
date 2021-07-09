import React from "react";
import styled from "styled-components";
import IconGoto from "./icon-goto.svg";

const Wrapper = styled.a`
  background: linear-gradient(270deg, #04d2c5 2.06%, #6848ff 100%);
`;

export default function PapersEnter() {
  return (
    <Wrapper
      className="block md:flex md:justify-center md:items-center p-4  "
      href="/papers"
    >
      <h3 className="text-white font-semibold text-xl w-350px md:w-510px md:m-0 text-center m-auto">
        Get Started with OpenSquare and Check Our Litepaper
      </h3>
      <IconGoto className="block m-auto md:mr-0 md:ml-4" />
    </Wrapper>
  );
}
