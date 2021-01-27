import React from "react"
import styled from "styled-components"
import { SvgBlog } from "./SvgFiles"

export default function Hero() {
  return (
    <HeroContainer>
      <HeroStyles>
        <HeroBigText>
          <SvgBlog />
        </HeroBigText>
        <HeroH1Description>
          <h1>
            <div> The future of design is open. We’re building it.</div>
            <div>Stories, news, and tips from behind the Artboards.</div>
          </h1>
        </HeroH1Description>
      </HeroStyles>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  background: var(--color-black);
  padding: 1rem 2rem 2rem;
`

const HeroStyles = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  @media screen and (max-width: 412px) {
  }
`

const HeroBigText = styled.div`
  /* font-family: var(--font-family-primary); */
  /* font-size: 488px; */
  /* width: 100%;
  height: 100%; */
  /* margin-top: -60px;
  margin-bottom: -50px;
  margin-left: -300px; */
  width: 100%;
  height: 100%;
  svg {
    width: 100%;
  }
`

const HeroH1Description = styled.div`
  font-family: var(--font-family-secondary);
  font-size: 25px;
  font-weight: 400;
  font-style: italic;
  line-height: 30px;
  letter-spacing: normal;
  color: var(--color-white);
  width: 60%;
  position: absolute;
  top: 320px;
  right: 465px;
  h1 {
    margin: 0;
  }

  @media screen and (max-width: 1025px) {
    font-size: 22px;
    top: 260px;
    right: 375px;
  }

  @media screen and (max-width: 960px) {
    font-size: 15px;
    top: 205px;
    right: 267px;
  }

  @media screen and (max-width: 834px) {
    font-size: 18px;
    top: 205px;
    right: 300px;
  }

  @media screen and (max-width: 801px) {
    font-size: 18px;
    top: 200px;
    right: 285px;
  }

  @media screen and (max-width: 769px) {
    font-size: 18px;
    top: 185px;
    right: 275px;
  }

  @media screen and (max-width: 412px) {
    display: none;
    /* width: 70%;
    font-size: 12px;
    top: 115px;
    right: 80px; */
  }
`
