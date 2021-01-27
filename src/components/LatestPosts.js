import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { UseLatestPostsQuery } from "../hooks/UseLatestPostsQuery"

export default function LatestPosts() {
  const getPostList = () => {
    const postList = []
    const posts = UseLatestPostsQuery()
    posts.allMarkdownRemark.edges.forEach(postEdge => {
      postList.push({
        id: postEdge.node.id,
        excerpt: postEdge.node.excerpt,
        path: postEdge.node.fields.slug,
        title: postEdge.node.frontmatter.title,
        description: postEdge.node.frontmatter.description,
        date: postEdge.node.frontmatter.date,
        image: postEdge.node.frontmatter.image.childImageSharp.fluid,
      })
    })
    return postList
  }

  const postList = getPostList()

  return (
    <>
      {postList.map(post => (
        <article key={post.id}>
          <Link to={`/blog${post.path}`}>
            <Img fluid={post.image} alt={post.title} />
          </Link>
          <h2>
            <Link to={`/blog${post.path}`} itemProp="url">
              <span itemProp="headline">{post.title}</span>
            </Link>
          </h2>
          <p>{post.description}</p>
          <small>{post.date}</small>
        </article>
      ))}
    </>
  )
}
