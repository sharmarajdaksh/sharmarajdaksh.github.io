import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import "../styles/utils/reset.scss";
import "../styles/utils/index.scss";
import "../../node_modules/aos/dist/aos.css";
import Aside from "../components/Aside.component";
import Navbar from "../components/Navbar.component";
import ThemeContext from "../context/Theme.context";
import {
  page__shell,
  page__shellLight,
} from "../styles/pages/index.module.scss";

import { LIGHT, DARK } from "../constants/Themes";
import { THEME } from "../constants/StorageKeys";
import classnames from "classnames";

const Layout = (props) => {
  const [theme, setTheme] = useState(null);
  let AOS;

  const toggleTheme = async () => {
    let updatedTheme = LIGHT;
    if (theme === LIGHT) {
      updatedTheme = DARK;
    }

    setTheme(updatedTheme);
    localStorage.setItem(THEME, updatedTheme);
  };

  useEffect(() => {
    const loadTheme = async () => {
      let readTheme = localStorage.getItem(THEME);

      if (theme && readTheme === theme) return;

      if (readTheme === LIGHT) {
        readTheme = LIGHT;
      } else {
        readTheme = DARK;
      }

      setTheme(readTheme);
    };

    const loadAos = async () => {
      const AOS = require("aos");
      AOS.init({});
      window.addEventListener("load", AOS.refresh);
    };

    loadAos();
    loadTheme();
  }, [theme]);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  const isDarkMode = theme === DARK;

  return (
    <>
      <Helmet>
        <meta name="icon" href="./images/favicon.png" />
        <body className={isDarkMode ? "blackBG" : "whiteBG"} />
      </Helmet>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div
          className={
            isDarkMode ? page__shell : classnames(page__shell, page__shellLight)
          }
        >
          {theme ? (
            <>
              <Navbar></Navbar>
              <Aside></Aside>
              {props.children}
            </>
          ) : (
            <div style={{ visibility: "hidden" }}>
              <Navbar></Navbar>
              <Aside></Aside>
              {props.children}
            </div>
          )}
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default Layout;
