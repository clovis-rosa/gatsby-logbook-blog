import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function ButtonAllPosts() {
  return (
    <ButtonSection>
      <ButtonContainer>
        <ButtonLink>
          <Button className="learn-more">Read More</Button>
        </ButtonLink>
      </ButtonContainer>
    </ButtonSection>
  )
}

const ButtonSection = styled.section`
  /* background: var(--color-black); */
  padding: 0 2rem 3rem;
`

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  place-content: center;
`

const ButtonLink = styled(Link)`
  text-decoration: none;
`

const Button = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  vertical-align: middle;
  text-decoration: none;

  font-family: var(--font-family-secondary-mono);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.016rem;
  color: var(--color-black);
  text-transform: uppercase;
  padding: 0.8rem 1.6rem;
  background: var(--color-white);
  border: 2px solid var(--color-black);
  border-radius: 0.05rem;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1);

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    border-radius: inherit;
    box-shadow: -8px 14px 0 var(--color-black);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  &:hover {
    transform: translate(0, 0.25em);

    &::before {
      box-shadow: -6px 8px 0 var(--color-black);
    }
  }

  &:active {
    transform: translate(0em, 0.75em);

    &::before {
      box-shadow: 0 0 0 2px var(--color-black);
      transform: translate3d(0, 0, -1em);
    }
  }
`
