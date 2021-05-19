import React from "react";

import Landing from "./Landing.component";
import ThemeContext from "../context/Theme.context";
import classnames from "classnames";
import {
  main__shell,
  main__shellLight,
  main__section,
} from "../styles/components/Main.module.scss";
import { useContext } from "react";
import { DARK } from "../constants/Themes";
import Seo from "./SEO";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === DARK;

  return (
    <main
      className={classnames(main__shell, darkMode ? null : main__shellLight)}
    >
      <Seo title={"Home"} />
      <section className={main__section}>
        <Landing />
      </section>
    </main>
  );
};

export default Main;
