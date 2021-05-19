import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";
import {
  FaLinkedin,
  FaFacebookF,
  FaRedditAlien,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";
import {
  shareIconOuter,
  shareIconOuterLight,
  shareIconSection,
  shareIconInner,
  shareIconInnerLight,
} from "../styles/components/Blog.module.scss";
import ThemeContext from "../context/Theme.context";
import classnames from "classnames";
import { DARK } from "../constants/Themes";

const ShareBlogComponent = ({ title, subtitle, url }) => {
  return null;

  const { theme } = React.useContext(ThemeContext);
  const darkMode = theme === DARK;

  const renderIcon = (OuterElement, InnerElement, props) => (
    <div
      className={classnames(
        shareIconOuter,
        darkMode ? null : shareIconOuterLight
      )}
    >
      <OuterElement {...props}>
        <InnerElement
          className={classnames(
            shareIconInner,
            darkMode ? null : shareIconInnerLight
          )}
        />
      </OuterElement>
    </div>
  );

  return (
    <div className={shareIconSection}>
      {/* <div
        className={classnames(
          shareIconOuter,
          darkMode ? null : shareIconOuterLight
        )}
      >
        <EmailShareButton
          subject={title}
          body={subtitle}
          url={url}
          separator={"\n"}
        >
          <FaEnvelope
            className={classnames(
              shareIconInner,
              darkMode ? null : shareIconInnerLight
            )}
          />
        </EmailShareButton>
      </div> */}
      {renderIcon(LinkedinShareButton, FaLinkedin, {
        title: title,
        summary: subtitle,
        url: url,
        source: url,
      })}

      {/* <div
        className={classnames(
          shareIconOuter,
          darkMode ? null : shareIconOuterLight
        )}
      >
        <LinkedinShareButton>
          <FaLinkedin
            className={classnames(
              shareIconInner,
              darkMode ? null : shareIconInnerLight
            )}
          />
        </LinkedinShareButton>
      </div> */}
    </div>
  );
};

export default ShareBlogComponent;
