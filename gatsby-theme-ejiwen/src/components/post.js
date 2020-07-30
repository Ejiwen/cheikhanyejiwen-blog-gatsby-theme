import React from "react";
import { Link } from 'gatsby';

const Post = ({post}) => {
    return <Link to={post.slug}><h1> {post.title} </h1></Link>
}

export default Post;