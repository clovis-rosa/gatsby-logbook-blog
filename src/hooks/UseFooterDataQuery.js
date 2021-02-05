import { useStaticQuery, graphql } from "gatsby"

export const UseFooterDataQuery = () => {
  const allFooterData = useStaticQuery(graphql`
    query FooterDataQuery {
      allDataJson {
        edges {
          node {
            id
            data {
              id
              title
              url {
                id
                linkName
                linkUrl
              }
            }
          }
        }
      }
    }
  `)
  return allFooterData
}
