import React from "react";

import { h2 } from "../styles/components/Blogpost.module.scss";

const Heading2 = ({ children }) => {
  return <h2 className={h2}>{children}</h2>;
};

export default Heading2;
