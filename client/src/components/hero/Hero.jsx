import styled from 'styled-components'
import Bg from './Bg'
import Map from '../bg/Map'
import ContactForm from '../contactForm/ContactForm'

const HeroPage = styled.div`
   flex: 1 0 100%;
   padding-left: 20px;
   padding-right: 20px;
   padding-top: 50px;
   margin-bottom: 150px;
   position: relative;
   background-image: url('/assets/img/cloudsBg.png');
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   @media screen and (min-width: 640px) {
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 75px;
      margin-bottom: 175px;
   }
   @media screen and (min-width: 768px) {
      padding-left: 110px;
      padding-right: 110px;
      padding-top: 90px;
      margin-bottom: 90px;
   }
   @media screen and (min-width: 1024px) {
      padding-left: 150px;
      padding-right: 150px;
   }
`
const HeroContainer = styled.div`
   max-width: 1180px;
   margin: 0 auto;
`
const Title = styled.h2`
   font-size: 40px;
   margin-bottom: 30px;
   font-weight: 400;
   color: #3e3e3e;
   text-align: center;
   @media screen and (min-width: 768px) {
      text-align: left;
   }
`

const Hero = () => {
   return (
      <HeroPage>
         <HeroContainer>
            <Bg />
            <Title>Reach out to us!</Title>
            <ContactForm />
            <Map />
         </HeroContainer>
      </HeroPage>
   )
}

export default Hero
