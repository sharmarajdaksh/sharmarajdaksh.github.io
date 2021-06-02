import React from "react";

import ThemeContext from "../context/Theme.context";
import classnames from "classnames";
import { landing, postslist } from "../styles/components/Blog.module.scss";
import {
  main__shell,
  main__shellLight,
} from "../styles/components/Main.module.scss";
import { useContext } from "react";
import { DARK } from "../constants/Themes";
import BlogPostListItem from "./BlogPostListItem.component";
import BlogTitle from "./BlogTitle.component";
import BlogFooter from "./BlogFooter.component";

const Blog = ({ posts, siteUrl }) => {
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === DARK;

  return (
    <main
      className={classnames(
        main__shell,
        darkMode ? null : main__shellLight,
        landing
      )}
    >
      <BlogTitle />
      <div className={postslist}>
        {posts.map(
          ({
            node: {
              id,
              timeToRead,
              frontmatter: { date, slug, title, author, listingContent },
            },
          }) => (
            <BlogPostListItem
              key={id}
              id={id}
              date={date}
              title={title}
              author={author}
              listingContent={listingContent}
              slug={slug}
              timeToRead={timeToRead}
            />
          )
        )}
      </div>
      <BlogFooter />
    </main>
  );
};

export default Blog;
