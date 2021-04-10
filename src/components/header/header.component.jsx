import React from "react";
import { useEffect, useRef } from "react";

import "./header.styles.scss";

// ICONS
import CameraIcon from "@material-ui/icons/Camera";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  const header = useRef();
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const headerRef = header.current.classList;
      if (window.pageYOffset === 0) {
        headerRef.remove("scrolled");
      } else {
        headerRef.add("scrolled");
      }
    });
  });

  return (
    <header ref={header}>
      <div className="logo">
        <CameraIcon />
      </div>
      <div className="menu">
        <MenuIcon />
      </div>
    </header>
  );
};

export default Header;
