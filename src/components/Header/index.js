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
    <div>
      <div
        className={`flex items-center justify-between pr-6 
          ${openMenu ? "shadow-md" : ""}
           md:shadow-none
          `}
      >
        <a href="/">
          <Logo height={60} width={230} />
        </a>

        {/*menu for bigger devices*/}
        <Menu
          className="hidden inter md:flex font-semibold text-dark-major "
          liClassName="mr-10"
        />
        {openMenu ? <CloseIcon onClick={close} /> : <MenuIcon onClick={open} />}
      </div>

      {/*menu for mobile*/}
      {openMenu && (
        <Menu className="md:hidden inter pt-4 text-center text-base font-semibold leading-54px" />
      )}
    </div>
  );
}
