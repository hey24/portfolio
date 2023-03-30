import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
margin: 2rem 0;
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
  text-shadow: 1px 1px 4px gray;
`
const Tags = styled.div`
  display: flex;
  gap: 1rem;
`
const Tag1 = styled.p`
  background-color: #00467F;
  padding: 0.4rem;
  border-radius: 0.2rem;
  box-shadow: 1px 1px 4px gray;

  &:hover{
    transition: 0.5s;
    transform: translateY(-2px);
  }
`
const Description = styled.p`
  text-shadow: 1px 1px 4px gray;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Screenshot = styled.img`
  height: 350px;
  border-radius: 0.2rem;
  box-shadow: 1px 1px 4px gray;
`
const Links = styled.div`
  display: flex;
  gap: 1rem;
`
const LiveLink = styled.a``
const GitHubLink= styled.a`
text-shadow: 1px 1px 4px gray;`

const SocialImg = styled.img`
  height: 1.5rem;
  text-shadow: 1px 1px 4px gray;

  &:hover{
    transition: 0.5s;
    transform: translateY(2px);
  };
`

const SharkBaitProject = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Screenshot src="./img/sharkbait-gif.gif" />
        </Left>
        <Right>
          <ProjectName>SharkBait</ProjectName>
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
          <Links>
            <LiveLink href="https://sharkbait-hey24.herokuapp.com"><SocialImg src="./img/link-white.png" alt="" /></LiveLink>
            <GitHubLink href="https://github.com/hey24/SharkBait"><SocialImg src="./img/github-white.png" alt="" /></GitHubLink>
          </Links>

        </Right>
      </Container>
    </Section>
  )
}

export default SharkBaitProject
