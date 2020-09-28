import Logo from "./logo.svg";
import { InnerSection, StyledHeader } from "./styledComponents";
import React from "react";

export default function Header() {
  return (
    <StyledHeader>
      <InnerSection>
        <a href="/">
          <Logo height={60} width={230} />
        </a>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/team">TEAM</a>
          </li>
        </ul>
      </InnerSection>
    </StyledHeader>
  );
}
