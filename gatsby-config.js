module.exports = {
  siteMetadata: {
    title: `The Catty Shack`,
    description: `Arrowhead Cat Adoption`,
    author: `Chris Conner`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the-catty-shack`,
        short_name: `catty-shack`,
        start_url: `/`,
        background_color: `#71EEB8`,
        theme_color: `#71EEB8`,
        display: `minimal-ui`
      },
    },
  ],
}
