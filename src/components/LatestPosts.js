import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { UseLatestPostsQuery } from "../hooks/UseLatestPostsQuery"

const LatestPosts = () => {
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
    <div>
      <h1>Recent Posts:</h1>
      <ol style={{ listStyle: `none` }}>
        {postList.map(post => (
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
              {/* <section>
                  <i>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </i>
                </section> */}
            </article>
          </li>
        ))}
      </ol>
      <h4>
        Read more on our{" "}
        <Link to="/blog" style={{ color: "red" }}>
          Blog Page &rarr;
        </Link>
      </h4>
    </div>
  )
}

export default LatestPosts
