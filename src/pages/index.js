import React from "react"
import { Link } from "gatsby"
import SEO from "../components/Seo"
import LatestPosts from "../components/LatestPosts"

export default function BlogIndex() {
  return (
    <>
      <SEO title="Logbook | Blog and something here..." />

      <section>
        <h2>Recent Posts:</h2>

        <LatestPosts />

        <h4>
          Read more on our{" "}
          <Link to="/blog" style={{ color: "red" }}>
            Blog Page &rarr;
          </Link>
        </h4>
      </section>
    </>
  )
}
