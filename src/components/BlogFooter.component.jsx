import React from "react";
import { FOOTER_CONTENT } from "../constants/Blog";
import { footer } from "../styles/components/Blog.module.scss";

const BlogFooter = () => {
  return <footer className={footer}>{FOOTER_CONTENT}</footer>;
};

export default BlogFooter;
