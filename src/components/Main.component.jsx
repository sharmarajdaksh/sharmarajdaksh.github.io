import React from "react";

import ThemeContext from "../context/Theme.context";
import classnames from "classnames";
import {
  main__shell,
  main__shellLight,
  main__section,
} from "../styles/components/Main.module.scss";
import { useContext } from "react";
import { DARK } from "../constants/Themes";
import Landing from "./Landing.component";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === DARK;

  return (
    <main
      className={classnames(main__shell, darkMode ? null : main__shellLight)}
    >
      <section className={main__section}>
        <Landing />
      </section>
    </main>
  );
};

export default Main;
