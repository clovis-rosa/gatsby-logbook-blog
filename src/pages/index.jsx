import React from "react"
import { Link } from "gatsby"
import SEO from "../components/Seo"
import LatestPosts from "../components/LatestPosts"
import styled from "styled-components"

export default function BlogIndex() {
  return (
    <>
      <SEO title="Logbook | Blog and something here..." />

      <LatestPosts />
    </>
  )
}
