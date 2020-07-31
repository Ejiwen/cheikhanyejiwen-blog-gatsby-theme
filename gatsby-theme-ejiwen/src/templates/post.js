import React from "react";
import BlogPost from "../components/BlogPost"

export const query = graphql`
  query($slug: String!) {
    post : contentfulBlogPost(slug: { eq: $slug }) {
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
