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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a
              href="https://app.subsocial.network/1327"
              target="_blank"
              rel="noreferrer"
            >
              Blogs
            </a>
          </li>
        </ul>
      </InnerSection>
    </StyledHeader>
  );
}
