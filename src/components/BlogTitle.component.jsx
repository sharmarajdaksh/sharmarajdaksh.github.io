import React from "react";
import { BLOG_TITLE, NAME } from "../constants/Blog";
import {
  titlesection,
  name,
  preText,
  backToTop,
  backToTopLight,
} from "../styles/components/Blog.module.scss";
import { FaArrowAltCircleUp } from "react-icons/fa";
import ThemeContext from "../context/Theme.context";
import { DARK } from "../constants/Themes";
import classnames from "classnames";

const BlogTitle = () => {
  const { theme } = React.useContext(ThemeContext);
  const darkMode = theme === DARK;
  const [showBackToTop, setShowBackToTop] = React.useState(false);
  const headerRef = React.useRef(null);

  const scrollDown = (e, ref) => {
    e.preventDefault();
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  React.useEffect(() => {
    let observer;
    let hrf = headerRef.current;
    const headerIntersection = (header) => {
      observer = new IntersectionObserver((entry, self) => {
        if (entry[0].isIntersecting) {
          setShowBackToTop(false);
        } else {
          setShowBackToTop(true);
        }
      });
      observer.observe(header);
    };

    headerIntersection(hrf);

    return () => {
      observer.unobserve(hrf);
    };
  }, []);

  return (
    <div className={titlesection}>
      <a href="/">
        <h1
          className={name}
          data-aos="fade-right"
          data-aos-duration={`${750 / 2}`}
        >
          {NAME}
        </h1>
      </a>
      <h2
        ref={headerRef}
        className={preText}
        data-aos="fade-right"
        data-aos-delay={`${750 / 2}`}
        data-aos-duration={`${750 / 2}`}
      >
        {BLOG_TITLE}
      </h2>
      <div
        className={classnames(backToTop, darkMode ? null : backToTopLight)}
        style={{
          opacity: showBackToTop ? 1 : 0,
        }}
      >
        <a href={headerRef} onClick={(e) => scrollDown(e, headerRef)}>
          <FaArrowAltCircleUp />
        </a>
      </div>
    </div>
  );
};

export default BlogTitle;
