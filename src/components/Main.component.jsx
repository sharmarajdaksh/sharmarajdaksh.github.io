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
import Seo from "./SEO.component";
import Landing from "./Landing.component";
import SeoContext from "../context/Seo.context";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === DARK;
  const { setSeo } = React.useContext(SeoContext);

  React.useContext(() => {
    setSeo(<Seo title={"Home"} />);
  }, [setSeo]);

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
