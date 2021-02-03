import React from "react"
import styled from "styled-components"

export default function ButtonAllPosts() {
  return (
    <ButtonSection>
      <ButtonContainer>
        <Button>Hover over me</Button>
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
const Button = styled.button`
  font-family: var(--font-family-primary);
  background: var(--color-white);
  color: var(--color-black);
  cursor: pointer;
  font-size: 1rem;
  padding: 0.8rem;
  border: 3px solid var(--color-black);
  transition: all 0.5s;
  /* border-radius: 10px; */
  width: auto;
  position: relative;

  &::after {
    content: "❯";
    font-weight: 400;
    position: absolute;
    left: 85%;
    top: 23%; /*31%*/
    right: 5%;
    bottom: 0;
    opacity: 0;
  }

  &:hover {
    background: var(--color-white);
    color: var(--color-black);
    border: 3px solid var(--color-black);

    transition: all 0.5s;
    /* border-radius: 10px; */
    box-shadow: 0px 6px 15px var(--color-black);
    padding: 1rem 3.5rem 1rem 1.5rem;

    &::after {
      opacity: 1;
      transition: all 0.5s;
    }
  }
`
