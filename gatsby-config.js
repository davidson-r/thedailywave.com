/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/thedailywave",
  siteMetadata: {
    title: `The Daily Wave`,
    siteUrl: `https://www.thedailywave.com`,
    description: "Welcome to the Daily Wave, your go-to source for up-to-the-minute news and analysis on the most pressing issues of the day.",
    social: { twitter: "@TheDailyWavecom" }
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: 'static',
              include: ['featured'],
              exclude: ['featured.skip'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1024, linkImagesToOriginal: false },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-3FL8NMDW0N",
        ],
        
      },
    }
  ]
};