import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import styled from "styled-components"

const Container = styled.div`
  color: white;
  height: 100vh;
  background: linear-gradient(to right, #4b6cb7, #182848);
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <Navbar />
      <Home />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
    </Container>
  )
}

export default App
