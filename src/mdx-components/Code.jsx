import classnames from "classnames";
import React from "react";
import { DARK } from "../constants/Themes";
import ThemeContext from "../context/Theme.context";
import { code, code__light } from "../styles/components/Blogpost.module.scss";

const Code = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);
  const darkMode = theme === DARK;

  return (
    <span className={classnames(code, darkMode ? null : code__light)}>
      {children}
    </span>
  );
};

export default Code;
