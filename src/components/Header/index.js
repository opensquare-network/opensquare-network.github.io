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
      className={`${
        scrollPosition > 10 && "fixed w-full bg-white z-10 shadow-200"
      }`}
    >
      <div
        className={`h-20 flex items-center justify-between pr-6 w-full max-w-1400px mx-auto
          ${openMenu ? "shadow-md" : ""}
           md:shadow-none
          `}
      >
        <a className="ml-4 lg:ml-52px" href="/">
          <Logo />
        </a>

        {/*menu for bigger devices*/}
        <Menu
          className="hidden font-inter md:flex font-semibold text-dark-major "
          liClassName="mr-10"
        />
        {openMenu ? <CloseIcon onClick={close} /> : <MenuIcon onClick={open} />}
      </div>

      {/*menu for mobile*/}
      {openMenu && (
        <Menu className="md:hidden font-inter pt-4 text-center text-base font-semibold leading-54px" />
      )}
    </div>
  );
}
