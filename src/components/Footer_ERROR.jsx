import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { UseFooterDataQuery } from "../hooks/UseFooterDataQuery"

export default function Footer() {
  const allFooterList = UseFooterDataQuery().allDataJson.edges
  // const item = new Map(Object.keys(allFooterList))

  // console.log(item, `==============> ITEM`)
  // console.log(UseFooterDataQuery())
  // console.log(allFooterList)

  return (
    <FooterSection>
      <FooterContainer>
        {allFooterList.map(({ node }) => {
          console.log(node, `====================> NODE`)

          return (
            <div key={node.id}>
              <h3>{node.title}</h3>
              {node.data.map(data => {
                console.log(data, `====================> DATA`)

                return (
                  <ul key={data.id}>
                    <li>
                      <Link to={`/${data.linkUrl}`}>{data.linkName}</Link>
                    </li>
                  </ul>
                )
              })}
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
