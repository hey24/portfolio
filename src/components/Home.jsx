import React from 'react'
import styled from 'styled-components'
import Navbar from "./Navbar"

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
const PhotoContainer = styled.div`
  height: 14rem;
  width: 14rem;
  border-radius: 50%;
  background-image: url("../../public/img/profile.jpeg");
  background-position: center;
  background-size: cover;
  border: 1px solid white;
`

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;

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


const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
const SocialLinks = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
`

const Social = styled.a``

const SocialImg = styled.img`
  height: 2rem;

  &:hover{
    transition: 0.5s;
    transform: translateY(2px);
  };
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
        <SocialContainer>
          <p>Check out my LinkedIn and GitHub:</p>
          <SocialLinks>
            <Social href="https://www.linkedin.com/in/ben-h-/"><SocialImg src="./img/linkedin-white.png" alt="" /></Social>
            <Social href="https://github.com/hey24"><SocialImg src="./img/github-white.png" alt="" /></Social>
          </SocialLinks>
        </SocialContainer>
      </Container>
    </Section>
  )
}

export default Home
