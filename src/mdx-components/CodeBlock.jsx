import React from "react";
import { Highlight } from "prism-react-renderer";
import { codeblock } from "../styles/components/Blogpost.module.scss";
import darkTheme from "./codeblock-themes/dracula";
import lightTheme from "./codeblock-themes/github";
import ThemeContext from "../context/Theme.context";
import { DARK } from "../constants/Themes";
import classnames from "classnames";

const CodeBlock = (props) => {
  const className = props.children.props.className || "";
  const matches = className.match(/language-(?<lang>.*)/);
  const { theme } = React.useContext(ThemeContext);
  const darkMode = theme === DARK;

  return (
    <Highlight
      code={props.children.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
      theme={darkMode ? darkTheme : lightTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={classnames(className, codeblock)} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
