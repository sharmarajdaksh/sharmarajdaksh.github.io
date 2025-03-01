import React from "react";
import classnames from "classnames";

import ThemeContext from "../context/Theme.context";

import {
  main__shell,
  main__shellLight,
  main__section,
} from "../styles/components/Main.module.scss";
import { main404 } from "../styles/pages/404.module.scss";
import { DARK } from "../constants/Themes";
import { MESSAGE } from "../constants/404";
import Seo from "../components/SEO.component";

const Page404 = () => {
  const { theme } = React.useContext(ThemeContext);

  const darkMode = theme === DARK;

  const seo = <Seo title={"OOPS!"} />;

  const core = (
    <>
      <main
        className={classnames(main__shell, darkMode ? "" : main__shellLight)}
      >
        <section className={main__section}>
          <div className={main404}>{MESSAGE}</div>
        </section>
      </main>
    </>
  );

  return (
    <>
      {seo}
      {core}
    </>
  );
};

export default Page404;
