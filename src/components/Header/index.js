/* eslint-disable */

import Logo from "./logo.svg";
import { InnerSection, StyledHeader } from "./styledComponents";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

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
          <li className="tools" onClick={() => setOpenMenu(true)}>
            Tools
            <FontAwesomeIcon icon={faChevronDown} size="1x" />
            {openMenu && <Menu close={() => setOpenMenu(false)} />}
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
