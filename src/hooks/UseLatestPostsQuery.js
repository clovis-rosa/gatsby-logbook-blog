import { useStaticQuery, graphql } from "gatsby"

export const UseLatestPostsQuery = () => {
  const postListData = useStaticQuery(graphql`
    query LatestPostsQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 2
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 100)
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "MMMM DD, YYYY")
              image {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return postListData
}
