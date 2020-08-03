module.exports = ({contentPath = 'data', basePath= '/'}) => ({
    plugins: [
      `gatsby-transformer-sharp`, 
      `gatsby-plugin-sharp`,
      'gatsby-theme-ui',
        {
            resolve: "gatsby-source-filesystem",
            options: {
              path: contentPath
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
})