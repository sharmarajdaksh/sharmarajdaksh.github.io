import React from "react";

import { li } from "../styles/components/Blogpost.module.scss";

const ListItem = ({ children }) => {
  return <li className={li}>{children}</li>;
};

export default ListItem;
