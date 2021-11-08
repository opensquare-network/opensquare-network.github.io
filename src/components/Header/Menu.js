import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Item = styled.a`
  position: relative;
`;

export default function Menu({ className = "", liClassName = "" }) {
  const location =
    typeof window !== "undefined" ? window.location : { pathname: "/" };
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  return (
    <ul className={`${className}`}>
      <li className={`${liClassName} ${path === "/" && "text-dark-major"}`}>
        <Item className="hover:text-turquoise-500" href="/">
          Home
        </Item>
      </li>
      <li
        className={`${liClassName} ${
          path === "/products" && "text-dark-major"
        }`}
      >
        <Item className="hover:text-turquoise-500" href="/products">
          Products
        </Item>
      </li>
      <li className={`${liClassName} ${path === "/team" && "text-dark-major"}`}>
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
          Lightpaper
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
    </ul>
  );
}
