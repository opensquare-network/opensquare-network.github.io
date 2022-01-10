import Logo from "./logo.png";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import MenuIcon from "./menuIcon";
import CloseIcon from "./closeIcon";
import styled from "styled-components";

const MenuWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 80px;
  background: rgba(0, 0, 0, 0.4);
  height: calc(100vh - 80px);
`;

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const open = () => {
    setOpenMenu(true);
  };
  const close = () => {
    setOpenMenu(false);
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed w-full ${
          scrollPosition > 0 && "  bg-white z-20 shadow-200 slow"
        }`}
      >
        <div
          className={`h-20 flex items-center justify-between px-8 w-full max-w-1440px mx-auto
          ${openMenu ? "shadow-md" : ""}
           md:shadow-none
          `}
        >
          <a href="/">
            <img src={Logo} alt="" />
          </a>

          {/* menu for bigger devices */}
          <Menu
            className="hidden font-inter lg:flex font-medium text-dark-minor leading-6"
            liClassName="mr-10"
          />
          <a
            className="hidden lg:block text-white font-inter font-medium text-sm leading-6 py-2 px-4"
            style={{ background: "#6848FF" }}
            href="https://www.opensquare.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Off-chain Voting
          </a>
          {openMenu ? (
            <CloseIcon onClick={close} />
          ) : (
            <MenuIcon onClick={open} />
          )}
        </div>
      </div>
      {openMenu && (
        <MenuWrapper className="z-20" onClick={close}>
          <Menu className="bg-white lg:hidden font-inter pt-4 text-center text-base font-semibold leading-54px text-dark-minor" />
        </MenuWrapper>
      )}
    </>
  );
}
