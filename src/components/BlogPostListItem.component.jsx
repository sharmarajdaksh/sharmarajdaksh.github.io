import React from "react";

import {
  bloglist__item,
  bloglist__title,
  bloglist__author,
  bloglist__content,
  divider,
} from "../styles/components/Blog.module.scss";

const BlogPostListItem = ({
  id,
  title,
  date,
  author,
  listingContent,
  timeToRead,
  slug,
}) => {
  const timeToReadInt = Math.round(timeToRead);
  return (
    <div key={id} data-aos="fade-up" data-aos-duration="200">
      <div className={bloglist__item}>
        <div className={bloglist__author}>
          {date} | {author} | {`${timeToReadInt} minute read`}
        </div>
        <a href={`/blog/${slug}`}>
          <div className={bloglist__title}>{title}</div>
        </a>
        <div className={bloglist__content}>{listingContent}</div>
      </div>
      <div className={divider}></div>
    </div>
  );
};

export default BlogPostListItem;
