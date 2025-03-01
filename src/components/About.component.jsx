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
import AboutContent from "./AboutContent.component";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === DARK;

  return (
    <main
      className={classnames(main__shell, darkMode ? null : main__shellLight)}
    >
      <section className={main__section}>
        <AboutContent />
      </section>
    </main>
  );
};

export default About;
