/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Dakshraj Sharma",
    description: "Software engineer and code wizard",
    author: "Dakshraj Sharma",
    siteUrl: "https://sharmarajdak.sh",
    ogImage: "https://sharmarajdak.sh/og_dakshraj_sharma.png",
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-plugin-layout",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-198807496-1"],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/favicon.png",
        theme_color: "#EEE",
        background_color: "#000",
        start_url: "/",
        name: "sharmarajdak.sh",
      },
    },
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              backgroundColor: "transparent",
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/posts/",
      },
      __key: "pages",
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato", "Source Code Pro"],
        },
      },
    },
  ],
};
