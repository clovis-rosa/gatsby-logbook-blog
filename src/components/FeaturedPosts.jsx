import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { UseFeaturedPostsQuery } from "../hooks/UseFeaturedPostsQuery"
import styled from "styled-components"
import { SvgArrowNext } from "./SvgFiles"

export default function FeaturedPosts() {
  const getPostList = () => {
    const postList = []
    const posts = UseFeaturedPostsQuery()
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
          <ArticlesHeader>Featured:</ArticlesHeader>

          <ArticleGrid>
            {postList.map(post => (
              <Article key={post.id}>
                <H2>
                  <Link to={`/blog${post.path}`}>
                    <span>{post.title}</span>
                  </Link>
                </H2>

                <P>{post.excerpt}</P>

                <ArticleImage to={`/blog${post.path}`}>
                  <Img fluid={post.image} alt={post.title} />
                </ArticleImage>

                <ReadMoreWrap>
                  <Small>Posted in {post.date}.</Small>

                  <ReadMore to={`/blog${post.path}`}>
                    <small>Read more</small>
                    <SvgArrowNext />
                  </ReadMore>
                </ReadMoreWrap>
              </Article>
            ))}
          </ArticleGrid>
        </ArticlesContainer>
      </ArticlesSection>
    </>
  )
}

const ArticlesSection = styled.section`
  background: var(--color-white);
  padding: 4rem 2rem 3rem;
`

const ArticlesContainer = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
`

const ArticlesHeader = styled.h2`
  font-family: var(--font-family-primary);
  font-size: 4.75rem;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: normal;
  margin-bottom: 2rem;
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
  /* margin-bottom: 1rem; */
`

const ReadMoreWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.6rem 0;
`

const ReadMore = styled(Link)`
  color: var(--color-black);
  text-decoration: 2px underline transparent;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
  transition: 0.3s all ease;

  small {
    font-family: var(--font-family-secondary-mono);
    font-size: 0.55rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--color-black);
  }

  svg {
    width: 0.7rem;
    height: 0.7rem;
  }

  &:hover {
    text-decoration: 2px underline var(--color-black);
  }
`

const ArticleImage = styled(Link)`
  .gatsby-image-wrapper > picture {
    img {
      transition: transform 0.6s !important;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`
