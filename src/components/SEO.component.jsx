import React from "react";
import { Helmet } from "react-helmet";
import * as seo from "../constants/SEO";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, meta, description, additionalKeywords, slug }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          ogImage
        }
      }
    }
  `);

  const ogImage = data.site.siteMetadata.ogImage;
  const siteUrl = data.site.siteMetadata.siteUrl + (slug ? slug : "");

  return (
    <Helmet
      htmlAttributes={{
        lang: seo.lang,
      }}
      title={title}
      titleTemplate={`%s | ${seo.baseTitle}`}
      meta={[
        {
          name: `keywords`,
          content:
            (additionalKeywords ? additionalKeywords + ", " : "") +
            seo.keywords,
        },
        {
          name: `viewport`,
          content: seo.viewport,
        },
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `image`,
          property: `og:image`,
          content: ogImage,
        },
        // {
        //   name: `og:url`,
        //   content: siteUrl,
        // },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: ogImage,
        },
        {
          name: `twitter:creator`,
          content: description,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `author`,
          content: seo.author,
        },
      ].concat(meta)}
    />
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: seo.metaDescription,
  additionalKeywords: "",
  slug: null,
};

export default Seo;
