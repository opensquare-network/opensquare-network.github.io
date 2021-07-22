import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  .bottom-bar {
    a {
      :after {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        bottom: -12px;
        content: "";
        width: 32px;
        height: 3px;
        background-color: #04d2c5;
      }
    }
  }
`;

const Item = styled.a`
  position: relative;

  &:hover {
    :after {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
      bottom: -12px;
      content: "";
      width: 32px;
      height: 3px;
      background-color: #04d2c5;
    }
  }
`;

export default function Menu({ className = "", liClassName = "" }) {
  const location =
    typeof window !== "undefined" ? window.location : { pathname: "/" };
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(location.pathname);
  }, []);
  return (
    <Ul className={className}>
      <li className={`${liClassName} ${path === "/" && "bottom-bar"}`}>
        <Item className="hover:text-turquoise-500" href="/">
          Home
        </Item>
      </li>
      <li className={`${liClassName} ${path === "/products/" && "bottom-bar"}`}>
        <Item className="hover:text-turquoise-500" href="/products">
          Products
        </Item>
      </li>
      <li className={`${liClassName} ${path === "/team/" && "bottom-bar"}`}>
        <Item className="hover:text-turquoise-500" href="/team">
          Team
        </Item>
      </li>
      <li className={liClassName}>
        <Item
          className="hover:text-turquoise-500"
          href="https://github.com/opensquare-network/papers"
          target="_blank"
          rel="noreferrer"
        >
          lightpaper
        </Item>
      </li>
      <li className={liClassName}>
        <Item
          className="hover:text-turquoise-500"
          href="https://app.subsocial.network/1327"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </Item>
      </li>
    </Ul>
  );
}
