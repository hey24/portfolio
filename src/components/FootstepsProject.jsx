import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
margin-top: 2rem;
display: flex;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const ProjectName = styled.h2`
`
const Tags = styled.div`
  display: flex;
  gap: 1rem;
`
const Tag1 = styled.p`
  background-color: #A5CC82;
  padding: 0.4rem;
  border-radius: 0.2rem;

  &:hover{
    transition: 0.5s;
    transform: translateY(-2px);
  }
`
const Description = styled.p`

`
const Right = styled.div`
  flex: 1;
`
const Screenshot = styled.img`
  height: 500px;
  border-radius: 0.2rem;

`
const Links = styled.div`
  display: flex;
  gap: 1rem;
`
const LiveLink = styled.a``

const GitHubLink= styled.a``

const SocialImg = styled.img`
  height: 1.5rem;

  &:hover{
    transition: 0.5s;
    transform: translateY(2px);
  };
`

const FootstepsProject = () => {
  return (
    <Section>
      <Container>
        <Left>
          <ProjectName>Footsteps</ProjectName>
          <Tags>
            <Tag1>Ruby on Rails</Tag1>
            <Tag1>JavaScript</Tag1>
            <Tag1>REST APIs</Tag1>
            <Tag1>SCSS</Tag1>
            <Tag1>Heroku</Tag1>
          </Tags>
          <Description>
            Footsteps is a full stack mobile application, built using Ruby on Rails to connect hikers with eachother. The app includes a route plotting feature (See README.md for this in action). Group messaging between people you are on a hike with. And plenty more!
          </Description>

          <p>P.S. Remember to inspect for mobile view</p>
          <Links>
            <LiveLink href="www.footsteps.world"><SocialImg src="./img/link-white.png" alt="" /></LiveLink>
            <GitHubLink href="https://github.com/hey24/footsteps"><SocialImg src="./img/github-white.png" alt="" /></GitHubLink>
          </Links>
        </Left>
        <Right>
          <Screenshot src="./img/footsteps-gif.gif" />
        </Right>
      </Container>
    </Section>
  )
}

export default FootstepsProject
