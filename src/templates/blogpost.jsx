import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { DARK } from "../constants/Themes";
import classnames from "classnames";
import {
  landing,
  divider,
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
import BlogTitle from "../components/BlogTitle";
import BlogFooter from "../components/BlogFooter";
import mdxShortcodes from "../mdx-components";
import Seo from "../components/SEO";

const BlogPost = ({
  data: {
    mdx,
    site: {
      siteMetadata: { siteUrl },
    },
  },
}) => {
  const { theme } = React.useContext(ThemeContext);
  const darkMode = theme === DARK;

  return (
    <main
      className={classnames(
        main__shell,
        darkMode ? null : main__shellLight,
        landing
      )}
    >
      <Seo
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.listingContent}
      />
      <BlogTitle />
      <section className={blogpost__content}>
        <div className={blogpost__header}>
          <div className={blogpost__title}>{mdx.frontmatter.title}</div>
          <div className={blogpost__subtitle}>
            {mdx.frontmatter.listingContent}
          </div>
          <div className={blogpost__author}>
            {mdx.frontmatter.date} | {mdx.frontmatter.author} |{" "}
            {`${mdx.timeToRead} minute read`}
          </div>
          <div className={divider}></div>
        </div>
        <MDXProvider components={mdxShortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </section>
      <div className={divider}></div>
      <BlogFooter />
    </main>
  );
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      id
      timeToRead
      body
      frontmatter {
        title
        date
        author
        listingContent
        slug
      }
    }
  }
`;

export default BlogPost;
