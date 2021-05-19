import React from "react";

import { h4 } from "../styles/components/Blogpost.module.scss";

const Heading4 = ({ children }) => {
  return <h4 className={h4}>{children}</h4>;
};

export default Heading4;
