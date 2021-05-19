import React from "react";

import { h3 } from "../styles/components/Blogpost.module.scss";

const Heading3 = ({ children }) => {
  return <h3 className={h3}>{children}</h3>;
};

export default Heading3;
