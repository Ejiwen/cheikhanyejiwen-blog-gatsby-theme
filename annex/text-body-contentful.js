// First ... install it
// npm install @contentful/rich-text-react-renderer
// OR yarn add @contentful/rich-text-react-renderer

import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
        <article>
            <h2> {post.title} </h2>
            <span> {post.dp} </span>

            <div> { documentToReactComponents(post.body.json) } </div>
            
        </article>
    )
}

export default Post