import React from 'react'
import FootstepsProject from './FootstepsProject'
import styled from 'styled-components'

const Section = styled.div`
height: 75vh;
display: flex;
justify-content: center;
`
const Container = styled.div`
  width: 1400px;
`
const Title = styled.h1`

`

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <Title>My Projects</Title>
        <FootstepsProject />
      </Container>
    </Section>
  )
}

export default Projects
