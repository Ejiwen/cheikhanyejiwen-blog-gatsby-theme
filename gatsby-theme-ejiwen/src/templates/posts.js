import React from "react";
import Post from "../components/post";

export const query = graphql`
  {
    allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
      nodes {
        title
        slug
        publishedDate(fromNow: true)
        id
      }
    }
  }
  `


const Posts = ({data: {allContentfulBlogPost: {nodes}}}) => (
    nodes.map(post => <Post key={post.id} post={post} />)
)



export default Posts
