import React from "react";
import { graphql } from "gatsby";
import Blog from "../components/Blog.component";
import { BLOG_DESCRIPTION } from "../constants/Blog";
import Seo from "../components/SEO.component";

const BlogPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const seo = (
    <Seo title={"Blog"} description={BLOG_DESCRIPTION} slug={"/blog"} />
  );
  const core = <Blog posts={edges} />;

  return (
    <>
      {seo}
      {core}
    </>
  );
};

export const BlogQuery = graphql`
  query {
    allMdx(sort: {frontmatter: {dateNumeric: DESC}}) {
      edges {
        node {
          id
          timeToRead 
          frontmatter {
            date
            author
            title
            listingContent
            slug
          }
        }
      }
    }
  }
`;

export default BlogPage;
