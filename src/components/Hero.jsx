import React from "react"
import styled from "styled-components"

export default function Hero() {
  return (
    <HeroStyles>
      <HeroBigText>Blog</HeroBigText>
      <HeroH1Description>
        <h1>
          The future of design is open. We’re building it. <br />
          Stories, news, and tips from behind the Artboards.
        </h1>
      </HeroH1Description>
    </HeroStyles>
  )
}

const HeroStyles = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 2rem 3rem 2rem;
  background: var(--color-black);
  color: var(--color-white);
  position: relative;
`

const HeroBigText = styled.span`
  font-family: var(--font-family-primary);
  font-size: 20rem;
  width: 100%;
  height: 100%;
  margin-top: -150px;
  margin-bottom: -50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const HeroH1Description = styled.div`
  font-family: var(--font-family-secondary);
  font-size: 25px;
  font-weight: 400;
  font-style: italic;
  line-height: 30px;
  letter-spacing: normal;
  width: 60%;
  position: absolute;
  top: 330px;
  right: 315px;
`
