import React from "react"
import { graphql } from "gatsby"

const Posts = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allContentfulBlogPost {
      nodes {
        title
        slug
        publishedDate(fromNow: true)
      }
    }
  }
`

export default Posts
