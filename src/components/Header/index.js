import Logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import MenuIcon from "./menuIcon";
import CloseIcon from "./closeIcon";

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
    <div
      className={`fixed w-full ${
        scrollPosition > 0 && "  bg-white z-10 shadow-200 slow"
      }`}
    >
      <div
        className={`h-20 flex items-center justify-between pl-8 pr-22px w-full max-w-1440px mx-auto
          ${openMenu ? "shadow-md" : ""}
           md:shadow-none
          `}
      >
        <a href="/">
          <Logo />
        </a>

        {/*menu for bigger devices*/}
        <Menu
          className="hidden font-inter lg:flex font-semibold text-dark-minor leading-6"
          liClassName="mr-10"
        />
        <a className="hidden lg:block text-white bg-grey-100 font-inter font-medium text-sm leading-6 py-2 px-4">
          Off-chain Voting
        </a>
        {openMenu ? <CloseIcon onClick={close} /> : <MenuIcon onClick={open} />}
      </div>

      {/*menu for mobile*/}
      {openMenu && (
        <Menu className="bg-white lg:hidden font-inter pt-4 text-center text-base font-semibold leading-54px text-dark-minor" />
      )}
    </div>
  );
}
