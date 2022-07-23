import styled from 'styled-components'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'

const Wrapper = styled.div`
   min-height: 100vh;
   overflow: hidden;
   display: flex;
   flex-direction: column;
`
const Container = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
`
const App = () => {
   return (
      <div className='App'>
         <Wrapper>
            <Container>
               <Hero />
               <Footer />
            </Container>
         </Wrapper>
      </div>
   )
}

export default App
