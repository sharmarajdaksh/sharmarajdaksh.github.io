import React from "react";
import classnames from "classnames";

import { ul, ol } from "../styles/components/Blogpost.module.scss";

const OrderedList = ({ children }) => {
  return <ul className={classnames(ul, ol)}>{children}</ul>;
};

export default OrderedList;
