import React from "react"

import Bio from "../components/Bio"
import SEO from "../components/Seo"
import LatestPosts from "../components/LatestPosts"

const BlogIndex = () => {
  return (
    <div className="global-wrapper">
      <SEO title="Home Page" />
      <section>
        <Bio />
        <h3>On anywhere her drew rippedup, on you employed western variety</h3>
      </section>
      <section>
        <LatestPosts />
      </section>
    </div>
  )
}

export default BlogIndex
