require("dotenv").config()

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `http://kaczuszka.letmeinux.com/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GA_TRACKING_ID,
          cookieName: "gatsby-gdpr-google-analytics",
        },
        environments: ["production"],
      },
    },
  ],
}
