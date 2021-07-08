module.exports = {
  siteMetadata: {
    title: `Collaboration and Credit Building Platform in Polkadot Ecosystem`,
    description: ``,
    author: `yongfeng@opensquare.network`,
    keywords: `OpenSquare, blockchain, polkadot, substrate, crowdsourcing, reputation, credit, 区块链, 众包, 信用, 信用分`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-172658681-1",
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `OpenSquare`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        include_favicon: false,
        icons: [],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Montserrat",
            variable: true,
            weights: ["200..900"],
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
