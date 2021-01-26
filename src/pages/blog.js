import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Bio from "../components/Bio"
import SEO from "../components/Seo"
import { UseAllPostsQuery } from "../hooks/UseAllPostsQuery"

const BlogIndex = () => {
  const getAllPostsList = () => {
    const allPostsList = []
    const allPosts = UseAllPostsQuery()
    allPosts.allMarkdownRemark.edges.forEach(postEdge => {
      allPostsList.push({
        id: postEdge.node.id,
        excerpt: postEdge.node.excerpt,
        path: postEdge.node.fields.slug,
        title: postEdge.node.frontmatter.title,
        description: postEdge.node.frontmatter.description,
        date: postEdge.node.frontmatter.date,
        image: postEdge.node.frontmatter.image.childImageSharp.fluid,
      })
    })
    return allPostsList
  }

  const allPostsList = getAllPostsList()

  return (
    <section>
      <SEO title="Blog" />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {allPostsList.map(post => {
          return (
            <li key={post.id}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <Link to={`/blog${post.path}`}>
                    <Img fluid={post.image} alt={post.title} />
                  </Link>
                  <h2>
                    <Link to={`/blog${post.path}`} itemProp="url">
                      <span itemProp="headline">{post.title}</span>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                </header>
                <section>
                  <i>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </i>
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export default BlogIndex
