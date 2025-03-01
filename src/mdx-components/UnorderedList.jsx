import React from "react";

import { ul } from "../styles/components/Blogpost.module.scss";

const UnorderedList = ({ children }) => {
  return <ul className={ul}>{children}</ul>;
};

export default UnorderedList;
