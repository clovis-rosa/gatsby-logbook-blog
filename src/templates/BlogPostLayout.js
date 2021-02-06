import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/Bio"
import SEO from "../components/Seo"
import styled from "styled-components"

export default function BlogPostTemplate({ data }) {
  const post = data.markdownRemark
  const { previous, next } = data
  // console.log(post, `==========> POST`)

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogPostStyles>
        <article>
          <BlogPostHeader>
            <h1>{post.frontmatter.title}</h1>
            <h3>{post.frontmatter.description}</h3>
            <small>{post.frontmatter.date}</small>
          </BlogPostHeader>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
          <footer>
            <Bio />
          </footer>
        </article>
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={`/blog${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`/blog${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </BlogPostStyles>
    </>
  )
}

const BlogPostStyles = styled.main`
  padding: 6rem 2rem 3rem;
`

const BlogPostHeader = styled.header`
  max-width: 1160px;
  margin: 0 auto;

  h1 {
    font-family: var(--font-family-primary);
    font-size: 3.75rem;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: normal;
    margin-bottom: 0;
  }
`

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
