import React from "react";
import PostList from "../components/post-list";
import { graphql, useStaticQuery} from 'gatsby';

const Posts = () => {
    const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
        nodes {
          title
          slug
          publishedDate
        }
      }
    }
  `)

  const posts = data.allContentfulBlogPost.nodes;
  return <PostList posts={posts} />
}



export default Posts
