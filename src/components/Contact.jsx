import styled from 'styled-components'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

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


const Contact = () => {
  const ref = useRef();
  const [success,setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4wpkqz4', 'template_wyil4sp', ref.current, 'x1vJGn1cfn7US4eyz')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
        }, (error) => {
            console.log(error.text);
            setSuccess(false)
        });
  };

  return (
    <Section id='contact'>
      <Container>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Write your message" name="message" rows={10} />
            <Button type="submit">Send</Button>
            {success && "Your message has been sent. I will get back to as soon as possible!"}
          </Form>
      </Container>
    </Section>
  );
};

export default Contact;
