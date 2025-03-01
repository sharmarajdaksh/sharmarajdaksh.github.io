import React from "react";

import ThemeContext from "../context/Theme.context";
import classnames from "classnames";
import {
  main__shell,
  main__shellLight,
  main__section,
} from "../styles/components/Main.module.scss";
import { landing } from "../styles/components/Landing.module.scss";
import {
  booksLanding,
} from "../styles/components/Books.module.scss";
import { useContext } from "react";
import { DARK } from "../constants/Themes";
import GoodReadsCurrentlyReading from "./GoodReadsCurrentlyReading.component";

const Books = () => {
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === DARK;

  return (
    <main
      className={classnames(main__shell, darkMode ? null : main__shellLight)}
    >
      <section className={main__section}>
        <div className={classnames(landing, booksLanding)}>
          <GoodReadsCurrentlyReading />
        </div>
      </section>
    </main>
  );
};

export default Books;
