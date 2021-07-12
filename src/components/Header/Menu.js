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
        <a href="/team">Lightpaper</a>
      </li>
      <li className={liClassName}>
        <a href="/product">Product</a>
      </li>
      <li className={liClassName}>
        <a href="/team">About us</a>
      </li>
      <li className={liClassName}>
        <a
          href="https://app.subsocial.network/1327"
          target="_blank"
          rel="noreferrer"
        >
          Blogs
        </a>
      </li>
    </ul>
  );
}
