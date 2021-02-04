import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { UseFooterDataQuery } from "../hooks/UseFooterDataQuery"

export default function Footer() {
  const getAllFooterList = () => {
    const allFooterList = []
    const allFooter = UseFooterDataQuery()
    allFooter.allDataJson.edges.forEach(footerEdge => {
      allFooterList.push({
        id: footerEdge.node.id,
        title: footerEdge.node.title,
        linkTitle: footerEdge.node.links.linkName,
        linkUrl: footerEdge.node.links.linkUrl,
      })
    })
    return allFooterList
  }

  const allFooterList = getAllFooterList()

  return (
    <FooterSection>
      <FooterContainer>
        {allFooterList.map(data => {
          return (
            <div key={data.id}>
              <h3>{data.title}</h3>
              <ul>
                <li>
                  <Link to={`/${data.linkUrl}`}>{data.linkTitle}</Link>
                </li>
              </ul>
            </div>
          )
        })}
      </FooterContainer>
      <div>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>
    </FooterSection>
  )
}

const FooterSection = styled.footer`
  background: var(--color-black);
  color: var(--color-white);
  padding: 6rem 2rem 3rem;

  @media screen and (max-width: 801px) {
    padding: 6rem 2rem 3rem;
  }
`
const FooterContainer = styled.nav`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
`
