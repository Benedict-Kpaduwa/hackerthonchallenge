import Image from "next/image";
import React, { useState, } from "react";


const HamburgerMenu= ({ setOpenMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenMenu ? setOpenMenu(!isOpen) : null;
  };

  return (
    <div
      className="relative cursor-pointer md:hidden block mr-0 mt-2"
      onClick={toggleMenu}
    >
      <Image
        width={20}
        height={20}
        src={"/images/navOpen.svg"}
        alt="navOpen"
        className=""
      />
    </div>
  );
};

export default HamburgerMenu;