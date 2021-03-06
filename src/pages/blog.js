import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/Seo"
import styled from "styled-components"
import { UseAllPostsQuery } from "../hooks/UseAllPostsQuery"
import { SvgArrowNext } from "../components/SvgFiles"

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
    <>
      <SEO title="Blog" />
      <ArticlesSection>
        <ArticlesContainer>
          <ArticlesHeader>
            <h2>All Stories:</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </ArticlesHeader>
          <ArticleGrid>
            {allPostsList.map(post => {
              return (
                <Article key={post.id}>
                  <H2>
                    <Link to={`/blog${post.path}`}>
                      <span itemProp="headline">{post.title}</span>
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
              )
            })}
          </ArticleGrid>
        </ArticlesContainer>
      </ArticlesSection>
    </>
  )
}

export default BlogIndex

const ArticlesSection = styled.section`
  background: var(--color-white);
  /* padding: 4rem 2rem 2rem; */
  padding: 8rem 2rem 2rem; /*! Bigger top padding due fixed navbar */

  @media screen and (max-width: 412px) {
    padding: 2rem 2rem 2rem;
  }
`

const ArticlesContainer = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
`

const ArticlesHeader = styled.div`
  padding-bottom: 2rem;

  h2 {
    font-family: var(--font-family-primary);
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: normal;
    margin-bottom: 1rem;

    @media screen and (max-width: 769px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 412px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-family: var(--font-family-secondary);
    font-size: 1rem;
    font-weight: 400;
    /* font-style: italic; */
    line-height: 1.5;
    letter-spacing: normal;
    color: var(--color-black);
    margin-bottom: 1rem;
  }
`

const Article = styled.article`
  /* padding: 0 0 4rem; */
  padding: 0 0 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
`

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media screen and (max-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media screen and (max-width: 801px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media screen and (max-width: 412px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const H2 = styled.h2`
  font-family: var(--font-family-primary);
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: normal;
  color: var(--color-black);
  margin-bottom: 1rem;

  @media screen and (max-width: 769px) {
    font-size: 1.15rem;
  }

  @media screen and (max-width: 412px) {
    font-size: 1rem;
  }
`

const P = styled.p`
  font-family: var(--font-family-secondary);
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--color-black);
  margin-bottom: 1rem;

  @media screen and (max-width: 412px) {
    font-size: 0.8rem;
  }
`

const Small = styled.small`
  font-family: var(--font-family-secondary-mono);
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: var(--color-black);
  /* margin-bottom: 1rem; */

  @media screen and (max-width: 769px) {
    font-size: 0.55rem;
  }
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

    @media screen and (max-width: 769px) {
      font-size: 0.45rem;
    }
  }

  svg {
    width: 0.7rem;
    height: 0.7rem;

    @media screen and (max-width: 769px) {
      width: 0.5rem;
      height: 0.5rem;
    }
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
