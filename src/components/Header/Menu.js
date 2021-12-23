import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Item = styled.a`
  position: relative;
`;

const LinkItem = styled(Link)`
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
    <div
      role="button"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
      tabIndex={0}
    >
      <ul className={`${className}`}>
        <li className={`${liClassName} ${path === "/" && "text-dark-major"}`}>
          <LinkItem className="hover:text-dark-major" to="/">
            Home
          </LinkItem>
        </li>
        <li
          className={`${liClassName} ${
            path === "/products" && "text-dark-major"
          }`}
        >
          <LinkItem className="hover:text-dark-major" to="/products">
            Products
          </LinkItem>
        </li>
        <li
          className={`${liClassName} ${path === "/team" && "text-dark-major"}`}
        >
          <LinkItem className="hover:text-dark-major" to="/team">
            Team
          </LinkItem>
        </li>
        <li className={liClassName}>
          <Item
            className="hover:text-dark-major"
            href="https://github.com/opensquare-network/papers"
            target="_blank"
            rel="noreferrer"
          >
            Lightpaper
          </Item>
        </li>
        <li className={liClassName}>
          <Item
            className="hover:text-dark-major"
            href="https://app.subsocial.network/1327"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </Item>
        </li>
      </ul>
    </div>
  );
}
