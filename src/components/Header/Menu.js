import React from "react";
// import styled from "styled-components";
// import useOutsideClick from "../../hooks/useClickOutside";

// const { useRef } = require("react");

export default function Menu({ className = "", liClassName = "" }) {
  // const ref = useRef(null);
  //
  // useOutsideClick(ref, () => {
  //   close();
  // });

  return (
    <ul className={className}>
      <li className={liClassName}>
        <a href="/">Home</a>
      </li>
      <li className={liClassName}>
        <a href="/products">Products</a>
      </li>
      <li className={liClassName}>
        <a href="/team">Team</a>
      </li>
      <li className={liClassName}>
        <a href="https://github.com/opensquare-network/papers" target="_blank">
          Lightpaper
        </a>
      </li>
      <li className={liClassName}>
        <a
          href="https://app.subsocial.network/1327"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
      </li>
    </ul>
  );
}
