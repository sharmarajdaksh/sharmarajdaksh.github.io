import React from "react";
import { graphql } from "gatsby";
import Blog from "../components/Blog.component";

const BlogPage = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return <Blog posts={edges} />;
};

export const BlogQuery = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___dateNumeric] }) {
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
