import React from "react";
import BlogPost from "../components/BlogPost"

export const query = graphql`
  query($slugID: String!) {
    post : contentfulBlogPost(slug: { eq: $slugID }) {
        title
        slug
        dp: publishedDate
        body {
            json
        } 
    }
  }
`

const Post = ({data: {post}}) => {

    return (
        <BlogPost post={post} />
    )
}

export default Post
