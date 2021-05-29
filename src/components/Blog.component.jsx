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
import Seo from "./SEO.component";
import { BLOG_DESCRIPTION } from "../constants/Blog";
import SeoContext from "../context/Seo.context";

const Blog = ({ posts, siteUrl }) => {
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === DARK;
  const { setSeo } = React.useContext(SeoContext);

  React.useEffect(() => {
    setSeo(
      <Seo title={"Blog"} description={BLOG_DESCRIPTION} slug={"/blog"} />
    );
  }, [setSeo]);

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
