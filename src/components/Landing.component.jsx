import React from "react";
import { MAINPARA, NAME, POSTTEXT, PRETEXT } from "../constants/Landing";
import {
  landing,
  preText,
  name,
  postText,
  longText,
} from "../styles/components/Landing.module.scss";

const Landing = () => {
  return (
    <div className={landing}>
      <p
        className={preText}
        data-aos="fade-left"
        data-aos-duration="200"
        data-aos-delay="200"
      >
        {PRETEXT}
      </p>
      <h1 className={name} data-aos="fade-down" data-aos-duration="200">
        {NAME}
      </h1>
      <p
        className={postText}
        data-aos="fade-right"
        data-aos-duration="200"
        data-aos-delay="400"
      >
        {POSTTEXT}
      </p>

      <p
        className={longText}
        data-aos="fade-up"
        data-aos-duration="200"
        data-aos-delay="600"
      >
        {MAINPARA}
      </p>
    </div>
  );
};

export default Landing;
