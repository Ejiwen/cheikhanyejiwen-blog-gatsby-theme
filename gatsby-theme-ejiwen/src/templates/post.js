import React from "react"


export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
        title
        slug
        publishedDate
    }
  }
`


const Post = ({data}) => {
    console.log('-----------------------------');
    console.log(data.contentfulBlogPost.publishedDate);
    console.log('-----------------------------');
    return <h3>It's works .. Bravo EJIWEN ... single post !!!</h3>
}

export default Post