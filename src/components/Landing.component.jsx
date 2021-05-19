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
      <p className={preText}>{PRETEXT}</p>
      <h1 className={name}>{NAME}</h1>
      <p className={postText}>{POSTTEXT}</p>

      <p className={longText}>{MAINPARA}</p>
    </div>
  );
};

export default Landing;
