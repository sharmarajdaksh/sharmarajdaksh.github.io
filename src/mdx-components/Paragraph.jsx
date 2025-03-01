import React from "react";

import { paragraph } from "../styles/components/Blogpost.module.scss";

const Paragraph = ({ children }) => {
  return <p className={paragraph}>{children}</p>;
};

export default Paragraph;
