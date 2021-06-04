module.exports = {
  siteMetadata: {
    title: "Dakshraj Sharma",
    description: "Software engineer and code wizard",
    author: "Dakshraj Sharma",
    siteUrl: "https://sharmarajdaksh.github.io",
    ogImage: "https://sharmarajdaksh.github.io/og_dakshraj_sharma.png",
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-layout",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
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
    "gatsby-transformer-sharp",
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
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato", "Source Code Pro"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-198807496-1"],
      },
    },
  ],
};
