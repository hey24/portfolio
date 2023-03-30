import React from 'react'
import styled from 'styled-components'

const Section = styled.div``
const Container = styled.div``
const Left = styled.div``
const ProjectName = styled.h2``
const Tags = styled.div``
const Tag1 = styled.p``
const Description = styled.p``
const Right = styled.div``
const Screenshot = styled.img``
const Links = styled.div``
const LiveLink = styled.a``
const GitHubLink= styled.a``

const FootstepsProject = () => {
  return (
    <Section>
      <Container>
        <Left>
          <ProjectName>Footsteps</ProjectName>
          <Tags>
            <Tag1></Tag1>
            <Tag1></Tag1>
            <Tag1></Tag1>
          </Tags>
          <Description></Description>
        </Left>
        <Right>
          <Screenshot></Screenshot>
          <Links>
            <LiveLink></LiveLink>
            <GitHubLink></GitHubLink>
          </Links>
        </Right>
      </Container>
    </Section>
  )
}

export default FootstepsProject
