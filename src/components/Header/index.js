import Logo from "./logo.svg";
import { InnerSection, StyledHeader } from "./styledComponents";
import React from "react";

export default function Header() {
  return (
    <StyledHeader>
      <InnerSection>
        <a href="/">
          <Logo height={39} width={194} />
        </a>
        <span className="place-holder"></span>
      </InnerSection>
    </StyledHeader>
  );
}
