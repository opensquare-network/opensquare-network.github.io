import Logo from "./logo.svg";
import React, { useState } from "react";
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
  return (
    <div className="">
      <div
        className={`h-20 flex items-center justify-between pr-6 
          ${openMenu ? "shadow-md" : ""}
           md:shadow-none
          `}
      >
        <a className="ml-52px" href="/">
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
