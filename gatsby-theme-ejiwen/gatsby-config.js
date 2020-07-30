module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
              path: "data",
            },
          },
        {
          resolve: `gatsby-source-contentful`,
          options: {
            spaceId: `6237eox9dm6z`,
            accessToken: `NTl2ySG7s74M4rHEUAD5WhI8CDyDUubYp_NgyftBBqw`,
          },
        },
      ]
}