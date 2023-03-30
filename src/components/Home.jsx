import React from 'react'
import styled from 'styled-components'
import Navbar from "./Navbar"

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const Container = styled.div`


`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0;
  transform: translateY(100%);
  animation-name: fadeUp;
  animation-duration: 1.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  @keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`
const Name = styled.h1`
  font-size: 4rem;

`
const Job = styled.h2`
  font-size: 2.5rem;
`
const Description = styled.p`
`
const PhotoContainer = styled.div`
  height: 14rem;
  width: 14rem;
  border-radius: 50%;
  background-image: url("../../public/img/profile.jpeg");
  background-position: center;
  background-size: cover;
  border: 1px solid white;
  position: absolute;
  top: 8rem;
  right: 12rem;
`


const Home = () => {
  return (
    <Section id="about">
      <Container>
        <PhotoContainer></PhotoContainer>
        <Content>
          <Name>Hey there, I'm Ben 👋</Name>
          <Job>I'm a Full Stack Developer</Job>
          <Description>Keep scrolling to check out my portfolio...</Description>
        </Content>
      </Container>
    </Section>
  )
}

export default Home
