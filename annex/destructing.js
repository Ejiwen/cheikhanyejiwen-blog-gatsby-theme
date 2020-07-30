import React from "react"


export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
        title
        slug
        dp: publishedDate
    }
  }
`

const Post = ({data: {contentfulBlogPost: {dp}}}) => {
    console.log('-----------------------------');
    console.log(dp);
    console.log('-----------------------------');
    return <h3>It's works .. Bravo EJIWEN ... single post !!!</h3>
}

export default Post

// ------------------------------------------------------------------------------------------- //