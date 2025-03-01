import { FaAt, FaMoon, FaSun } from "react-icons/fa";

import React from "react";
import ThemeContext from "../context/Theme.context";
import {
  awiggleup,
  aside__shell,
  aside__shellLight,
  aside__element,
  glowonhover,
  glowonhoverLight,
  aside__email,
  aside__verticalline,
} from "../styles/components/Aside.module.scss";
import classnames from "classnames";
import { useContext } from "react";
import { DARK } from "../constants/Themes";
import { EMAIL, SOCIAL_ICONS_DATA } from "../constants/Navbar";

const Aside = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const darkMode = theme === DARK;

  const renderSocialIcons = () => {
    return SOCIAL_ICONS_DATA.map((socialIconData) => (
      <div
        className={classnames(
          awiggleup,
          aside__element,
          darkMode ? glowonhover : glowonhoverLight
        )}
        key={socialIconData.url}
      >
        <a
          href={socialIconData.url}
          aria-label={socialIconData.label}
          target="__blank"
        >
          <socialIconData.icon />
        </a>
      </div>
    ));
  };

  return (
    <aside
      className={classnames(aside__shell, !darkMode ? aside__shellLight : "")}
      // data-aos="fade-up"
      // data-aos-duration="750"
      // data-aos-once="true"
      // data-aos-offset="-100"
    >
      <div
        className={classnames(
          awiggleup,
          aside__element,
          aside__email,
          darkMode ? glowonhover : glowonhoverLight
        )}
        key={"emailicon"}
      >
        <a href={`mailto:${EMAIL}`} aria-label="Email">
          <FaAt />
        </a>
      </div>
      {renderSocialIcons()}
      <div
        className={classnames(
          awiggleup,
          aside__element,
          darkMode ? glowonhover : glowonhoverLight
        )}
      >
        <button onClick={toggleTheme} aria-label="Toggle Theme">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <div className={aside__verticalline}></div>
    </aside>
  );
};

export default Aside;
