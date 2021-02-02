import { useStaticQuery, graphql } from "gatsby"

export const UseAllPostsQuery = () => {
  const allPostsListData = useStaticQuery(graphql`
    query AllPostsQuery {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        skip: 2
      ) {
        edges {
          node {
            id
            excerpt
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
  return allPostsListData
}
