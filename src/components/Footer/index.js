import { StyledFooter, InnerSection } from "./styledComponents";
import React from "react";
import Github from "./github.svg";
import Email from "./email.svg";
import Telegram from "./tg.svg";
import Twitter from "./twitter.svg";

export default function () {
  return (
    <StyledFooter>
      <InnerSection>
        <div className="rights">© 2020 OpenSquare. All Rights Reserved.</div>
        <div className="contacts">
          <ul>
            <li>
              <a
                href="mailto:yongfeng@opensquare.network"
                target="_blank"
                rel="noreferrer"
              >
                <Email width="20" height="20" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/opensquare-network"
                target="_blank"
                rel="noreferrer"
              >
                <Github width="20" height="20" />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/opensquare"
                target="_blank"
                rel="noreferrer"
              >
                <Telegram width="20" height="20" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/OpensquareN"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter width="20" height="20" />
              </a>
            </li>
          </ul>
        </div>
      </InnerSection>
    </StyledFooter>
  );
}
