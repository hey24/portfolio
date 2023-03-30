import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  position: sticky;
  background: linear-gradient(to right, #4b6cb7, #182848);
  opacity: 1;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: 10;
`
const Container = styled.div`
width: 1400px
`
const NavItems = styled.div`
display: flex;
justify-content: space-between;
padding:  0.2rem;

@media only screen and (max-width: 768px) {
    padding: 0;
  }
`
const LogoBig = styled.img`
  height: 4rem;

  @media only screen and (max-width: 768px) {
    display: none;
  }

  &:hover{
    transition: 0.5s;
    transform: translateY(2px);
  }
`
const LogoSmall = styled.img`
  height: 4rem;
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  &:hover{
    transition: 0.5s;
    transform: translateY(2px);
  }
`
const NavLinks = styled.div`
display: flex;
`
const LinksList = styled.ul`
display: flex;
align-items: center;
padding: 0.5rem;
gap: 1rem;
list-style: none;

@media only screen and (max-width: 768px) {
    display: none;
  }
`
const ListItem = styled.li`
  cursor: pointer;
  text-decoration: none;

  &:hover{
    transition: 0.5s;
    color: #ffffffbd;
    transform: translateY(2px);
  }
`
const ListLink = styled.a`
  color: white;
  cursor: pointer;
  text-decoration: none;

  &:hover{
    transition: 0.5s;
    color: #ffffffbd;
  }
`
const Button = styled.a`
  text-decoration: none;
  text-align: center;
  width: 6rem;
  padding: 0.2rem 0.2rem;
  margin: 1rem;
  background-color: #8f79d8;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 0.2rem;

  &:hover{
    transition: 0.5s;
    background-color: #8f79d8bd;
    color: #ffffffbd;
    transform: translateY(2px);
  };
`



const Navbar = () => {
  return (
    <Section>
      <Container>
        <NavItems>
          <a href="home"><LogoBig src="./img/logo.png" /></a>
          <a href="home"><LogoSmall src="./img/ben-logo.png" /></a>
          <NavLinks>
            <LinksList>
              <ListItem><ListLink href="#about">About</ListLink></ListItem>
              <ListItem><ListLink href="#skills">Skills</ListLink></ListItem>
              <ListItem><ListLink href="#projects">Projects</ListLink></ListItem>
            </LinksList>
            <Button href="#contact">Contact<br></br>Me!</Button>
          </NavLinks>
        </NavItems>
      </Container>
    </Section>
  )
}

export default Navbar
