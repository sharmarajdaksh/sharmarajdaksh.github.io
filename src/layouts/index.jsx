import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import "../styles/utils/reset.scss";
import "../styles/utils/index.scss";
import Aside from "../components/Aside.component";
import Navbar from "../components/Navbar.component";
import ThemeContext from "../context/Theme.context";
import * as indexPageStyles from "../styles/pages/index.module.scss";

import { LIGHT, DARK } from "../constants/Themes";
import { THEME } from "../constants/StorageKeys";
import Seo from "../components/SEO";

const Layout = (props) => {
  const [theme, setTheme] = useState(null);

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

    loadTheme();
  }, [theme]);

  if (!theme) {
    return <Seo title="Dakshraj Sharma" />;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Helmet>
        <meta name="icon" href="./images/favicon.png" />
      </Helmet>
      <div className={indexPageStyles.page__shell}>
        <Navbar></Navbar>
        <Aside></Aside>
        {props.children}
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
