/* eslint-disable */

import Logo from "./logo.svg";
import { InnerSection, StyledHeader } from "./styledComponents";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div>
      <div
        className={`flex  items-center justify-between pr-6 ${
          openMenu ? "shadow-md" : ""
        } `}
      >
        <a href="/">
          <Logo height={60} width={230} />
        </a>
        {openMenu ? (
          <svg
            onClick={() => {
              setOpenMenu(false);
            }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.63608 4.22183L4.22187 5.63604L10.5858 12L4.22187 18.364L5.63608 19.7782L12 13.4142L18.364 19.7782L19.7782 18.364L13.4143 12L19.7782 5.63604L18.364 4.22183L12 10.5858L5.63608 4.22183Z"
                fill="#2E343D"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            onClick={() => {
              setOpenMenu(true);
            }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 5H20V7H4V5ZM4 11H20V13H4V11ZM4 17H20V19H4V17Z"
              fill="#2E343D"
            />
          </svg>
        )}
      </div>
      {openMenu && (
        <ul className="pt-4 text-center text-base font-semibold leading-54px">
          <li>
            <a href="/team">Lightpaper</a>
          </li>
          <li>
            <a href="/team">Product</a>
          </li>
          <li>
            <a href="/team">About us</a>
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
      )}
    </div>
  );
}
