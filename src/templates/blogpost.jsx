import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { DARK } from "../constants/Themes";
import classnames from "classnames";
import {
  landing,
  divider,
  dividerFooter,
  blogpost__content,
  blogpost__title,
  blogpost__subtitle,
  blogpost__author,
  blogpost__header,
} from "../styles/components/Blog.module.scss";
import {
  main__shell,
  main__shellLight,
} from "../styles/components/Main.module.scss";
import ThemeContext from "../context/Theme.context";
import BlogTitle from "../components/BlogTitle.component";
import BlogFooter from "../components/BlogFooter.component";
import mdxShortcodes from "../mdx-components";
import Seo from "../components/SEO.component";

const BlogPost = ({
  data: {
    mdx,
  },
  children
}) => {
  const { theme } = React.useContext(ThemeContext);
  const darkMode = theme === DARK;

  const seo = (
    <Seo
      title={mdx.frontmatter.title}
      description={mdx.frontmatter.listingContent}
      additionalKeywords={mdx.frontmatter.keywords}
      slug={"/blog/" + mdx.frontmatter.slug + "/"}
    />
  );

  const core = (
    <main
      className={classnames(
        main__shell,
        darkMode ? null : main__shellLight,
        landing
      )}
    >
      <BlogTitle />
      <section className={blogpost__content}>
        <div
          className={blogpost__header}
          data-aos="fade-up"
          data-aos-duration="200"
        >
          <div className={blogpost__title}>{mdx.frontmatter.title}</div>
          <div className={blogpost__subtitle}>
            {mdx.frontmatter.listingContent}
          </div>
          <div className={blogpost__author}>
            {mdx.frontmatter.date} | {mdx.frontmatter.author} |{" "}
            {`${Math.floor(mdx.timeToRead)} minute read`}
          </div>
          <div className={divider}></div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <MDXProvider components={mdxShortcodes}>
            {children}
          </MDXProvider>
        </div>
      </section>
      <div className={dividerFooter}></div>
      <BlogFooter />
    </main>
  );

  return (
    <>
      {seo}
      {core}
    </>
  );
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      timeToRead
      frontmatter {
        title
        date
        author
        listingContent
        slug
        keywords
      }
    }
  }
`;

export default BlogPost;
