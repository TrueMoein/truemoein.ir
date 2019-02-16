module.exports = {
  siteMetadata: {
    title: `معین علیزاده`,
    description: `مشترک محتویات ذهنم شوید. معین علیزاده`,
    author: `@TrueMoein`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MoeinAlizadeh`,
        short_name: `truemoein`,
        start_url: `/`,
        background_color: `#59ab7a`,
        theme_color: `#59ab7a`,
        display: `standalone`,
        icon: `src/assets/images/TrueMoein.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
