import React from "react"
import { Link } from "gatsby"
import SEO from "../components/Seo"
import LatestPosts from "../components/LatestPosts"
import styled from "styled-components"

export default function BlogIndex() {
  return (
    <>
      <SEO title="Logbook | Blog and something here..." />

      <ArticlesSection>
        <ArticlesContainer>
          <h2>Recent Posts:</h2>

          <LatestPosts />

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
