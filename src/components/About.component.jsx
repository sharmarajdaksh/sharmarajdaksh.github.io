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
import AboutContent from "./AboutContent.component";
import SeoContext from "../context/Seo.context";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === DARK;
  const { setSeo } = React.useContext(SeoContext);

  React.useEffect(() => {
    setSeo(<Seo title={"About"} slug={"/about"} />);
  }, [setSeo]);

  return (
    <main
      className={classnames(main__shell, darkMode ? null : main__shellLight)}
    >
      <Seo title={"About"} slug={"/about"} />;
      <section className={main__section}>
        <AboutContent />
      </section>
    </main>
  );
};

export default About;
