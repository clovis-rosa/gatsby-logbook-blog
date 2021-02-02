import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { UseLatestPostsQuery } from "../hooks/UseLatestPostsQuery"
import styled from "styled-components"
// import { SvgArrowNext } from "./SvgFiles"

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
      <ArticlesSection>
        <ArticlesContainer>
          <h2>Recent Posts:</h2>

          <ArticleGrid>
            {postList.map(post => (
              <Article key={post.id}>
                <H2>
                  <Link to={`/blog${post.path}`}>
                    <span>{post.title}</span>
                  </Link>
                </H2>

                <P>{post.description}</P>
                {/* <ReadMore>
            <SvgArrow>
              Read more
              <SvgArrowNext />
            </SvgArrow>
          </ReadMore> */}

                <ArticleImage to={`/blog${post.path}`}>
                  <Img fluid={post.image} alt={post.title} />
                </ArticleImage>

                <Small>Posted in {post.date}.</Small>
              </Article>
            ))}
          </ArticleGrid>

          <h4>
            Read more on our{" "}
            <Link to="/blog" style={{ color: "red" }}>
              Blog Page &rarr;
            </Link>
          </h4>
        </ArticlesContainer>
      </ArticlesSection>
    </>
  )
}

const ArticlesSection = styled.section`
  background: var(--color-white);
  padding: 6rem 2rem 3rem;
`

const ArticlesContainer = styled.div`
  /* background: var(--color-black); */
  /* display: flex; */
  /* justify-content: space-between; */
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
`

const Article = styled.article`
  padding: 0 0 4rem;
`

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`

const H2 = styled.h2`
  font-family: var(--font-family-primary);
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: normal;
  color: var(--color-black);
  margin-bottom: 1rem;
`

const P = styled.p`
  font-family: var(--font-family-secondary);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--color-black);
  margin-bottom: 1rem;
`

const Small = styled.small`
  font-family: var(--font-family-secondary-mono);
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: var(--color-black);
  margin-bottom: 1rem;
`

const ReadMore = styled.small`
  font-family: var(--font-family-secondary-mono);
  font-size: 0.6rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-black);
  margin-bottom: 1rem;

  display: flex;
  flex-direction: row;
`

const ArticleImage = styled(Link)`
  margin-bottom: 0.5rem;

  img {
    border-radius: 10px;
  }
`

const SvgArrow = styled.div`
  svg {
    width: 1rem;
    height: 1rem;
  }
`
