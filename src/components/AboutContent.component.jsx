import React from "react";
import { landing } from "../styles/components/Landing.module.scss";
import {
  aboutLanding,
  aboutOuter,
  aboutImage,
  aboutImageOuter,
  aboutMain,
  aboutMainQuote,
  aboutMainContent,
} from "../styles/components/About.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import * as about from "../constants/About";
import classnames from "classnames";
import { GITHUB_URL, GOODREADS_URL, LINKEDIN_URL } from "../constants/Navbar";

const AboutContent = () => {
  return (
    <div className={classnames(landing, aboutLanding)}>
      <div className={aboutOuter}>
        <div
          className={aboutImageOuter}
          data-aos="fade-up"
          data-aos-duration="750"
        >
          <StaticImage
            alt="Me, Dakshraj Sharma"
            src="../images/me.jpg"
            placeholder="blurred"
            layout="constrained"
            className={aboutImage}
          />
        </div>
        <div className={aboutMain}>
          <div
            className={aboutMainQuote}
            data-aos="fade-up"
            data-aos-duration="750"
          >
            {about.tagline}
          </div>
          <div
            className={aboutMainContent}
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="750"
          >
            I'm <strong>Dakshraj Sharma</strong>. I do software, and I do it
            pretty well, from the frontend to the backend to the cloud. When I'm
            not developing, I like to read (
            <strong>
              <a href={GOODREADS_URL} target="__blank">
                my Goodreads account, if you're curious
              </a>
            </strong>{" "}
            ). I'm also a self-proclaimed genre-blind connoisseur of beautiful
            music (may I share with you{" "}
            <strong>
              <a
                href="https://open.spotify.com/playlist/2xmREbVZjf5zxPhBKf98Lp?si=f97a95ee1cf84120"
                target="__blank"
              >
                my favorite jams
              </a>
            </strong>
            {" and "}
            <strong>
              <a
                href="https://open.spotify.com/playlist/4n8i68Yn4txnPZClBD1w1C?si=26033a8270be434a"
                target="__blank"
              >
                my favorite electronic music
              </a>
            </strong>
            ). You probably didn't want to know all that, so let's get in touch!
            To see a list of my technical skills and interests, or my resume,
            check out{" "}
            <strong>
              <a href={LINKEDIN_URL} target="__blank">
                my LinkedIn
              </a>
            </strong>
            {" or "}
            <strong>
              <a href={GITHUB_URL} target="__blank">
                my Github
              </a>
            </strong>{" "}
            and feel free to reach out!
          </div>
          <div className={aboutMainContent}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
