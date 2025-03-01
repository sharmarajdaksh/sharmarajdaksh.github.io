import React, { useContext } from "react";
import classnames from "classnames";

import ThemeContext from "../context/Theme.context";

import {
  glowonhover,
  glowonhoverLight,
} from "../styles/components/Aside.module.scss";
import {
  navbar__shell,
  navbar__shellLight,
} from "../styles/components/Navbar.module.scss";
import { DARK } from "../constants/Themes";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === DARK;

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Reading",
      href: "/reading",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  return (
    <nav
      className={classnames(navbar__shell, !darkMode ? navbar__shellLight : "")}
    >
      <ul>
        {links.map((link) => {
          return (
            <li
              key={link.label}
              className={classnames(darkMode ? glowonhover : glowonhoverLight)}
            >
              <a href={link.href}>{link.label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
