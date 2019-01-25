// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-132838776-1",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
        },

        resolve: `gatsby-plugin-hotjar`,
        options: {
        id: 1172575,
        sv: 6,
        },
    },
  ],
}