// First : install 
// npm install --save gatsby-image
// and npm install --save gatsby-transformer-sharp gatsby-plugin-sharp
// Then in your gatsby-config.js add : plugins: [`gatsby-transformer-sharp`, `gatsby-plugin-sharp`]


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
   // Embedded images images in our blog post
    const options = {
        renderNode : {
            "embedded-asset-block" : (node) => {
                const alt= node.data.target.fields.file['en-US'].title;
                const url= node.data.target.fields.file['en-US'].url;
                return <img alt={alt} src={url} />
            }
        }
    }
    // END ... Embedded images images in our blog post

    return (
        <article>
            <h2> {post.title} </h2>
            <span> {post.dp} </span>
    {/* add Options in the listes of parameters */}
            <div> { documentToReactComponents(post.body.json, options) } </div>
        </article>
    )
}

export default Post