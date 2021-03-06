import React from "react"
import SEO from "../components/Seo"
import FeaturedPosts from "../components/FeaturedPosts"
import LatestPosts from "../components/LatestPosts"
import ButtonAllPosts from "../components/ButtonAllPosts"
import Hero from "../components/Hero"

// import styled from "styled-components"

export default function BlogIndex() {
  return (
    <>
      <SEO title="Logbook | Blog and something here..." />
      <Hero />
      <FeaturedPosts />
      <LatestPosts />
      <ButtonAllPosts />
    </>
  )
}
