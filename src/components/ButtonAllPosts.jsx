import React from "react"
import styled from "styled-components"

export default function ButtonAllPosts() {
  return (
    <ButtonSection>
      <ButtonContainer>
        <Button>
          <div class="btn-bg">
            <div>Read More</div>
          </div>
        </Button>
      </ButtonContainer>
    </ButtonSection>
  )
}

const ButtonSection = styled.section`
  background: var(--color-black);
  padding: 0 2rem 3rem;
`

const ButtonContainer = styled.div`
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  place-content: center;
`
const Button = styled.a`
  /* position: relative; */
  max-width: 100%;
  display: flex;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.05rem;
  background-color: var(--color-black);
  box-shadow: 0 0 0 1px var(--color-white);
  font-family: var(--font-family-primary);
  color: var(--color-white);
  font-size: 0.7rem;
  line-height: 1em;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;

  .btn-bg {
    width: 100%;
    height: 100%;
    border-radius: 0.05rem;
    background-color: var(--color-black);
    box-shadow: 0 0 0 1px var(--color-white);

    font-family: var(--font-family-primary);
    color: var(--color-white);
    font-size: 0.7rem;
    line-height: 1em;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transform: translate(0.5em, -0.5em);

    &:hover {
      transform: translate(0.25em, -0.25em);
      transition: transform 100ms ease-out;
    }
  }

  div {
    padding: 0.5rem 1rem;
    border-radius: 0.05rem;
    transition: transform 150ms ease-out;

    &:hover {
      /* transform: translate(0.25em, -0.25em);
      transition: transform 100ms ease-out; */
    }
  }

  &:hover {
    top: auto;
    outline: 0;
    /* transform: translate(0.25em, -0.25em);
    transition: transform 100ms ease-out; */
  }
`
