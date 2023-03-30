import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
`

const Container = styled.div`
  margin-top: 4rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`

const Title = styled.h1`
  font-weight: 200;
`

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Input = styled.input`
  padding: 1rem;
  background-color: lightgray;
  border-radius: 0.2rem;
  border: none;

  &:focus{
    outline: none;
  }
`

const TextArea = styled.textarea`
  padding: 1rem;
  background-color: lightgray;
  border-radius: 0.2rem;
  border: none;

  &:focus{
    outline: none;
  }
`

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: #00467F;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 0.2rem;

  &:hover{
    transition: 0.5s;
    background-color: #00467FDB;
    color: #ffffffbd;
    transform: translateY(2px);
  };
`

const handleSubmit = (e) => {
  e.preventDefault()
}

const Contact = () => {
  return (
    <Section id='contact'>
      <Container>
          <Form onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <TextArea placeholder="Write your message" rows={10} />
            <Button type="submit">Send</Button>
          </Form>
      </Container>
    </Section>
  )
}

export default Contact
